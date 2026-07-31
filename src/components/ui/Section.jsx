export default function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-4">
      {title && (
        <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h2>
      )}
      <div className="space-y-3 text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </section>
  );
}
