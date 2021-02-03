import React, { useState, useEffect } from "react";
import Delayed from "../components/features/Delayed";
import styled from "styled-components";

import { LazyLoadImage } from "react-lazy-load-image-component";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import moment from "moment";

dayjs.extend(utc);

var _ = require("lodash");

export default function HashflagsGrid() {
  const [rawData, setRawData] = useState([]);

  useEffect(() => {
    const rightNow = dayjs().utc().format("YYYY-MM-DD-HH");
    fetch(`https://pbs.twimg.com/hashflag/config-${rightNow}.json`)
      .then((e) => e.json())
      .then((final) => {
        setRawData(final);
      });
  }, []);

  const hflagsdata = [rawData];
  const hflagsarray = hflagsdata[0];

  const groupby = _.groupBy(hflagsarray, "campaignName");
  const mapgroupby = [groupby].map((e) => e);
  const nextobject = mapgroupby[0];
  const rawdt = Object.values(nextobject);

  const hflagsplay = _.sampleSize(rawdt, [220]);

  return (
    <div>
      <div className="text-black dark:text-white mb-4">
        <strong>220</strong> Hashflags random bất kỳ từ các Campaign hiện có
        trên Twitter.
        <br />
        Mỗi lần Tắt đi và Hiển thị lại sẽ Random lại.
      </div>
      <Delayed waitBeforeShow={500}>
        <Wrapper>
          {hflagsplay.map((hashflag, index) => (
            <ElementWrapper
              key={index}
              className="hover:bg-gray-300 rounded-xl cursor-pointer"
              onClick={() =>
                toast(
                  <div className="text-black">
                    <div>
                      <div className="h-7 w-7 my-2">
                        <img src={hashflag[0].assetUrl} />
                      </div>
                      <div>
                        <p className="text-sm font-bold">Campaign:</p>
                        <p className="text-xs">{hashflag[0].campaignName}</p>
                      </div>
                      <div className="my-2">
                        {hashflag.map((hf, index) => (
                          <div key={index}>
                            <a
                              href={`https://twitter.com/hashtag/${hf.hashtag}`}
                              className="text-blue-500 font-bold"
                              target="_blank"
                            >
                              #{hf.hashtag}
                            </a>
                          </div>
                        ))}
                      </div>
                      <div className="my-2">
                        <p className="text-sm font-bold">Bắt đầu vào:</p>
                        <p className="text-sm">
                          {moment(Number(hashflag[0].startingTimestampMs))
                            .locale("vi")
                            .format("LL")}{" "}
                          (
                          {moment(Number(hashflag[0].startingTimestampMs))
                            .locale("vi")
                            .fromNow()}
                          )
                        </p>
                        <p className="text-sm font-bold">
                          Kết thúc dự kiến vào:
                        </p>
                        <p className="text-sm">
                          {moment(Number(hashflag[0].endingTimestampMs))
                            .locale("vi")
                            .format("LL")}{" "}
                          (
                          {moment(Number(hashflag[0].endingTimestampMs))
                            .locale("vi")
                            .endOf("day")
                            .fromNow()}
                          )
                        </p>
                      </div>
                    </div>
                  </div>
                )
              }
            >
              <ImageProject>
                <LazyLoadImage
                  className="z-10 object-cover p-0.5 transform hover:rotate-12"
                  alt={hashflag[0].campaigName}
                  src={hashflag[0].assetUrl}
                  placeholderSrc="opacity"
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
  z-index: 10;
`;
