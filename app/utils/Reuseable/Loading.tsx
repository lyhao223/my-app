import React from "react";
import { AiOutlineLoading } from "react-icons/ai";
interface ILoadingProps {
  children: React.ReactNode;
}
const Loading = ({ children }: ILoadingProps) => {
  return (
    <button
      type="button"
      className="bg-blue-500 rounded-xl flex flex-row p-5 space-x-4 my-3"
      disabled>
      <AiOutlineLoading className="animate-spin h-5 w-5" />
      {children}
    </button>
  );
};

export default Loading;
