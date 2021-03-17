import NextImage from "next/image";
import ExternalLink from "./elements/ExternalLink";

export default function ToolCard({
  toolurl,
  toolname,
  tooldescription,
  toolicon,
  tooltags,
}) {
  return (
    <div>
      <ExternalLink href={toolurl}>
        <div className="flex items-start md:items-center space-x-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md my-2">
          <div className="flex items-center justify-center mt-1 md:mt-0">
            <NextImage src={toolicon} width={20} height={20} />
          </div>
          <div className="space-y-2 md:flex items-center md:space-x-2">
            <div className="space-y-1 md:flex items-center md:space-x-2 text-black dark:text-white">
              <h2 className="text-md font-bold ml-0.5 md:ml-1">{toolname}</h2>
              <p className="text-sm font-normal">{tooldescription}</p>
            </div>
            <div className="text-black flex items-center space-x-1">
              {tooltags.map((tag) => (
                <p className="text-black bg-gray-300 px-2 rounded-xl">{tag}</p>
              ))}
            </div>
          </div>
        </div>
      </ExternalLink>
    </div>
  );
}
