import { ImageIcon } from "lucide-react";

export default function ScreenshotPlaceholder({ src, alt, caption }) {
  if (src) {
    return (
      <figure className="my-6">
        <img
          src={src}
          alt={alt}
          className="w-full rounded-lg border border-gray-200 shadow-sm dark:border-gray-800"
        />
        {caption && (
          <figcaption className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <div className="my-6 flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 text-gray-400 dark:border-gray-700 dark:bg-gray-900/50">
      <ImageIcon size={28} />
      <span className="text-sm">{alt ?? "Screenshot placeholder"}</span>
    </div>
  );
}
