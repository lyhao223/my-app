import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

//icon
import { PiBellSimpleRingingLight } from "react-icons/pi";

interface RingOutProps {
  Content: any;
}
const RingOut = ({ Content }: RingOutProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const showOpen = Content && open;
  return (
    <div
      className="relative w-fit h-fit flex flex-row items-center justify-center cursor-pointer"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}>
      <span className="relative 2xl:left-14 2xl:bottom-6 xl:left-14 xl:bottom-6 lg:left-14 lg:bottom-6 md:left-10 md:bottom-4 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
      <div className="2xl:p-4 xl:p-4 lg:p-4 md:p-2 rounded-lg bg-slate-500 hover:bg-purple-500 hover:duration-200 hover:transition-all hover:ease-in-out">
        <PiBellSimpleRingingLight size={20} className="text-white" />
      </div>
      <AnimatePresence>
        {showOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 1 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute z-20 right-10 bottom-1 ">
            <div className="absolute right-3 top-2 w-80 h-[22rem] bg-gray-400 rounded-lg shadow-xl">
              <Content />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RingOut;
