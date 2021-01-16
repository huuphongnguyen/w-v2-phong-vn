export default function ExternalLink({ href, children }) {
  return (
    <a
      className="text-sm font-bold text-yellow-500 hover:text-yellow-500 transition"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );
}
