import React from "react";
import logo from "@/app/utils/partnerLogo/partnerLogo";
import Image from "next/image";
const PartnerLogo = () => {
  return (
    <div className="2xl:flex xl:flex lg:flex hidden md:flex flex-row items-center justify-center">
      <div className="flex flex-row items-center justify-center 2xl:space-x-16 xl:space-x-10 lg:space-x-5 md:space-x-3">
        {logo.map((item) => (
          <Image
            src={item.src}
            alt=""
            key={item.id}
            className="2xl:w-56 2xl:h-56 xl:w-44 xl:h-44 lg:w-36 lg:h-36 md:w-28 md:h-28"
          />
        ))}
      </div>
    </div>
  );
};

export default PartnerLogo;
