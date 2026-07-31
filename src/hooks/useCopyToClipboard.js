import { useState } from "react";

export function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return { isCopied, copy };
}
