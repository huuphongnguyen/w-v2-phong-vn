import { ArrowUpRight } from "akar-icons";
import useTranslation from "next-translate/useTranslation";

export default function StuffSection() {
  const { t } = useTranslation("common");
  return (
    <div>
      <div className="inline-flex items-center space-x-1">
        <p className="text-black dark:text-white text-xl uppercase font-carbon-bold">
          /
        </p>
        <h1 className="text-black dark:text-white text-xl uppercase font-carbon-bold">
          Stuff
        </h1>
      </div>
      <div className="px-4 py-2 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="space-y-1">
            <img
              src="https://widget-spotify-now-playing.vercel.app/now-playing"
              width="256"
              height="64"
              alt="Now Playing"
            />
            <p className="text-black text-xs dark:text-white uppercase">
              {t("stuff-spotify-explain")}{" "}
              <a
                className="font-bold"
                href="https://developer.spotify.com/documentation/web-api/"
                target="_blank"
              >
                API
              </a>
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-black dark:text-white font-bold text-sm">
              {t("stuff-spotify-ask")}
            </p>
            <div className="flex items-center space-x-2">
              <a
                href="https://open.spotify.com/user/bwunro2q3l6dcfnvz6vb07g89?si=bL3D9kWXTF6sUrrJLotJLA"
                target="_blank"
              >
                <div className="text-white dark:text-black bg-black dark:bg-white px-2 py-0 inline-flex font-carbon-bold uppercase items-center space-x-2">
                  Spotify
                  <ArrowUpRight
                    className="text-white dark:text-black"
                    size={18}
                  />
                </div>
              </a>
              <a href="https://soundcloud.com/donuf" target="_blank">
                <div className="text-white dark:text-black bg-black dark:bg-white px-2 py-0 inline-flex font-carbon-bold uppercase items-center space-x-2">
                  Soundcloud
                  <ArrowUpRight
                    className="text-white dark:text-black"
                    size={18}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
