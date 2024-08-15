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
    <div className="relative flex flex-row items-start justify-start space-x-32">
      <div className="relative">
        <Image
          src={image}
          alt="review"
          className="w-96 h-96 rounded-xl shadow-xl"
          width={384}
          height={384}
        />
      </div>
      <div className="absolute top-7 -left-40">
        <Image
          src={iconImage}
          alt="icon"
          className="w-20 h-20"
          width={80}
          height={80}
        />
      </div>
      <div className="flex flex-col items-start justify-start space-y-5 my-5">
        <FaComment className="w-28 h-28" color="purple" />

        <span className="text-wrap w-[30rem] text-xl antialiased">
          {comment}
        </span>
        <div className="flex flex-row items-start justify-start space-x-3">
          <IoIosStar className="w-5 h-5 text-yellow-600" />
          <IoIosStar className="w-5 h-5 text-yellow-600" />
          <IoIosStar className="w-5 h-5 text-yellow-600" />
          <IoIosStar className="w-5 h-5 text-yellow-600" />
          <IoIosStar className="w-5 h-5 text-yellow-600" />
        </div>
        <div className="flex flex-col items-start justify-start">
          <span className="font-bold">{name}</span>
          <span className="text-gray-400">{position}</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
