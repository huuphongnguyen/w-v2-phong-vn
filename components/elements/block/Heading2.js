export default function Heading2({ children, id }) {
  return (
    <h2 id={id} className="font-bold text-xl my-3 text-black dark:text-white">
      {children}
    </h2>
  );
}
