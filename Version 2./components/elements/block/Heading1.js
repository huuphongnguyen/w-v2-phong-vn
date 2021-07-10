export default function Heading1({ children, id }) {
  return (
    <h1 id={id} className="font-bold text-2xl my-3 text-black dark:text-white">
      {children}
    </h1>
  );
}
