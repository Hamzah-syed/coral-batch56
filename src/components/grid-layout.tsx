import Image from "next/image";
import React from "react";

const GridLayout = () => {
  return (
    <div className="wrapper lg:flex ">
      <div className="flex items-center w-10 relative">
        <h2 className="font-semibold text-xl absolute lg:-rotate-90 whitespace-pre -right-28">
          Explore new and popular styles
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="col-span-2 row-span-2 bg-red-400 ">
          <Image
            src={"/05.png"}
            alt="img1"
            className="w-full h-full"
            width={200}
            height={200}
          />
        </div>
        <div>
          <Image
            src={"/07.png"}
            alt="img1"
            className="w-full h-full"
            width={200}
            height={200}
          />
        </div>
        <div>
          <Image
            src={"/09.png"}
            alt="img1"
            className="w-full h-full"
            width={200}
            height={200}
          />
        </div>
        <div>
          <Image
            src={"/16.png"}
            alt="img1"
            className="w-full h-full"
            width={200}
            height={200}
          />
        </div>
        <div>
          <Image
            src={"/17.png"}
            alt="img1"
            className="w-full h-full"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
