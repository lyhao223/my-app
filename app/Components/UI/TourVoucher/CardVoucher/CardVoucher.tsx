import React from "react";

import v1 from "@/assets/voucher/v1.jpg";
import Image from "next/image";
interface CardVoucherProps {
  children: React.ReactNode;
}
const CardVoucher = ({ children }: CardVoucherProps) => {
  return (
    <div className="relative bg-slate-200 w-96 h-40 rounded-lg shadow-md">
      {children}
    </div>
  );
};

export default CardVoucher;
