import Link from "next/link";

const SnippetPost = ({ title, summary, slug, publishedAt, image }) => {
  return (
    <Link href={`/snippets/${slug}`}>
      <a className="w-full">
        <div className="mb-8 w-full space-x-3 rounded-xl p-0 md:p-3 md:dark:hover:bg-gray-700 md:hover:bg-gray-200">
          <div className="px-3 inline-flex">
            <img src={image} width={33} height={33} />
          </div>

          <div className="w-full">
            <div className=" justify-start">
              <h4 className="font-bold text-xl md:text-md mb-1 w-full text-gray-900 dark:text-gray-100">
                {title}
              </h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-4 md:line-clamp-3">
              {summary}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default SnippetPost;
