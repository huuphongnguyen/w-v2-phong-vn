import InternalLink from "../components/elements/InternalLink";

export default function DomainCard({
  domainurl,
  domainname,
  domaindescription,
  domainregister,
  domainstartdate,
}) {
  return (
    <div>
      <InternalLink href={domainurl}>
        <div className="md:flex items-start md:space-x-2 p-2 bg-notion-default dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md my-2">
          <div className="flex items-center justify-center">
            <div>
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                ></path>
              </svg>
            </div>
          </div>

          <div className=" md:flex items-start md:space-x-2 text-black dark:text-white">
            <div className="w-200px">
              <h2 className="text-md font-bold ml-0.5 md:ml-1">{domainname}</h2>
            </div>
            <div className="space-y-2 pt-2 md:pt-0 md:w-2/3">
              <p className="text-sm font-normal text-black dark:text-gray-400">
                {domaindescription}
              </p>
              <div className="flex items-center space-x-2 text-black">
                <div className="inline-flex text-sm font-normal px-2 bg-notion-red rounded-full">
                  {domainregister}
                </div>
                <div className="inline-flex text-sm font-normal px-2 bg-notion-blue rounded-full">
                  {domainstartdate}
                </div>
              </div>
            </div>
          </div>
        </div>
      </InternalLink>
    </div>
  );
}
