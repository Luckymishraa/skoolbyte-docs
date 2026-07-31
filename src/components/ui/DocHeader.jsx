export default function DocHeader({ title, description }) {
  return (
    <div className="mb-8 border-b border-gray-200 pb-6 dark:border-gray-800">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        {title}
      </h1>
      {description && (
        <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}
