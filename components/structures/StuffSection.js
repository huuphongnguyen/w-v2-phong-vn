import {
  ArrowUpRight,
  Camera,
  Chess,
  KeyCap,
  Radish,
  VictoryHand,
} from "akar-icons";
import useTranslation from "next-translate/useTranslation";
import NextLink from "next/link";
import QuotesView from "../elements/QuotesView";

export default function StuffSection({ resultssync }) {
  const { t } = useTranslation("common");
  return (
    <div>
      <div className="inline-flex items-center space-x-1">
        <p className="text-black dark:text-white text-xl uppercase font-carbonbold">
          /
        </p>
        <h1 className="text-black dark:text-white text-xl uppercase font-carbonbold">
          Stuff
        </h1>
      </div>
      <div className="px-4 py-2 space-y-4">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <VictoryHand className="text-black dark:text-white" />
            <h2 className="text-base font-bold text-black dark:text-white font-carbonbold">
              My playlists
            </h2>
          </div>
          <div className="space-y-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="space-y-1 hidden">
                <div className="bg-white dark:px-1 dark:rounded-md">
                  <img
                    src="https://widget-spotify-now-playing.vercel.app/now-playing"
                    width="256"
                    height="64"
                    alt="Phong's Spotify Now Playing"
                  />
                </div>
                <p className="text-black text-xs dark:text-white uppercase">
                  {t("stuff-spotify-explain")}{" "}
                  <a
                    className="font-bold rainbow_text_hover"
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
                    <div className="text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black px-2 py-0 inline-flex font-carbonbold uppercase items-center space-x-2 group">
                      Spotify
                      <ArrowUpRight
                        className="text-black dark:text-white group-hover:text-white dark:group-hover:text-black"
                        size={18}
                      />
                    </div>
                  </a>
                  <a href="https://soundcloud.com/donuf" target="_blank">
                    <div className="text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black px-2 py-0 inline-flex font-carbonbold uppercase items-center space-x-2 group">
                      Soundcloud
                      <ArrowUpRight
                        className="text-black dark:text-white group-hover:text-white dark:group-hover:text-black"
                        size={18}
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="mt-4 grid grid-cols-5 md:grid-cols-10">
                {spotifyplaylists.map((playlist, index) => (
                  <a key={index} href={playlist[1]} target="_blank">
                    <div className="w-full aspect-w-1 aspect-h-1 relative group">
                      <img
                        src={playlist[0] ?? null}
                        className="object-cover absolute"
                        quality={10}
                      />
                      <div className="bg-black bg-opacity-50 justify-center items-center flex w-full h-full absolute opacity-0 group-hover:opacity-100">
                        <ArrowUpRight className="text-white" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col space-y-4 md:space-y-0 md:grid md:grid-cols-2 gap-4 pt-2 md:pt-4">
          <div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Chess className="text-black dark:text-white" />
                <h2 className="text-black dark:text-white font-carbonbold text-base font-bold">
                  My domains I am chilling with
                </h2>
              </div>
              <div>
                <NextLink href="/domains">
                  <a>
                    <div className="inline-flex items-center space-x-1 bg-white dark:bg-black hover:bg-black dark:hover:bg-white group px-2 py-1">
                      <p className="text-black dark:text-white group-hover:text-white dark:group-hover:text-black uppercase font-bold text-xs">
                        see more
                      </p>
                      <ArrowUpRight
                        className="text-black dark:text-white group-hover:text-white dark:group-hover:text-black"
                        size={18}
                      />
                    </div>
                  </a>
                </NextLink>
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <KeyCap className="text-black dark:text-white" />
                <h2 className="text-black dark:text-white font-carbonbold text-base font-bold">
                  My tools I am using it to create
                </h2>
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <a href="/tools">
                    <div className="inline-flex items-center space-x-1 bg-white dark:bg-black hover:bg-black dark:hover:bg-white group px-2 py-1">
                      <p className="text-black dark:text-white group-hover:text-white dark:group-hover:text-black uppercase font-bold text-xs">
                        explore
                      </p>
                      <ArrowUpRight
                        className="text-black dark:text-white group-hover:text-white dark:group-hover:text-black"
                        size={18}
                      />
                    </div>
                  </a>

                  <div className="inline-flex">
                    <p className="text-black dark:text-white px-2 text-xs uppercase font-bold border-2 border-black">
                      Syncing with Notion API
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 mb-4">
                <Camera className="text-black dark:text-white" />
                <h2 className="text-black dark:text-white font-carbonbold text-base font-bold">
                  Others & my public moments
                </h2>
              </div>
              <p className="text-black dark:text-white font-bold text-sm">
                {t("stuff-moments-together")}
              </p>
              <a href="https://futureme.org" target="_blank">
                <div className="items-center space-x-2 mt-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 inline-flex">
                  <div className="w-[124px] h-[22px] flex relative">
                    <img src="/icons/futureme.svg" className="object-cover" />
                  </div>
                  <p className="text-black dark:text-white dark:hover:text-white font-carbonbold uppercase text-base px-2 pt-1">
                    Write a letter
                  </p>
                </div>
              </a>
              <a href="https://dispo.fun/@shop" target="_blank">
                <div className="inline-flex items-center space-x-1 hover:bg-gray-100 dark:hover:bg-gray-800 px-0 md:px-4 py-2 rounded-lg group">
                  <div className="w-12 h-12 relative transform transition-all group-hover:rotate-[70deg]">
                    <img
                      src="/static/dispo-roll-green.gif"
                      className="object-cover absolute"
                    />
                  </div>
                  <div className="w-12 h-12 relative transform transition-all delay-100 group-hover:rotate-[70deg]">
                    <img
                      src="/static/dispo-roll-blue.gif"
                      className="object-cover absolute"
                    />
                  </div>
                  <div className="w-12 h-12 relative transform transition-all delay-200 group-hover:rotate-[70deg]">
                    <img
                      src="/static/dispo-roll-red.gif"
                      className="object-cover absolute"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 relative">
                      <img
                        src="/static/dispo-logo.svg"
                        className="object-cover absolute dark:bg-white"
                      />
                    </div>
                    <p className="text-black dark:text-white font-carbonbold uppercase">
                      Dispo.fun/@shop
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 mb-4">
                <Radish className="text-black dark:text-white" />
                <h2 className="text-black dark:text-white font-carbonbold text-base font-bold">
                  Need some quotes?
                </h2>
              </div>
              <div>
                <QuotesView resultssync={resultssync} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const spotifyplaylists = [
  [
    "https://66.media.tumblr.com/329fb0c10b783b4042aea2d776705105/tumblr_n437znIrAm1s5rsdao1_500.gif",
    "https://open.spotify.com/playlist/1HjjtwwOwVINLAx1mAlWe2?si=4dbb1b95b12c4ed9",
  ],
  [
    "https://66.media.tumblr.com/8dd1c4e0584dea0679b86ee06199b4a5/tumblr_nyt53pb9RP1rcz4rao1_540.jpg",
    "https://open.spotify.com/playlist/5wlEcUgC7xf2CjCvIxk70G?si=e92d1debf315471e",
  ],
  [
    "https://66.media.tumblr.com/afee8b2b29b8b577a645c08045e4eaf9/tumblr_njtn3fak2m1r0ixdro1_1280.png",
    "https://open.spotify.com/playlist/1SQvYtYjRwS0LkE2hEhWxL?si=b3fb6bbac820405d",
  ],
  [
    "https://66.media.tumblr.com/2f145a5bf6346155904c6398595158fb/tumblr_o2tyj5v0yW1r20fq5o1_1280.jpg",
    "https://open.spotify.com/playlist/4fhMrEtvGS0xZ2YWRNt6Rk?si=2e71ac66454748b8",
  ],
  [
    "https://66.media.tumblr.com/805ed4e0e9a0d6f367025a1eb9c97fff/tumblr_nm8pipaX161r5rhxlo1_640.jpg",
    "https://open.spotify.com/playlist/70B9AFJrPNt6CycPwar9Ew?si=54b6021665f94139",
  ],
  [
    "https://66.media.tumblr.com/1d02ea896bebab4e82ab68d630848ae4/tumblr_nldfvjgipT1u9b9ceo1_500.gif",
    "https://open.spotify.com/playlist/6hDHYebjewy9MqM3KCsvnP?si=6b60b79e38e64bec",
  ],
  [
    "https://66.media.tumblr.com/bb9ad945128756956e6b2dff0005bd73/tumblr_peseexylMJ1viuar9o1_640.gif",
    "https://open.spotify.com/playlist/67KsE5j5uAtMyFyUV4qQU6?si=4a68fcdf2913414e",
  ],
  [
    "https://66.media.tumblr.com/0b5d1a2c8b9bd2db16d56216c53f16ee/tumblr_oedtvhZ7J81s7ibqko1_1280.jpg",
    "https://open.spotify.com/playlist/7bPtEpYy9rF5yFmAfhuMGv?si=f373f944db0c4299",
  ],
  [
    "https://66.media.tumblr.com/ff7dbf4691818d5c20eb7eb8dcd7d49e/tumblr_o3sluaUi7k1uzcmcro1_640.gif",
    "https://open.spotify.com/playlist/5vopcEtNCTaGEzr7LoMbXU?si=1bbab58d5c6b419d",
  ],
  [
    "https://66.media.tumblr.com/35d6154fc76f2be18d234a4d2e8d7226/tumblr_pbjr37o7Zb1qh0kqjo1_1280.jpg",
    "https://open.spotify.com/playlist/5JYYjxfYoeVmi5KTtq3pVv?si=ced3cf02084c4bc5",
  ],
];
