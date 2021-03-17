import Link from "next/link";
import NextImage from "next/image";

const BlogPost = ({ title, summary, slug, publishedAt, image }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full">
        <div className="mb-8 w-full flex space-x-3 rounded-md p-0 md:p-3 md:dark:hover:bg-gray-700 md:hover:bg-gray-200">
          <div className="w-1/2 md:w-300px relative">
            <div className="w-full h-full">
              <NextImage
                className="object-cover rounded-md"
                src={image}
                layout="fill"
                priority="true"
                quality="50"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col md:flex-row justify-between">
              <h4 className="font-bold text-xl md:text-xl mb-1 w-full text-gray-900 dark:text-gray-100">
                {title}
              </h4>
              <p className="text-sm text-gray-500 text-left md:text-right w-32 mb-1 md:mb-0">
                {publishedAt}
              </p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-4 md:line-clamp-none">
              {summary}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;
