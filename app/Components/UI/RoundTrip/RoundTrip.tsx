"use client";
import React, { use, useEffect } from "react";
import DaNang from "@/assets/flightroundtrip/da-nang.jpg";
import Image from "next/image";
import Link from "next/link";
import { DataFlightRoundTrip } from "@/app/utils/roundtrip/flightRoundTrip";
import RoundTripFlights from "@/app/utils/Reuseable/RoundTripFlights";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/services/redux/hooks/hooks";
import { fetchFiveFlight } from "@/app/services/redux/slice/getFiveFlight";
import { formatDate } from "@/app/utils/formatDate";
const RoundTrip = () => {
  const dispatch = useAppDispatch();
  // const getFiveFlight = useAppSelector((state) => state.getFiveFlight.flights);
  // useEffect(() => {
  //   // dispatch(fetchFiveFlight({ origin: "SGN", destination: "HUI" }));
  //   // const today = new Date();
  //   // const formatToday = formatDate(today);
  //   // const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
  //   // const formatTomorrow = formatDate(tomorrow);
  //   // const getFiveDays = formatDate(
  //   //   new Date(tomorrow.getTime() + 5 * 24 * 60 * 60 * 1000)
  //   // );
  //   // console.log(formatToday, formatTomorrow, getFiveDays);
  // });
  return (
    <div className="flex flex-col items-center justify-center space-y-24">
      <span className="text-5xl font-semibold">
        Roundtrip Flights With 5 Days From Today
      </span>
      <div className="flex flex-row items-center justify-center space-x-16">
        {DataFlightRoundTrip.map((item, index) => (
          <RoundTripFlights
            keyID={index}
            image={item.image.src}
            title={item.from}
            flights={item.totalFlight}
          />
        ))}
      </div>
    </div>
  );
};

export default RoundTrip;
