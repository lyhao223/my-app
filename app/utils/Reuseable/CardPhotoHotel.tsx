import React from "react";
interface ICardPhotoHotelProps {
  image?: string;
  alt?: string | number | any;
  iskey?: string | number | any;
  css?: any;
  children: React.ReactNode | any;
}
const CardPhotoHotel = ({
  image,
  alt,
  iskey,
  css,
  children,
}: ICardPhotoHotelProps) => {
  return <>{children}</>;
};

export default CardPhotoHotel;
