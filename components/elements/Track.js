export default function Track(track) {
  return (
    <div className="flex flex-row items-baseline w-full">
      <div>
        <p className="text-sm font-bold text-gray-400 dark:text-gray-600">
          {track.ranking}
        </p>
      </div>
      <div className="pl-3 w-full">
        <a href={track.songUrl} target="_blank" rel="noopener noreferrer">
          <p className="text-black dark:text-white font-bold hover:text-green-500 inline-flex">
            {track.title}
          </p>
        </a>
        <p className="text-gray-500 mb-4 truncate w-full" color="gray.500">
          {track.artist}
        </p>
      </div>
    </div>
  );
}
