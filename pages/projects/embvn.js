import Container from "../../components/Container";
import NextLink from "next/link";

export default function EMBvn() {
  return (
    <Container>
      <div className="items-start mx-auto w-full max-w-3xl space-x-2 space-y-4">
        <NextLink href="/">
          <a>
            <div className="inline-flex items-center space-x-1 text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white text-xl uppercase font-carbon-bold">
              <p>/</p>
              <p>PRJ</p>
            </div>
          </a>
        </NextLink>
        <div className="inline-flex items-center space-x-1 text-black dark:text-white text-xl uppercase font-carbon-bold">
          <p>/</p>
          <h1>EMB Vietnam</h1>
        </div>
      </div>

      <div></div>
    </Container>
  );
}
