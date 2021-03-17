import * as React from "react";
import { Menu, Transition } from "@headlessui/react";

export default function DropInfoWindow({ children, namebutton }) {
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
              className="absolute z-100 w-300px md:w-600px mt-2 origin-top-right bg-white outline-none p-3 border border-black"
            >
              {children}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
