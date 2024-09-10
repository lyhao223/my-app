import React from "react";
interface IComponentsAboutProps {
  children: React.ReactNode;
}
const ComponentsAbout = ({ children }: IComponentsAboutProps) => {
  return (
    <div className="w-72 h-auto py-2 px-4 rounded-lg shadow-xl">
      <span className="flex items-center justify-center">{children}</span>
    </div>
  );
};

export default ComponentsAbout;
