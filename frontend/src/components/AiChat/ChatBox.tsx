"use client";
import React from "react";
import Image from "next/image";
import { IChatBoxProps } from "./types";
import { CHATBOT_NAME, DEFAULT_MESSAGE } from "./constants";
import { useUserContext } from "../../contexts/userContext";
import { classNames } from "@/utils/classNames";

export const ChatBox = ({ isSent, chatContent, isDefault = false }: IChatBoxProps) => {
  const { user } = useUserContext();

  const senderName = isSent ? `${user?.first_name ?? "User"} ${user?.last_name ?? ""}` : CHATBOT_NAME;
  const avatarSrc = isSent ? user?.avatar_url ?? "/avatars/default.png" : "/logos/rocket.png";

  return (
    <div className={classNames("flex flex-col w-full gap-2", isSent ? "items-end" : "items-start", "mt-10")}>
      {/* Header: Avatar + Name */}
      <div className="flex items-center gap-2">
        <Image
          src={avatarSrc}
          alt={`${senderName} avatar`}
          width={32}
          height={32}
          className="rounded-full border border-gray-200 dark:border-gray-700"
        />
        <span
          className={classNames(
            "text-sm font-medium",
            isSent ? "text-gray-800 dark:text-white" : "text-blue-600 dark:text-blue-400"
          )}
        >
          {senderName}
        </span>
      </div>

      {/* Message bubble */}
      <div
        className={classNames(
          "rounded-lg px-4 py-3 text-sm shadow-md whitespace-pre-line",
          isSent
            ? "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
            : "bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100",
          "border border-gray-200 dark:border-gray-700 max-w-[90%] md:max-w-3xl"
        )}
      >
        {isDefault ? DEFAULT_MESSAGE : chatContent}
      </div>
    </div>
  );
};
