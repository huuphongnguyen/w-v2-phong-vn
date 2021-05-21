export default function Heading3({ children, id }) {
  return (
    <h3 id={id} className="font-bold text-lg my-3 text-black dark:text-white">
      {children}
    </h3>
  );
}
