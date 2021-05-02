import NextLink from "next/link";

export default function ContactButton() {
  return (
    <div>
      <NextLink href="/phong">
        <a
          className="rainbow_contact_button font-carbon-bold"
          alt="Contact me"
        />
      </NextLink>
    </div>
  );
}
