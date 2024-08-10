import React from "react";
import Image from "next/image";
interface ScaleImageHotelProps {
  photoUrl: any;
  name: string;
  className?: string;
}
const ScaleImageHotel = ({
  photoUrl,
  name,
  className,
}: ScaleImageHotelProps) => {
  const updateUrl = photoUrl.replace("square60", "square1000");
  return <Image src={updateUrl} alt={name} className={className} />;
};

export default ScaleImageHotel;
