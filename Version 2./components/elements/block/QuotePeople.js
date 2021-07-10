import ExternalLink from "../ExternalLink";

export default function QuotePeople({
  children,
  imgwhosaid,
  namewhossaid,
  reflink,
  reftitle,
}) {
  return (
    <div className="p-4 pb-6 bg-gray-100 dark:bg-gray-800 text-black dark:text-white space-y-4 my-4">
      <p className="text-base leading-6 mb-2">{children}</p>
      <div className="space-y-2 flex items-start space-x-2">
        <img src={imgwhosaid} className="w-24 h-24 bg-gray-200 object-cover" />
        <div>
          <p className="text-black dark:text-white font-bold mb-4">
            {namewhossaid}
          </p>
          <p className="uppercase text-black dark:text-white text-xs font-bold">
            References:
          </p>
          <ExternalLink href={reflink}>
            <p className="text-sm font-normal text-black dark:text-white">
              {reftitle}
            </p>
          </ExternalLink>
        </div>
      </div>
    </div>
  );
}
