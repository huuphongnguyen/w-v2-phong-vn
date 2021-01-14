import Image from "next/image";
import NextLink from "next/link";

export default function Logo() {
  return (
    <NextLink href="/">
      <a>
        <div className="transform scale-125 py-5">
          <div class="phong-main">
            <div class="phong-icon">
              <Image src="/logos/phong-icon.svg" width={105} height={105} />
            </div>
            <div class="phong-info">
              <Image
                class="logo-rotate"
                src="/logos/phong-info.svg"
                width={127}
                height={127}
              />
            </div>
          </div>
        </div>
      </a>
    </NextLink>
  );
}
