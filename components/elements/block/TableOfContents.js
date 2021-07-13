export default function TableOfContents({ children }) {
  return (
    <div className="px-5 py-5 bg-purple-200 rounded-md text-sm flex-col md:inline-flex">
      <p className="text-black font-carbonbold uppercase text-lg">Contents</p>
      <ul className="text-black">{children}</ul>
    </div>
  );
}
