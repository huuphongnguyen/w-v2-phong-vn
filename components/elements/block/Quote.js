export default function Quote({ children }) {
  return (
    <div className="px-3 border-l-2 border-black dark:border-white text-black dark:text-white">
      <p className="text-sm leading-6 mb-2">{children}</p>
    </div>
  );
}
