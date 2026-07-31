import { Check, Copy } from "lucide-react";
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard.js";

export default function CopyButton({ text }) {
  const { isCopied, copy } = useCopyToClipboard();

  return (
    <button
      onClick={() => copy(text)}
      aria-label="Copy code"
      className="rounded-md p-1.5 text-gray-400 hover:bg-gray-800 hover:text-gray-100"
    >
      {isCopied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
}
