import Container from "../../components/Container";
import { useRouter } from "next/router";

const defaultEndpoint = process.env.ARCHILLECT_AI_UNOFFICIAL_API;

export async function getServerSideProps({ query }) {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();

  return {
    props: {
      data,
      url: query || null,
    },
  };
}

export default function Archillect({ data, url }) {
  const archillectarray = [data];
  const ab = url;
  const dataget = archillectarray[0][ab.id];

  const router = useRouter();

  console.log("datatags", url);

  return (
    <Container>
      <div className="flex flex-col mx-auto bg-gray-100 dark:bg-gray-900 items-start max-w-4xl my-2 md:my-10 p-5 md:p-10 rounded-xl w-full">
        <div
          className="flex space-x-2 items-center p-0 md:p-2 cursor-pointer mb-2 rounded-md text-black dark:text-white hover:bg-gray-200 dark:hover:text-black"
          onClick={() => router.back()}
        >
          <div>
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
              ></path>
            </svg>
          </div>
          <p className="text-sm font-bold">Quay trở lại Trang Blog chính</p>
        </div>
        <h1>{dataget.id}</h1>
        <img src={dataget.imageSource} width={100} height={100} />
      </div>
    </Container>
  );
}
