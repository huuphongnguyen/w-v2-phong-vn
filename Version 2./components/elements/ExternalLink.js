import { ArrowUpRight } from "akar-icons";

export default function ExternalLink({
  href,
  children,
  colortext,
  colortexthover,
}) {
  return (
    <a
      className={`${colortext} font-bold text-sm inline-flex items-center`}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className={`${colortexthover} inline-block`}>{children}</span>
      <ArrowUpRight size={19} />
    </a>
  );
}
