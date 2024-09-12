import React from "react";
interface Props {
  icon?: any;
  title?: string;
  paragraph?: string;
  contact?: string;
  color?: string;
  children?: React.ReactNode;
}
const ComponentsContact = ({
  icon,
  title,
  paragraph,
  contact,
  children,
  color,
}: Props) => {
  return (
    <div className="w-72 h-52 px-3 py-4 mx-2 bg-slate-300 rounded-lg shadow-lg">
      <div className="flex flex-col items-center justify-center space-y-3">
        <span>{icon}</span>
        <h1 className={`text-xl font-bold ${color}`}>{title}</h1>
        <p className="text-sm text-wrap text-center">{paragraph}</p>
        <p className="text-lg">{contact}</p>
      </div>
    </div>
  );
};

export default ComponentsContact;
