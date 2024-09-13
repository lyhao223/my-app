import React from "react";
import HeadingBlog from "../Components/UI/Blog/HeadingBlog";
import LatestArticle from "../Components/UI/Blog/LatestArticle";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-16 mx-36 py-10">
      <HeadingBlog />
      <LatestArticle />
    </div>
  );
};

export default Page;
