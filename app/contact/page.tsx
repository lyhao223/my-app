import React from "react";
import HeadingContact from "../Components/UI/Contact/HeadingContact";
import FormContact from "../Components/UI/Contact/FormContact";

const Page = () => {
  return (
    <div className="2xl:mx-36 xl:mx-36 mx-6 py-16 flex flex-col items-center justify-center space-y-36">
      <HeadingContact />
      <FormContact />
    </div>
  );
};

export default Page;
