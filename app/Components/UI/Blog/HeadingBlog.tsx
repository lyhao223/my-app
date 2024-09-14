import React from "react";
import b1 from "@/assets/blog/b1.jpg";
import b2 from "@/assets/blog/b2.jpg";
import b3 from "@/assets/blog/b3.jpg";
import b4 from "@/assets/blog/b4.jpg";
import Link from "next/link";
import SubBlog from "@/app/utils/Reuseable/SubBlog";
const HeadingBlog = () => {
  return (
    <>
      <h1 className="font-bold text-5xl tracking-wide antialiased">The Blog</h1>
      <div className="flex flex-row items-center justify-center space-x-10">
        <div className="flex flex-row items-start justify-center space-x-4">
          <div className="flex flex-col items-start justify-start space-y-2">
            <img src={b1.src} className="max-w-full h-auto rounded-lg" />
            <span className="text-slate-500 font-bold">April 28, 2022</span>
            <span className="text-2xl font-semibold">
              7 common mistakes everyone makes while traveling
            </span>
            <span className="text-lg">
              Prospective agents should start broadly and then narrow their list
              down to.
            </span>

            <span className="text-sm font-bold">By Joan Wallace</span>
            <Link
              href={"blog/blogdetail/0"}
              className="text-blue-600 text-lg font-semibold">
              Read more
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start space-y-5">
          <SubBlog
            id="1"
            image={b2.src}
            title="Bad habits that people in the business industry need to quit"
            date="Sep 01, 2022"
          />
          <SubBlog
            id="2"
            image={b3.src}
            title="Around the web: 20 fabulous info graphics about business"
            date="Sep 01, 2022"
          />
          <SubBlog
            id="3"
            image={b4.src}
            title="Ten unconventional tips about startups that you can not learn from books"
            date="Sep 01, 2022"
          />
        </div>
      </div>
    </>
  );
};

export default HeadingBlog;
