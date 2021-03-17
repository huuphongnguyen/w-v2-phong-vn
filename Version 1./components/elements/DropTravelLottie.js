import * as React from "react";
import { Menu, Transition } from "@headlessui/react";

export default function DropTravelLottie({ namebutton }) {
  return (
    <Menu>
      {({ open }) => (
        <>
          <span>
            <Menu.Button className=" underline text-black dark:text-white font-bold outline-none focus:outline-none text-left">
              {namebutton}
            </Menu.Button>
          </span>

          <Transition
            show={open}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="absolute z-100 w-full-85 md:w-600px -mt-80 origin-top bg-white outline-none p-3 border border-black"
            >
              <p className="text-sm font-regular text-black">
                Bạn phát hiện ra rồi!!. Lý do mình để artwork động này là bởi vì
                nó thật sự diễn tả điều mà mình muốn làm vào một ngày nào đó. Đó
                việc lái một chiếc xe dã ngoại như thế này và đi đến một nơi nào
                đó thật sự yên bình, ở đó làm những điều mình thích và không
                nghĩ ngợi về bất kỳ điều gì.
              </p>
              <div className="text-black">-----</div>
              <p className="text-black text-sm">
                Thiết kế bởi{" "}
                <a
                  className="font-bold"
                  href="https://lottiefiles.com/user393171"
                  target="_blank"
                >
                  Shivani Bai
                </a>{" "}
                trên{" "}
                <a
                  className="font-bold"
                  href="https://lottiefiles.com/42070-travel-is-fun"
                  target="_blank"
                >
                  Lottie
                </a>
                .
              </p>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
