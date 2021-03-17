import * as React from "react";
import { Menu, Transition } from "@headlessui/react";

export default function DropNowPlayingInfo({ children, namebutton }) {
  return (
    <Menu>
      {({ open }) => (
        <>
          <span>
            <Menu.Button className="z-100 underline text-black dark:text-white font-bold outline-none focus:outline-none text-left">
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
              className="absolute z-100 w-400px md:w-500px -mt-64 origin-top-center bg-white outline-none p-3 border border-black"
            >
              {children}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
