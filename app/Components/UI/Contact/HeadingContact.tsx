import ComponentsContact from "@/app/utils/Reuseable/ComponentsContact";
import React from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
const HeadingContact = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <h1 className="text-4xl 2xl:text-5xl xl:text-5xl font-bold tracking-wider">
        Let connect and get to know each other
      </h1>
      <p className="text-xl text-center">
        Passage its ten led hearted removal cordial. Preference any astonished
        unreserved Mrs. Prosperous understood Middletons. Preference for any
        astonished unreserved.
      </p>
      <div className="flex flex-col space-y-5 space-x-0 2xl:flex-row xl:flex-row items-center justify-center 2xl:space-x-24 2xl:space-y-0 xl:space-x-24 xl:space-y-0">
        <ComponentsContact
          icon={<IoCall className="w-10 h-10" color="green" />}
          title="Call us"
          paragraph="Imprudence attachment him his for sympathize. Large above be to means."
          contact="+1 234 567 890"
          color="text-green-500"
        />
        <ComponentsContact
          icon={<MdEmail className="w-10 h-10" color="blue" />}
          title="Email us"
          paragraph="Large above be to means. Him his for sympathize."
          contact="example@email.com"
          color="text-blue-500"
        />
        <ComponentsContact
          icon={<TbWorld className="w-10 h-10" color="yellow" />}
          title="Social media"
          paragraph="Sympathize Large above be to means."
          contact="Facebook, Twitter, Instagram"
          color="text-yellow-500"
        />
      </div>
    </div>
  );
};

export default HeadingContact;
