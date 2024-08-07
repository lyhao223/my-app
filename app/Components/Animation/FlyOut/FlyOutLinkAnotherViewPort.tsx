import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const FlyOutLinkAnotherViewPort = () => {
  const [toggleIconMenu, setToggleIconMenu] = useState(false);
  const handleChangeToggleIconMenu = () => {
    setToggleIconMenu(!toggleIconMenu);
  };
  return (
    <button
      className="2xl:hidden xl:hidden flex flex-row items-center justify-center space-x-3 text-xl text-black"
      onClick={handleChangeToggleIconMenu}>
      {!toggleIconMenu ? <CiMenuBurger /> : <IoMdClose />} <span>Menu</span>
    </button>
  );
};

export default FlyOutLinkAnotherViewPort;
