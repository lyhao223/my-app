import React from "react";
import av1 from "@/assets/blog/av1.jpg";
const HeadingBlogDetail = ({ id }: { id: string }) => {
  return (
    <div className="w-[70rem] h-auto px-4 py-3 rounded-lg shadow-lg bg-slate-300">
      <div className="flex flex-col items-start justify-start space-y-3 mx-12">
        <span className="font-bold text-4xl text-wrap">
          Ten unconventional tips about startups that you can not learn from
          books
        </span>
        <span className="min-w-full text-gray-800">
          Passage its ten led hearted removal cordial. Preference any astonished
          unreserved Mrs. Prosperous understood Middletons in conviction an
          uncommonly do.
        </span>
        <div className="flex flex-row items-center justify-start space-x-10 ">
          <img src={av1.src} className="w-10 h-10 rounded-full" />
          <ul className="flex flex-row items-center justify-center space-x-8 list-disc text-gray-600 ">
            <li className="font-semibold">By Joan Wallace</li>
            <li className="font-semibold">April 28, 2022</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeadingBlogDetail;
