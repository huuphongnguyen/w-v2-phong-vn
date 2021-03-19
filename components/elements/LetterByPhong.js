import LetterSignatureByPhong from "./LetterSignatureByPhong";

export default function LetterByPhong({ children, letterNumber }) {
  return (
    <div className="p-2 w-full md:w-full-80 mx-auto border-2 border-black dark:border-white space-y-4">
      <div className="text-black dark:text-white text-sm">
        <div className="space-y-4">
          <p className="font-bold uppercase font-carbon-bold text-black dark:text-white">
            Letter Number: <strong>{letterNumber}</strong>
          </p>
          {children}
          <LetterSignatureByPhong />
        </div>
      </div>
    </div>
  );
}
