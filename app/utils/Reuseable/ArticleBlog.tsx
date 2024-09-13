import React from "react";

interface IArticleBlogProps {
  title: string;
  author: string;
  image: string;
}
const ArticleBlog = ({ title, author, image }: IArticleBlogProps) => {
  return (
    <div className="flex flex-col items-start justify-start space-y-3 cursor-pointer">
      <img src={image} className="w-72 h-72 rounded-lg" />
      <div className="flex flex-col items-start justify-start space-y-2">
        <span className="text-lg font-semibold text-wrap text-black hover:text-blue-500 hover:transition-colors hover:duration-200">
          {title}
        </span>
        <span className="text-lg ">By {author}</span>
      </div>
    </div>
  );
};

export default ArticleBlog;
