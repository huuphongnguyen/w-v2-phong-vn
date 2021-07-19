import { IconBrandSpotify } from "@tabler/icons";
import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import useTranslation from "next-translate/useTranslation";

export default function SpotifyNowPlaying() {
  const { data } = useSWR("/api/now-playing", fetcher);
  const { t } = useTranslation("common");

  return (
    <div className="border-2 border-black dark:border-white border-dashed rounded-2xl">
      <div className="w-full">
        <div className="flex items-center space-x-6 p-4">
          <div className="flex items-center justify-center">
            {data?.albumImageUrl ? (
              <div className="w-[100px] h-[100px] relative">
                <div
                  className={`${data?.isPlaying ? "animate-spin-slow-42" : ""}`}
                >
                  <img
                    src={data.albumImageUrl}
                    className="bg-gray-100 w-full rounded-full shadow-xl"
                  />
                  <div className="z-[1] bg-white absolute w-full h-full top-0 origin-center scale-[0.2] rounded-full" />
                  <div className="z-[2] bg-black absolute w-full h-full top-0 origin-center scale-[0.07] rounded-full" />
                </div>
              </div>
            ) : (
              <div className="w-[100px] h-[100px] bg-gray-200 dark:bg-gray-700 relative rounded-full">
                <div className="z-[1] bg-white absolute w-full h-full top-0 origin-center scale-[0.2] rounded-full" />
                <div className="z-[2] bg-black absolute w-full h-full top-0 origin-center scale-[0.07] rounded-full" />
              </div>
            )}
          </div>
          <div className=" max-w-full truncate space-y-1">
            {data?.songUrl ? (
              <a href={data.songUrl} target="_blank" rel="noopener noreferrer">
                <div className="flex items-center space-x-1">
                  <div>
                    <IconBrandSpotify
                      size={27}
                      stroke={2}
                      className="text-green-500"
                    />
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 max-w-max truncate text-sm font-bold hover:text-green-500">
                    {data.title}
                  </p>
                </div>
              </a>
            ) : (
              <p className="text-gray-800 dark:text-gray-200 font-bold">
                {t("spotify-now-playing-title")}
              </p>
            )}
            <div className="space-y-1">
              <div>
                <p className="text-black dark:text-white max-w-max truncate text-sm">
                  <span className="text-xs font-bold uppercase">
                    {data?.albumtype}
                  </span>{" "}
                  {data?.album ?? ""}
                </p>
              </div>
              <div>
                <p className="text-black dark:text-white max-w-max truncate text-sm">
                  <span className="text-xs font-bold uppercase">
                    {data?.artistUrl ? "Artist :" : ""}
                  </span>{" "}
                  <a
                    href={`${data?.artistUrl ?? ""}`}
                    target="_blank"
                    className="hover:text-green-500"
                    rel="noopener noreferrer"
                  >
                    {data?.artist ?? ""}
                  </a>
                </p>
              </div>
              <div>
                <div className="pl-2 my-2">
                  {data?.isPlaying ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 relative">
                        <div className="w-full h-full bg-green-500 rounded-full animate-ping" />
                        <div className="w-full h-full bg-green-500 rounded-full absolute top-0" />
                      </div>
                      <p className="text-black dark:text-white font-bold uppercase text-xs">
                        {t("spotify-now-playing-status-playing")}
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 relative">
                        <div className="w-full h-full bg-yellow-500 rounded-full animate-ping" />
                        <div className="w-full h-full bg-yellow-500 rounded-full absolute top-0" />
                      </div>
                      <p className="text-black dark:text-white font-bold uppercase text-xs">
                        {t("spotify-now-playing-status-paused")}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div>
              <p className="text-black dark:text-white text-xs">
                Real-time syncing with{" "}
                <a
                  href="https://developer.spotify.com/documentation/web-api/"
                  target="_blank"
                  className="font-bold hover:text-green-500"
                >
                  Spotify API
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
