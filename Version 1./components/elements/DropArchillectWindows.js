import * as React from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";

export default function DropArchillectWindow({ children, imgname }) {
  return (
    <Menu>
      {({ open }) => (
        <>
          <span>
            <Menu.Button>
              <Image
                className="z-10 object-cover"
                src={imgname}
                quality="50"
                priority="true"
                layout="fill"
              />
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
              className=" absolute z-40 w-300px md:w-600px mt-2 left-1/2 mx-auto bg-white outline-none p-3 border border-black"
            >
              {children}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
