export default function Heading5({ children, id }) {
  return (
    <h5 id={id} className="font-bold text-sm my-3 text-black dark:text-white">
      {children}
    </h5>
  );
}
