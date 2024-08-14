import React from "react";
interface CardVoucherProps {
  children: React.ReactNode;
}
const CardVoucher = ({ children }: CardVoucherProps) => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative bg-slate-200 2xl:w-96 xl:w-72 lg:w-96 ls:w-96 ms:w-[21rem] xs:w-72 md:w-80 2xl:h-40 xl:h-36 lg:h-40 md:h-40 ls:h-40 ms:h-40 xs:h-40 rounded-lg shadow-md">
        {children}
      </div>
    </div>
  );
};

export default CardVoucher;
