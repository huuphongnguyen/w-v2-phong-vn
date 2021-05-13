import NextImage from "next/image";

export default function VideoSection() {
  return (
    <div className="space-y-4">
      <p className="text-black font-carbon-bold text-xl text-center">
        A weird video is picked by someone on the Internet
      </p>
      <div className="flex items-center justify-center">
        <div className="absolute z-20">
          <iframe
            className="w-[360px] md:w-[460px] h-[250px]"
            src="https://www.youtube.com/embed/uWKlfC7N3Kw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-[480px] h-[270px] block relative transform scale-[1] origin-center">
          <NextImage
            src="https://media3.giphy.com/media/W3fbhbxNejGhsv44je/giphy.gif?cid=790b7611dbcd8bbf8404d81dbe6542a05de8e80e20c3fd4b&rid=giphy.gif&ct=s"
            layout="fill"
            className="absolute z-10"
          />
        </div>
      </div>
    </div>
  );
}
