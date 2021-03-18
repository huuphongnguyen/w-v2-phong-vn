import Container from "../../components/Container";
import NextLink from "next/link";

export default function TwitterHashflags() {
  return (
    <Container>
      <div className="items-start mx-auto w-full max-w-3xl space-x-1">
        <NextLink href="/">
          <a>
            <div className="inline-flex items-center space-x-1 text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white text-xl uppercase font-carbon-bold">
              <p>/</p>
              <p>Inspiration</p>
            </div>
          </a>
        </NextLink>
        <div className="inline-flex items-center space-x-1 text-black dark:text-white text-xl uppercase font-carbon-bold">
          <p>/</p>
          <h1>Twitter Hashflags</h1>
        </div>
      </div>
    </Container>
  );
}
