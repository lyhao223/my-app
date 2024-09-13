import React from "react";
import b2 from "@/assets/blog/b2.jpg";
import Link from "next/link";
interface SubBlogProps {
  image: string;
  title: string;
  date: string;
}
const SubBlog = ({ image, title, date }: SubBlogProps) => {
  return (
    <div className="flex flex-row items-start justify-center cursor-pointer">
      <img src={image} className="w-40 h-40 rounded-lg" />
      <div className="flex flex-col items-start justify-center space-y-5 py-2 mx-5">
        <span className="text-lg font-semibold">{title}</span>
        <span className="text-slate-500 font-semibold">{date}</span>
        <Link href="" className="text-blue-600 font-bold text-lg">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default SubBlog;
