import React from "react";
import Image from "next/image";
import { FaComment } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";

interface Props {
  image: string;
  comment: string;
  name: string;
  position: string;
  iconImage: string;
}
const Comment = ({ image, comment, name, position, iconImage }: Props) => {
  return (
    <div className="relative flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col ls:flex-col ms:flex-col xs:flex-col 2xl:items-center 2xl:justify-center xl:justify-center xl:items-center lg:justify-center lg:items-center md:items-center md:justify-center ls:items-center ls:justify-center ms:items-center ms:justify-center xs:items-center xs:justify-center 2xl:space-x-32 2xl:space-y-0 xl:space-x-32 xl:space-y-0 lg:space-x-32 lg:space-y-0 md:space-y-2 md:space-x-0 ls:space-y-2 ls:space-x-0 ms:space-y-2 ms:space-x-0 xs:space-x-0 xs:space-y-2">
      <img
        src={image}
        alt="review"
        className="2xl:w-96 2xl:h-96 xl:w-96 xl:h-96 lg:w-80 lg:h-80 md:w-80 md:h-80 ls:w-72 ls:h-72 ms:h-72 ms:w-72 xs:w-72 xs:h-72 rounded-xl shadow-xl"
      />

      <div className="absolute 2xl:top-7 2xl:left-72 xl:top-7 xl:left-16 lg:top-7 lg:-left-[6.5rem] md:top-7 md:left-48 ls:top-5 ls:left-10 ms:top-4 ms:left-3 xs:top-0 xs:left-0">
        <img src={iconImage} alt="icon" className="w-20 h-20" />
      </div>
      <div className="flex flex-col 2xl:items-start 2xl:justify-start xl:items-start xl:justify-start lg:items-start lg:justify-start md:items-center md:justify-center ls:items-center ls:justify-center ms:items-center ms:justify-center xs:items-center xs:justify-center space-y-5 my-5 lg:my-0">
        <FaComment
          className="w-28 h-28 hidden 2xl:inline-block xl:inline-block lg:inline-block"
          color="purple"
        />

        <span className="text-wrap 2xl:w-[30rem] xl:w-[30rem] lg:w-[30rem] md:w-[30rem] ls:w[30rem] ms:w-fit  ls:w-fit text-xl 2xl:text-start xl:text-start lg:text-start md:text-center ls:text-center ms:text-center xs:text-center antialiased">
          {comment}
        </span>
        <div className="flex flex-row items-start justify-start space-x-3">
          <IoIosStar className="w-5 h-5 text-yellow-600" />
          <IoIosStar className="w-5 h-5 text-yellow-600" />
          <IoIosStar className="w-5 h-5 text-yellow-600" />
          <IoIosStar className="w-5 h-5 text-yellow-600" />
          <IoIosStar className="w-5 h-5 text-yellow-600" />
        </div>
        <div className="flex flex-col 2xl:items-start 2xl:justify-start xl:items-start xl:justify-start lg:items-start lg:justify-start md:items-center md:justify-center ls:items-center ls:justify-center ms:items-center ms:justify-center xs:items-center xs:justify-center">
          <span className="font-bold">{name}</span>
          <span className="text-gray-400">{position}</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
