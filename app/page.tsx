import Image from "next/image";
import Header from "./Components/UI/Header/Header";
import ArticleHeader from "./Components/UI/ContentHeader/ArticleHeader";
import { Fragment } from "react";

export default function Home() {
  return (
    <>
      <div className="relative flex flex-row items-start justify-start xl:px-36 py-12">
        <ArticleHeader />
      </div>
    </>
  );
}
