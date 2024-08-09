import Image from "next/image";
import Header from "./Components/UI/Header/Header";
import ArticleHeader from "./Components/UI/ContentHeader/ArticleHeader";
import { Fragment } from "react";

export default function Home() {
  return (
    <>
      <div className="flex flex-row items-center justify-center 2xl:px-36 xl:px-36 lg:px-12 md:px-11 ls:px-3 ms:px-2 xs:px-1 2xl:py-12 xl:py-12 lg:py-12 md:py-0 ls:py-0">
        <ArticleHeader />
      </div>
      <div className="h-96">1</div>
    </>
  );
}
