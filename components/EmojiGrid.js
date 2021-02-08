import styled from "styled-components";
import NextImage from "next/image";
import Delayed from "./features/Delayed";

var _ = require("lodash");

export default function EmojiGrid({ emojis }) {
  const randomEmoji = _.sampleSize(emojis, [emojis.length]);
  return (
    <Delayed waitBeforeShow={500}>
      <Wrapper>
        {randomEmoji.slice(0, 220).map((emoji) => (
          <ElementWrapper>
            <ImageProject>
              <NextImage
                className="z-10 object-cover transform hover:scale-105 cursor-pointer"
                src={`https://xn--i-7iq.ws/emoji-image/${emoji.emoji}?format=ios&ar=1x1`}
                quality="50"
                priority="true"
                layout="fill"
              />
            </ImageProject>
          </ElementWrapper>
        ))}
      </Wrapper>
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
