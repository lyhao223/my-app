import HeadingBlogDetail from "@/app/Components/UI/BlogDetail/HeadingBlogDetail";
import ParagraphBlogDetail from "@/app/Components/UI/BlogDetail/ParagraphBlogDetail";
import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-10">
      <HeadingBlogDetail id={params.id} />
      <ParagraphBlogDetail id={params.id} />
    </div>
  );
};

export default Page;
