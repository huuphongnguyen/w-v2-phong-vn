import NextImage from "next/image";
import ExternalLink from "./elements/ExternalLink";

export default function ToolCard({
  toolurl,
  toolname,
  tooldescription,
  toolicon,
}) {
  return (
    <div>
      <ExternalLink href={toolurl}>
        <div className="flex items-center space-x-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md my-2">
          <div className="flex items-center justify-center">
            <NextImage src={toolicon} width={20} height={20} />
          </div>
          <div className="flex items-center space-x-1 text-black dark:text-white">
            <h2 className="font-bold">{toolname}</h2>
            <span>:</span>
            <p className="font-normal">{tooldescription}</p>
          </div>
        </div>
      </ExternalLink>
    </div>
  );
}
