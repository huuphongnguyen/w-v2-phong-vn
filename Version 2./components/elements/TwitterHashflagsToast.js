import moment from "moment";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

export default function TwitterHashflagsToast({ hashflag }) {
  const { t } = useTranslation("hashflags");
  const router = useRouter();

  return (
    <div className="text-black">
      <div>
        <div className="h-7 w-7 my-2">
          <img src={hashflag[0].assetUrl} />
        </div>
        <div>
          <p className="text-sm font-bold">Campaign:</p>
          <p className="text-xs">{hashflag[0].campaignName}</p>
        </div>
        <div className="my-2 max-h-350px overflow-y-scroll">
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
          <p className="text-sm font-bold">{t("hashflags-toast-start")}</p>
          <p className="text-sm">
            {moment(Number(hashflag[0].startingTimestampMs))
              .locale(router.locale === "vi-VN" ? "vi" : "us")
              .format("LL")}{" "}
            (
            {moment(Number(hashflag[0].startingTimestampMs))
              .locale(router.locale === "vi-VN" ? "vi" : "us")
              .fromNow()}
            )
          </p>
          <p className="text-sm font-bold">{t("hashflags-toast-end")}</p>
          <p className="text-sm">
            {moment(Number(hashflag[0].endingTimestampMs))
              .locale(router.locale === "vi-VN" ? "vi" : "us")
              .format("LL")}{" "}
            (
            {moment(Number(hashflag[0].endingTimestampMs))
              .locale(router.locale === "vi-VN" ? "vi" : "us")
              .endOf("day")
              .fromNow()}
            )
          </p>
        </div>
      </div>
    </div>
  );
}
