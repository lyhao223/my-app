"use client";
import { useEffect } from "react";
import { DataFlightRoundTrip } from "@/app/utils/roundtrip/flightRoundTrip";
import RoundTripFlights from "@/app/utils/Reuseable/RoundTripFlights";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/services/redux/hooks/hooks";
import { fetchHaNoiFlights } from "@/app/services/redux/slice/HaNoiFlights";
import { fetchDaLatFlights } from "@/app/services/redux/slice/DaLatFlights";
import { fetchDaNangFlights } from "@/app/services/redux/slice/DaNangFlights";
import { fetchHueFlights } from "@/app/services/redux/slice/HueFlights";
import { fetchQuangNgaiFlights } from "@/app/services/redux/slice/QuangNgaiFlights";

import Hue from "@/assets/flightroundtrip/hue.jpg";
import HaNoi from "@/assets/flightroundtrip/ha-noi.jpg";
import DaLat from "@/assets/flightroundtrip/da-lat.jpg";
import DaNang from "@/assets/flightroundtrip/da-nang.jpg";
import QuangNgai from "@/assets/flightroundtrip/quang-ngai.jpg";

const RoundTrip = () => {
  // const dispatch = useAppDispatch();
  // const HaNoiFlights = useAppSelector((state) => state.HaNoiFlights.flights);
  // const DaLatFlights = useAppSelector((state) => state.DaLatFlights.flights);
  // const HueFlights = useAppSelector((state) => state.HueFlights.flights);
  // const DaNangFlights = useAppSelector((state) => state.DaNangFlights.flights);
  // const QuangNgaiFlights = useAppSelector(
  //   (state) => state.QuangNgaiFlights.flights
  // );
  // useEffect(() => {
  //   dispatch(fetchHaNoiFlights());
  //   dispatch(fetchDaLatFlights());
  //   dispatch(fetchHueFlights());
  //   dispatch(fetchDaNangFlights());
  //   dispatch(fetchQuangNgaiFlights());
  // }, [dispatch]);
  return (
    <div className="flex flex-col items-center justify-center space-y-24">
      <span className="2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl text-xl 2xl:text-start xl:text-start lg:text-start md:text-center ls:text-center ms:text-center xs:text-center font-semibold">
        Roundtrip Flights With 5 Days From Today
      </span>
      <div className="flex 2xl:flex-row 2xl:items-center 2xl:justify-center 2xl:space-x-16 xl:flex-row xl:items-center xl:justify-center xl:space-x-16 lg:flex-row lg:items-center lg:justify-center lg:space-x-1 md:flex-col md:items-center md:justify-center md:space-x-0 md:space-y-4 ls:flex-col ls:items-center ls:justify-center ls:space-x-0 ls:space-y-4 ms:flex-col ms:items-center ms:justify-center ms:space-x-0 ms:space-y-4 xs:flex-col xs:items-center xs:justify-center xs:space-x-0 xs:space-y-4">
        {DataFlightRoundTrip.map((item) => (
          <div key={item.id}>
            <RoundTripFlights
              keyID={item.id}
              image={item.image.src}
              title={item.from}
              flights={item.totalFlight}
            />
          </div>
        ))}
        {/* <RoundTripFlights
          image={HaNoi.src}
          title="Ha Noi"
          flights={HaNoiFlights}
        />
        <RoundTripFlights
          image={DaLat.src}
          title="Da Lat"
          flights={DaLatFlights}
        />
        <RoundTripFlights image={Hue.src} title="Hue" flights={HueFlights} />
        <RoundTripFlights
          image={QuangNgai.src}
          title="Quang Ngai"
          flights={QuangNgaiFlights}
        />
        <RoundTripFlights
          image={DaNang.src}
          title="Da Nang"
          flights={DaNangFlights}
        /> */}
      </div>
    </div>
  );
};

export default RoundTrip;
