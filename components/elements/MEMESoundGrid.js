import ReactPlayer from "react-player";
import { useState } from "react";

export default function MEMESoundGrid({ sync }) {
  const [isplaying, playing] = useState(false);
  const [ismemeadded, memeadded] = useState("");

  const [isloading, loading] = useState(false);

  function handleEND() {
    playing(false);
    memeadded("");
  }

  function handlePLAY(sound) {
    memeadded(sound);
    playing(true);
    loading(true);
  }

  function handleREADY() {
    loading(false);
  }

  return (
    <div>
      <div className="text-black dark:text-white font-carbon-bold text-xl mb-3">
        {isloading ? (
          "loading..."
        ) : isplaying ? (
          "playing..."
        ) : (
          <p className="font-bold text-black dark:text-white font-carbon-bold text-xl uppercase">
            so, pick one and fucking chill w/ it
          </p>
        )}
      </div>
      <div
        className={`space-y-2 p-3 ${
          isloading
            ? "border_dash_animated dark:border_dash_animated_dark"
            : "border-2 border-gray-200 dark:border-gray-700"
        }`}
      >
        {sync.map((element, index) => (
          <button
            key={index}
            className={`text-black px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-100 mr-2 focus:outline-none border-2 border-transparent border-dashed  ${
              isplaying ? "focus:border-black" : "focus:border-transparent"
            }`}
            onClick={(e) => handlePLAY(element.fields.sound)}
          >
            <p className="text-black font-carbon-bold text-xl">
              {element.fields.emoji}
            </p>
          </button>
        ))}
        <ReactPlayer
          url={ismemeadded}
          className="bg-red-500 hidden"
          volume={1}
          height={50}
          width={50}
          playing={isplaying ? true : false}
          onEnded={handleEND}
          onReady={handleREADY}
        />
      </div>
    </div>
  );
}
