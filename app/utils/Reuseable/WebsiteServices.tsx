import React from "react";
interface Props {
  children: React.ReactNode;
  color?: string;
}
const WebsiteServices = ({ children, color }: Props) => {
  return (
    <div className={`w-auto h-auto px-2 py-3 bg- rounded-lg ${color}`}>
      {children}
    </div>
  );
};

export default WebsiteServices;
