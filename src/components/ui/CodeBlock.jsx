import CopyButton from "./CopyButton.jsx";

export default function CodeBlock({ code, language = "bash", filename }) {
  return (
    <div className="my-4 overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
      {filename && (
        <div className="border-b border-gray-800 px-4 py-2 text-xs text-gray-400">
          {filename}
        </div>
      )}
      <div className="flex items-start justify-between gap-4 px-4 py-3">
        <pre className="overflow-x-auto text-sm text-gray-100">
          <code className={`language-${language}`}>{code}</code>
        </pre>
        <CopyButton text={code} />
      </div>
    </div>
  );
}
