import NextImage from "next/image";
import NextLink from "next/link";

export default function HumanCard({ imagesrc, des, namehuman, profileurl }) {
  return (
    <div className="flex items-center space-x-4">
      <div>
        <NextImage
          className="rounded-md"
          src={imagesrc}
          width={100}
          height={100}
          quality="50"
          priority="true"
        />
      </div>
      <div className="space-y-4">
        <div className="space-y-1 mb-3">
          <div className="flex items-center space-x-1">
            <h2 className="text-xl md:text-2xl font-bold">{namehuman}</h2>
            <div>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <p>{des}</p>
        </div>
        <NextLink href={profileurl}>
          <a>
            <div className="inline-flex items-center space-x-1 hover:bg-gray-200 dark:hover:bg-gray-700 p-0 md:p-2 rounded-md md:transform md:-translate-x-2 cursor-pointer">
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
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                  ></path>
                </svg>
              </div>
              <p className="font-bold">Trang thông tin</p>
            </div>
          </a>
        </NextLink>
      </div>
    </div>
  );
}
