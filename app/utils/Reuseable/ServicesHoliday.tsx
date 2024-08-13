import React from "react";

interface Props {
  icon: any;
  colorRoundedFull: string;
  content: string;
  description?: string;
  title?: string;
}
const ServicesHoliday = ({
  icon,
  colorRoundedFull,
  content,
  description,
  title,
}: Props) => {
  return (
    <div
      className="flex flex-col items-start justify-start space-y-4"
      content={content}>
      <div className="flex flex-col items-start justify-start space-y-2 2xl:w-72 xl:w-72 lg:w-60 md:w-72">
        <div className={`${colorRoundedFull} rounded-full py-4 px-4`}>
          {icon}
        </div>
        <p className="text-xl font-bold antialiased">{title}</p>
        <span className="text-sm font-normal antialiased text-gray-500 text-wrap">
          {description}
        </span>
      </div>
    </div>
  );
};

export default ServicesHoliday;
