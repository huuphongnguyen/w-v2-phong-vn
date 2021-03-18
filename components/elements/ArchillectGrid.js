import NextImage from "next/image";

export default function ArchillectGrid({ sync }) {
  console.log("sync", sync);
  return (
    <div className="grid grid-cols-autoscale">
      {sync.map((element, index) => (
        <div key={index} className="relative group">
          <div className="aspect-w-1 aspect-h-1">
            <NextImage
              src={element.imageSource}
              layout="fill"
              className="object-cover"
              quality={50}
            />
          </div>
          <div className="absolute inline-block opacity-0 group-hover:opacity-100 top-0 px-1 font-carbon-bold text-white bg-red-500">
            {element.id}
          </div>
        </div>
      ))}
    </div>
  );
}
