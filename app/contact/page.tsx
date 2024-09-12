import React from "react";
import HeadingContact from "../Components/UI/Contact/HeadingContact";
import FormContact from "../Components/UI/Contact/FormContact";

const Page = () => {
  return (
    <div className="mx-36 py-16 flex flex-col items-start justify-start space-y-36">
      <HeadingContact />
      <FormContact />
    </div>
  );
};

export default Page;
