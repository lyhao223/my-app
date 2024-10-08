import Link from "next/link";
import React from "react";
import Image from "next/image";
interface Props {
  image: string | any;
  title?: string | any;
  flights?: number | any;
  keyID?: any;
}
const RoundTripFlights = ({ image, title, flights, keyID }: Props) => {
  return (
    <Link
      href={"/"}
      key={keyID}
      className="flex flex-col items-center justify-center space-y-2">
      <Image
        src={image}
        alt={title}
        className="w-52 h-52 rounded-full shadow-lg"
        width={208}
        height={208}
      />
      <span className="text-2xl font-semibold">{title}</span>
      <span className="text-gray-400 text-lg font-semibold">
        {flights} Flights
      </span>
    </Link>
  );
};

export default RoundTripFlights;
