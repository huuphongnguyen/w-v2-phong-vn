export default function Heading4({ children, id }) {
  return (
    <h4 id={id} className="font-bold text-base my-3 text-black dark:text-white">
      {children}
    </h4>
  );
}
