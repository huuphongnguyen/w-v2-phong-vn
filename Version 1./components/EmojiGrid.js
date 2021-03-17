import styled from "styled-components";
import Delayed from "./features/Delayed";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import reacthottoast, { Toaster } from "react-hot-toast";

import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

var _ = require("lodash");

export default function EmojiGrid({ emojis }) {
  const randomEmoji = _.sampleSize(emojis, [emojis.length]);

  const CopySuccessful = () => reacthottoast.success("Copied");

  return (
    <Delayed waitBeforeShow={500}>
      <div className="text-black mb-4">
        <p className="text-sm">
          220 emoji bất kỳ từ ~1804 emoji của Apple. <br />
          Fetching dưới dàng Text nên có thể sẽ không hiển thị đúng trên
          Windows, Android.
        </p>
      </div>
      <Wrapper>
        {randomEmoji.slice(0, 220).map((emoji, index) => (
          <ElementWrapper
            key={index}
            onClick={() =>
              toast(
                <div className="text-black">
                  <p className="text-6xl inline-flex bg-gray-200 p-2 rounded-md font-black">
                    {emoji.emoji}
                  </p>
                  <div className="font-carbon-bold text-xl">
                    <p>{emoji.description}</p>
                    <p>{emoji.category}</p>
                  </div>
                  <p className="uppercase font-bold text-md font-carbon-bold text-gray-500">
                    Released from {emoji.ios_version}
                  </p>
                  <div className="my-2">
                    <CopyToClipboard text={emoji.emoji}>
                      <button
                        className="px-2 py-1 text-xs transition-all transform hover:scale-105 bg-red-200 rounded-md uppercase focus:outline-none active:scale-95 active:outline-none"
                        onClick={() => CopySuccessful()}
                      >
                        Copy Icon
                      </button>
                    </CopyToClipboard>
                  </div>
                </div>
              )
            }
          >
            <ImageProject>
              <div className="hover:bg-gray-300 cursor-pointer rounded-md flex items-center justify-center">
                <p className="text-black text-3xl w-full h-full transform hover:rotate-12 hover:scale-110">
                  {emoji.emoji}
                </p>
              </div>
            </ImageProject>
          </ElementWrapper>
        ))}
      </Wrapper>

      <ToastContainer
        position="top-center"
        transition={Flip}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        limit={5}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <Toaster position="bottom-center" reverseOrder={false} />
    </Delayed>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35px, 1fr));
  grid-gap: 0px;
  z-index: 10;
`;

const ElementWrapper = styled.div`
  position: relative;
  ::before {
    content: "";
    display: block;
    padding-top: 100%;
  }
`;

const ImageProject = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 50;
`;
