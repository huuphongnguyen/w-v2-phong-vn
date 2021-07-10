import NextImage from "next/image";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import TwitterHashflagsToast from "./TwitterHashflagsToast";

dayjs.extend(utc);

var _ = require("lodash");

export default function TwitterHashflagsGrid() {
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

  const hflagsplay = _.sampleSize(rawdt, [500]);

  return (
    <div className="grid grid-cols-autoscale_small">
      {hflagsplay.map((hashflag, index) => (
        <div
          key={index}
          className="p-0.5 border-2 border-transparent hover:border-black cursor-pointer"
          onClick={() => toast(<TwitterHashflagsToast hashflag={hashflag} />)}
        >
          <div className="aspect-w-1 aspect-h-1">
            <NextImage
              src={hashflag[0].assetUrl}
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>
      ))}
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
    </div>
  );
}
