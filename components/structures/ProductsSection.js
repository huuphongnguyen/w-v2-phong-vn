import { PointingUp } from "akar-icons";
import AXCoin from "../elements/AXCoin";
import ChangeCoin from "../elements/ChangeCoin";

export default function ProductsSection() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <div className="inline-flex items-center space-x-1">
          <p className="text-black dark:text-white text-xl uppercase font-carbon-bold">
            /
          </p>
          <h1 className="text-black dark:text-white text-xl uppercase font-carbon-bold">
            Products
          </h1>
        </div>
      </div>
      <div className="mt-5 -mb-5 grid grid-cols-2 md:grid-cols-4 ml-4">
        <a href="https://change.vn" target="_blank">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex-col items-center justify-center relative inline-flex py-2 group transform transition-all md:hover:scale-[0.9]">
            <div className="transform scale-[0.5] transition-all md:group-hover:scale-[0.7] -mt-20 -mb-20 -ml-4 -mr-4">
              <ChangeCoin />
            </div>
            <h2 className="text-black dark:text-white font-carbon-bold uppercase text-xl transform transition-all mx-auto text-center md:group-hover:translate-y-6">
              Change.vn
            </h2>
          </div>
        </a>
        <a href="https://theuvitinhanhxuyen.com" target="_blank">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex-col items-center justify-center relative inline-flex py-2 group transform transition-all md:hover:scale-[0.9]">
            <div className="transform scale-[0.5] transition-all md:group-hover:scale-[0.7] -mt-20 -mb-20 -ml-4 -mr-4">
              <AXCoin />
            </div>
            <h2 className="text-black dark:text-white font-carbon-bold uppercase text-xl transform transition-all mx-auto text-center md:group-hover:translate-y-6">
              AX Embroidery
            </h2>
          </div>
        </a>
      </div>
      <div className="flex items-center space-x-2">
        <PointingUp className="text-black dark:text-white" size={23} />
        <p className="text-black dark:text-white uppercase font-carbon-bold">
          I am working so hard to bring it to you.
        </p>
      </div>
    </div>
  );
}
