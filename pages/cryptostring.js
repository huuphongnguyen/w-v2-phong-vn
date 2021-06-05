import { Copy } from "akar-icons";
import Container from "../components/Container";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

export default function CryptoString() {
  const [title, setTitle] = useState("hp");
  const [number, setNumber] = useState(20);
  const [copied, setCopied] = useState(false);

  var crypto = require("crypto");

  function createCryptoString() {
    const cryptostring =
      title + crypto.randomBytes(Math.abs(Number(number))).toString("hex");
    return cryptostring;
  }

  function CopyCryptoString() {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }

  var makeCryptoString = createCryptoString();

  return (
    <Container>
      <div className="items-start mx-auto w-full max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-4 pt-5">
            <h2 className="text-black dark:text-white font-bold text-3xl">
              CryptoString
            </h2>
            <div className="flex items-center space-x-2">
              <form className="flex items-center space-x-2">
                <div className="space-y-2">
                  <p className="text-black dark:text-white uppercase font-bold text-xs">
                    First Character
                  </p>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="hp"
                    className="border-2 border-black dark:border-white text-black p-2"
                    onChange={(event) => setTitle(event.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-black dark:text-white uppercase font-bold text-xs">
                    Crypto String (x2)
                  </p>
                  <input
                    type="number"
                    min="0"
                    pattern="[0-9]{10}"
                    placeholder="15"
                    className="border-2 border-black dark:border-white text-black p-2"
                    onChange={(event) => setNumber(event.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="p-2 border-black dark:border-white border-2 w-full">
              <div className="whitespace-nowrap overflow-hidden pr-2">
                <p className="text-black dark:text-white text-sm">
                  {makeCryptoString}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between w-full">
              <p className="text-black dark:text-white uppercase font-bold text-xs">
                Characters are {makeCryptoString.length}
              </p>
              <CopyToClipboard
                text={makeCryptoString}
                onCopy={CopyCryptoString}
              >
                <div className="inline-flex items-center space-x-2 border-2 border-black dark:border-white px-2 py-1 hover:bg-black group cursor-pointer transform transition-all active:scale-[0.85]">
                  <Copy
                    className="text-black dark:text-white group-hover:text-white dark:group-hover:text-black"
                    size={25}
                  />
                  <p className="text-black dark:text-white group-hover:text-white dark:group-hover:text-black font-bold uppercase text-sm pr-1 pointer-events-none select-none">
                    {copied ? "Copied" : "Copy"}
                  </p>
                </div>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
