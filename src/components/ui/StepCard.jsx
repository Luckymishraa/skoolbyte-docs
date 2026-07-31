export default function StepCard({ number, title, children }) {
  return (
    <div className="my-4 flex gap-4">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
        {number}
      </div>
      <div className="flex-1 pb-2">
        <p className="mb-1 font-medium text-gray-900 dark:text-gray-100">
          {title}
        </p>
        <div className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {children}
        </div>
      </div>
    </div>
  );
}
