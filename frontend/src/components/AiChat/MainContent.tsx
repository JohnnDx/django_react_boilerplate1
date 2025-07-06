"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChatBox } from "./ChatBox";
import InputBox from "./InputBox";
import { Message } from "./types";
import { useRouter, useSearchParams } from "next/navigation";
import { CHAT_ID_KEY } from "./constants";
import { v4 as uuidv4 } from "uuid";
import { getToken } from "@/utils/auth";
import toast from "react-hot-toast";
import { parseSSEChunks } from "@/utils/streaming";

const MainContent = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [isStreaming, setIsStreaming] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const router = useRouter();
  const chatId = searchParams.get(CHAT_ID_KEY);

  const token = getToken();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length && isStreaming) {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [messages, isStreaming]);

  const onSend = async (input: string) => {
    try {
      const controller = new AbortController();
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/chat/sse`,
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          signal: controller.signal,
          body: JSON.stringify({
            chat_id: chatId ?? uuidv4().toString(),
            question: input,
          }),
        }
      );

      const data = response.body;
      let done = false;
      if (!data || response.status !== 200) {
        toast.error(
          response.status === 402
            ? "Please upgrade your plan to continue."
            : `Something went wrong. Please contact ${process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support"}`
        );
        return;
      }

      const reader = data.getReader();
      const decoder = new TextDecoder();
      let resultString = "";

      let newChatArray = [...messages, { chatContent: input, isSent: true }];
      setMessages(newChatArray);
      setIsStreaming(true);

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);

        if (chunkValue) {
          const chunks = parseSSEChunks(chunkValue);
          for (const chunk of chunks) {
            if (chunk.event === "update") {
              resultString += chunk.data;

              if (newChatArray.at(-1)?.isSent) {
                newChatArray.push({ isSent: false, chatContent: resultString });
              } else {
                newChatArray[newChatArray.length - 1].chatContent = resultString;
              }
              setMessages([...newChatArray]);
            }
          }
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsStreaming(false);
    }
  };

  return (
    <div className="flex flex-col h-full w-full max-w-4xl mx-auto px-4 md:px-6">
      <div className="flex-grow overflow-y-auto space-y-4 py-8 no-scrollbar">
        {messages.length ? (
          messages.map((message, idx) => (
            <ChatBox key={idx} isSent={message.isSent} chatContent={message.chatContent} />
          ))
        ) : (
          <ChatBox isSent={false} isDefault={true} chatContent="" />
        )}
        <div ref={ref} />
      </div>

      <div className="sticky bottom-4 bg-background px-2 md:px-6 py-4 shadow-lg rounded-xl">
        <InputBox
          input={input}
          setInput={setInput}
          onSend={onSend}
          hideSuggestions={!messages.length}
          isStreaming={isStreaming}
        />
      </div>
    </div>
  );
};

export default MainContent;
