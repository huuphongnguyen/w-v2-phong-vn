export default function ArchillectToast({ item }) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-bold font-carbonbold text-black">
        BLOCK: {item.id}
      </h3>
      <img src={item.imageSource} />
      <p className="text-black text-xl font-carbonbold">
        References:
        <br />
        <div className="flex">
          {item.sourceLinks.map((link, index) => (
            <div className="flex">
              <a
                key={index}
                className="inline-flex text-blue-500 w-full-80 mr-2"
                href={link}
                target="_blank"
              >
                [{index}]
              </a>
            </div>
          ))}
        </div>
      </p>
    </div>
  );
}
