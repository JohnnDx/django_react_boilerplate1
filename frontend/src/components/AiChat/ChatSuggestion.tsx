import React from "react";
import { SuggestionArr } from "./constants";
import { ISuggestionBoxProps } from "./types";
import { Button } from "../ui/button";

const ChatSuggestion = ({ onSuggestionClick }: ISuggestionBoxProps) => {
  return (
    <div className="mt-6">
      <div className="pl-2 text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">
        Suggestions
      </div>
      <div className="flex flex-wrap gap-3">
        {SuggestionArr.map((suggestion, index) => (
          <Button
            key={index}
            onClick={() => onSuggestionClick(suggestion)}
            className="bg-black text-white hover:bg-gray-800 transition-all duration-150 shadow-md px-4 py-2 rounded-md text-sm mb-2"
          >
            {suggestion}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ChatSuggestion;
