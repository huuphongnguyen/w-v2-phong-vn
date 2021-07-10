import toast from "react-hot-toast";

export default function Hashtags({ children, toastinfo }) {
  return (
    <div>
      <div
        onClick={() =>
          toast(<p>{toastinfo}</p>, {
            icon: "#️⃣",
          })
        }
      >
        <p className="text-black dark:text-white rainbow_text_hover text-sm font-bold cursor-pointer">
          {children}
        </p>
      </div>
    </div>
  );
}
