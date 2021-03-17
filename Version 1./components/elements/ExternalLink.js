export default function ExternalLink({
  href,
  children,
  colortext,
  colortexthover,
}) {
  return (
    <a
      className={`${colortext} ${colortexthover} font-bold text-sm`}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );
}
