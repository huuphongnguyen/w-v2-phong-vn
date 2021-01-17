import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Delayed from "../components/features/Delayed";

export default function ArchillectImageGrid({ data }) {
  return (
    <Delayed waitBeforeShow={500}>
      <Wrapper>
        {data.map((img, index) => (
          <ElementWrapper key={index}>
            <ImageProject>
              <Image
                className="z-10 object-cover"
                src={img.imageSource}
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
  grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
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
  z-index: 10;
`;
