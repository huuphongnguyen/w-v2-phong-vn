import NextImage from "next/image";

export default function VideoSection() {
  const videolist = [
    "https://www.youtube.com/embed/uWKlfC7N3Kw",
    "https://www.youtube.com/embed/sX1Y2JMK6g8",
    "https://www.youtube.com/embed/QJbpJQscn9E",
    "https://www.youtube.com/embed/4u6bWs-ZG0o",
    "https://www.youtube.com/embed/4PweEtDSqUs&t",
    "https://www.youtube.com/embed/3AOfv_cNWok",
    "https://www.youtube.com/embed/tQDvPwNBC90",
    "https://www.youtube.com/embed/8FFF-QQeVds",
    "https://www.youtube.com/embed/Vph0-ntRSRo",
    "https://www.youtube.com/embed/F8MN0o6RS9o",
    "https://www.youtube.com/embed/0xzDG8NLCxI",
    "https://www.youtube.com/embed/BOa0zQBRs_M",
  ];
  const video = videolist[Math.floor(Math.random() * videolist.length)];

  return (
    <div className="space-y-4">
      <p className="text-black font-carbonbold text-xl text-center">
        A weird video is picked randomly
      </p>
      <div className="flex items-center justify-center">
        <div className="absolute z-20">
          <iframe
            className="w-[360px] md:w-[460px] h-[250px]"
            src={video}
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
