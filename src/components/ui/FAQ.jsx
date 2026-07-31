import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) =>
    setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <div className="my-4 divide-y divide-gray-200 rounded-lg border border-gray-200 dark:divide-gray-800 dark:border-gray-800">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggle(index)}
            className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium"
          >
            {item.question}
            <ChevronDown
              size={16}
              className={`shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
            />
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
