import styled from "styled-components";
import Delayed from "../components/features/Delayed";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ArrowCircleUp } from "./icons/HeroIcons";

export default function MemeDealerGrid({ sync }) {
  return (
    <div>
      <Delayed waitBeforeShow={500}>
        <Wrapper>
          {sync.memes.map((meme) => (
            <ElementWrapper
              onClick={() =>
                toast(
                  <div>
                    <h3 className="text-2xl font-bold font-carbonbold text-black">
                      r/{meme.subreddit}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <ArrowCircleUp classNameSync="w-7 h-7 text-yellow-500" />

                      <p className="text-2xl font-bold font-carbonbold text-yellow-500">
                        {meme.ups}
                      </p>
                    </div>
                    <p className="text-xl font-bold font-carbonbold text-black">
                      post link:{" "}
                      <a
                        className="text-xl font-bold font-carbonbold text-blue-500"
                        target="_blank"
                        href={meme.post_link}
                      >
                        go to reddit
                      </a>
                    </p>
                    <div className="p-1 border-4 border-yellow-500">
                      <img src={meme.url} />
                    </div>
                  </div>
                )
              }
            >
              <ImageProject>
                <img
                  className="z-10 object-cover p-0.5 transform hover:scale-95 cursor-pointer"
                  alt={`${meme.title} - ${meme.subreddit}`}
                  src={meme.url}
                />
              </ImageProject>
            </ElementWrapper>
          ))}
        </Wrapper>
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
        />
      </Delayed>
    </div>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
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
