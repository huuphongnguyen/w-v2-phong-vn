export default function RandomAvatar({
  itemBackground,
  itemTop,
  itemHairstyle,
  itemFace,
  itemEyes,
  itemEyewear,
  itemMouth,
  itemAccessories,
  itemHeadwear,
}) {
  return (
    <div>
      <div className="w-full aspect-w-1 aspect-h-1 bg-purple-100 relative">
        <div>
          <img
            src={`/avatar/background/${itemBackground}`}
            className="z-[0] w-full h-auto absolute bottom-0"
          />
        </div>
        <div>
          <img
            src={`/avatar/top/${itemTop}`}
            className="z-[10] w-full h-auto absolute bottom-0"
          />
        </div>
        <div>
          <img
            src={`/avatar/hairstyle/${itemHairstyle}`}
            className="z-[1] w-full h-auto origin-top-left absolute top-0"
          />
        </div>
        <div>
          <img
            src={`/avatar/face/${itemFace}`}
            className="z-[1] w-[calc((440/1080)*100%)] h-auto origin-top-left absolute top-[calc((340/1080)*100%)] left-[calc((300/1080)*100%)]"
          />
        </div>
        <div>
          <img
            src={`/avatar/eyes/${itemEyes}`}
            className="z-[2] w-[calc((200/1080)*100%)] h-auto origin-top-left absolute top-[calc((460/1080)*100%)] left-[calc((300/1080)*100%)]"
          />
        </div>
        <div>
          <img
            src={`/avatar/eyewear/${itemEyewear}`}
            className="z-[3] w-[calc((428/1080)*100%)] h-auto origin-top-left absolute top-[calc((454/1080)*100%)] left-[calc((231/1080)*100%)]"
          />
        </div>
        <div>
          <img
            src={`/avatar/mouth/${itemMouth}`}
            className="z-[2] w-[calc((240/1080)*100%)] h-auto origin-top-left absolute top-[calc((530/1080)*100%)] left-[calc((380/1080)*100%)]"
          />
        </div>
        <div>
          <img
            src={`/avatar/headwear/${itemHeadwear}`}
            className="z-[2] w-[calc((860/1080)*100%)] h-auto origin-top-left absolute top-0 left-[calc((110/1080)*100%)]"
          />
        </div>
        <div>
          <img
            src={`/avatar/accessories/${itemAccessories}`}
            className="z-[12] w-full h-auto origin-top-left absolute top-[calc((240/1080)*100%)]"
          />
        </div>
      </div>
    </div>
  );
}
