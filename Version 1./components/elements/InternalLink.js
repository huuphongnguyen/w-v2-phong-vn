import NextLink from "next/link";

export default function InternalLink({ href, children }) {
  return (
    <NextLink href={href}>
      <a className="font-bold text-black dark:text-white transition">
        {children}
      </a>
    </NextLink>
  );
}
