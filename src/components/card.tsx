import React from "react";

type Props = {
  title: string;
  data?: string;
  imageData?: {
    src: string;
    alt?: string;
    width: number;
    height: number;
  };
};

export const Card: React.FC<Props> = ({ title, data, imageData }) => (
  <div>
    <div className="w-80 h-80 overflow-hidden rounded-lg bg-[#1CB981] py-1 sm:p-5 shadow-lg pt-10">
      <dt className="font-medium bold text-indigo-600 text-center text-3xl">
        {title}
      </dt>
      <dd className="flex flex-col mt-4 font-normal text-black lg:text-1xl text-center items-center mb-5 gap-5 breal-all">
        {data}
        <dd className="flex mt-5">
          {imageData?.src ? (
            <img
              src={imageData.src}
              alt={imageData.alt ? imageData.alt : ""}
              height={imageData.height}
              width={imageData.width}
            />
          ) : (
            " "
          )}
        </dd>
      </dd>
    </div>
  </div>
);
