import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { FaCaretDown } from "react-icons/fa";
interface FlyOutLinkProps {
    children?: React.ReactNode,
    href?: string,
    FlyoutContent?: React.ComponentType | any,
    IconMenu?: React.ReactNode | any
}
const FlyOutLink = ({children, href, FlyoutContent, IconMenu} : FlyOutLinkProps) => {
  const [open, setOpen] = useState(false);
  const showFlyOutContent = FlyoutContent && open;
  return (
    <div className='relative w-fit h-fit flex flex-row items-center justify-center space-x-2 cursor-pointer' onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
        <div className='text-lg'>{children}</div>
        <div className='text-lg'>{IconMenu}</div>
        <AnimatePresence>
            {showFlyOutContent && (
                <motion.div initial={{opacity:0, y:15}} animate={{opacity:1, y:1}} exit={{opacity:0 ,y:15}} transition={{duration:0.4, ease: 'easeInOut'}} className='absolute z-20 -left-10 top-10 bg-gray-300 text-black rounded-lg'>
                    <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gray-300" />
                    <FlyoutContent />
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  )
}

export default FlyOutLink