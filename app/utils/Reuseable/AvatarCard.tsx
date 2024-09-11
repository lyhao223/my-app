import React from "react";
interface Props {
  children?: React.ReactNode;
  image?: string;
  name?: string;
  duty?: string;
}
const AvatarCard = ({ children, image, name, duty }: Props) => {
  return (
    <div className="flex flex-col items-start justify-start space-y-4">
      <img src={image} alt="avatar" className="w-60 h-60 rounded-lg" />
      <div className="flex flex-col items-start justify-start space-y-1">
        <h1 className="font-bold text-2xl">{name}</h1>
        <p className="text-lg">{duty}</p>
      </div>
    </div>
  );
};

export default AvatarCard;
