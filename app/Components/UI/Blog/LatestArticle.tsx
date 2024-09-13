import ArticleBlog from "@/app/utils/Reuseable/ArticleBlog";
import React from "react";
import b5 from "@/assets/blog/b5.jpg";
import b6 from "@/assets/blog/b6.jpg";
import b7 from "@/assets/blog/b7.jpg";
import b8 from "@/assets/blog/b8.jpg";
import b1 from "@/assets/blog/b1.jpg";
const LatestArticle = () => {
  return (
    <>
      <span className="text-5xl font-bold tracking-wide antialiased">
        Latest Article
      </span>
      <div className="flex flex-row items-start justify-start space-x-10">
        <ArticleBlog
          image={b5.src}
          title="7 common mistakes everyone makes while traveling"
          author="Joan Wallace"
        />
        <ArticleBlog
          image={b7.src}
          title="Best Twitter accounts for learning about investment"
          author="Carolyn Ortiz"
        />
        <ArticleBlog
          image={b6.src}
          title="10 things you need to know about Booking"
          author="Amanda Reed"
        />
      </div>
      <div className="flex flex-row items-start justify-start space-x-10">
        <ArticleBlog
          image={b8.src}
          title="7 common mistakes everyone makes while traveling"
          author="Joan Wallace"
        />
        <ArticleBlog
          image={b6.src}
          title="Best Twitter accounts for learning about investment"
          author="Carolyn Ortiz"
        />
        <ArticleBlog
          image={b1.src}
          title="10 things you need to know about Booking"
          author="Amanda Reed"
        />
      </div>
    </>
  );
};

export default LatestArticle;
