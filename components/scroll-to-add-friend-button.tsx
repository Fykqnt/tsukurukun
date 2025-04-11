"use client"

import { Button } from "@/components/ui/button"
import { scrollToElement } from "@/utils/scroll-utils"

interface ScrollToAddFriendButtonProps {
  className?: string
}

export function ScrollToAddFriendButton({ className }: ScrollToAddFriendButtonProps) {
  const handleClick = () => {
    scrollToElement("add-friend-section");
  };

  return (
    <Button 
      onClick={handleClick}
      size="lg"
      className={`bg-gradient-to-r from-[#06C755] to-[#05b24e] hover:from-[#05a648] hover:to-[#049440] text-white rounded-full px-10 py-7 text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${className || ""}`}
    >
      LINEで友だち追加
      <span className="ml-2">👉</span>
    </Button>
  );
} 