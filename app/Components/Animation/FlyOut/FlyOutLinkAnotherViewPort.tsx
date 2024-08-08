import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
const FlyOutLinkAnotherViewPort = () => {
  const [toggleIconMenu, setToggleIconMenu] = useState(false);
  const handleChangeToggleIconMenu = () => {
    setToggleIconMenu(true);
  };
  const handleCloseToggleIconMenu = () => {
    setToggleIconMenu(false);
  };

  return (
    <button
      className="2xl:hidden xl:hidden relative flex flex-row items-center justify-center space-x-3 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-xs text-black w-full"
      onClick={() => {
        setToggleIconMenu(!toggleIconMenu);
      }}>
      {!toggleIconMenu ? (
        <CiMenuBurger />
      ) : (
        <IoMdClose onClick={() => setToggleIconMenu(!toggleIconMenu)} />
      )}{" "}
      <span>Menu</span>
      <AnimatePresence>
        {toggleIconMenu && (
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 45 }}
            exit={{ opacity: 0, x: 15 }}
            style={{ translateX: "-150%" }}
            transition={{ duration: 0.4, ease: "easeIn" }}
            className="absolute z-20 lg:left-32 lg:top-10 md:left-20 md:top-4 ls:-left-16 ls:top-0 ms:-left-32 ms:-top-1 xs:-left-44 xs:-top-2 bg-gray-300 text-black rounded-lg">
            <div className="absolute z-20 -right-[23.33333rem] top-10 h-72 lg:w-[40rem] md:w-[40rem] ls:w-96 ms:w-60 xs:w-48 bg-slate-200 rounded-lg shadow-xl">
              <div className="flex flex-col items-center justify-center space-y-10 py-5">
                <Link href={"/"}>
                  <span className="text-lg subpixel-antialiased">Booking</span>
                </Link>
                <Link href={"/"}>
                  <span className="text-lg subpixel-antialiased">About</span>
                </Link>
                <Link href={"/"}>
                  <span className="text-lg subpixel-antialiased">Contact</span>
                </Link>
                <Link href={"/"}>
                  <span className="text-lg subpixel-antialiased">Blog</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default FlyOutLinkAnotherViewPort;
