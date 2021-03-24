export default function CallOut({ children, emoji, bgcolor }) {
  return (
    <div className={`my-3 ${bgcolor} p-4 flex items-start space-x-2`}>
      <div className="w-10 h-10">
        <p className="text-2xl inline-flex w-full h-full text-center justify-center">
          {emoji}
        </p>
      </div>
      <div>
        <p className="text-black dark:text-white text-sm">{children}</p>
      </div>
    </div>
  );
}
