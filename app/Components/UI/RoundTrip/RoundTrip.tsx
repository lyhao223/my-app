import React from "react";
import DaNang from "@/assets/flightroundtrip/da-nang.jpg";
import Image from "next/image";
import Link from "next/link";
import { DataFlightRoundTrip } from "@/app/utils/roundtrip/flightRoundTrip";
import RoundTripFlights from "@/app/utils/Reuseable/RoundTripFlights";
const RoundTrip = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-24">
      <span className="text-5xl font-semibold">
        Roundtrip Flights With 5 Days From Today
      </span>
      <div className="flex flex-row items-center justify-center space-x-16">
        {DataFlightRoundTrip.map((item) => (
          <RoundTripFlights
            key={item.id}
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
