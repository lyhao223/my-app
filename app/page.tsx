import Image from "next/image";
import Header from "./Components/UI/Header/Header";
import ArticleHeader from "./Components/UI/ContentHeader/ArticleHeader";
import { Fragment } from "react";
import TourVoucher from "./Components/UI/TourVoucher/TourVoucher";
import CardVoucher from "./Components/UI/TourVoucher/CardVoucher/CardVoucher";

export default function Home() {
  return (
    <>
      <div className="flex flex-row items-center justify-center 2xl:px-36 xl:px-36 lg:px-12 md:px-11 ls:px-3 ms:px-2 xs:px-1 2xl:py-12 xl:py-12 lg:py-12 md:py-0 ls:py-0">
        <ArticleHeader />
      </div>
      <div className="2xl:px-36 xl:px-36 lg:px-12 md:px-11 ls:px-3 ms:px-2 xs:px-1 my-12 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-24">
        <TourVoucher />
        {/* <CardVoucher /> */}
      </div>
    </>
  );
}
