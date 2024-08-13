"use client";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";

//redux
import {
  fetchAutoCompleteLocation,
  fetchHotelSearch,
} from "@/app/services/redux/slice/searchHotelSlice";

//icons
import { CiLocationOn, CiCalendar } from "react-icons/ci";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoMdPeople } from "react-icons/io";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/services/redux/hooks/hooks";
const FormSearchHotel = () => {
  const [adult, setIAdult] = useState(1);
  const [children, setIChildren] = useState(1);
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const [room, setIRoom] = useState(1);
  const [location, setLocation] = useState("");
  const dispatch = useAppDispatch();
  const hotels = useAppSelector((state) => state.searchHotel.hotels);

  //increase and decrease number of adult, children, room
  const handleIncreaseAdult = (event: any) => {
    event.stopPropagation();
    if (adult >= 30) {
      return;
    } else {
      setIAdult((prev) => prev + 1);
    }
  };
  const handleDecreaseAdult = (event: any) => {
    event.stopPropagation();
    if (adult === 0) {
      return;
    } else {
      setIAdult((prev) => prev - 1);
    }
  };
  const handleIncreaseChildren = (event: any) => {
    event.stopPropagation();
    if (children >= 30) {
      return;
    } else {
      setIChildren((prev) => prev + 1);
    }
  };
  const handleDecreaseChildren = (event: any) => {
    event.stopPropagation();
    if (children === 0) {
      return;
    } else {
      setIChildren((prev) => prev - 1);
    }
  };
  const handleIncreaseRoom = (event: any) => {
    event.stopPropagation();
    if (room >= 13) {
      return;
    } else {
      setIRoom((prev) => prev + 1);
    }
  };
  const handleDecreaseRoom = (event: any) => {
    event.stopPropagation();
    if (room === 0) {
      return;
    } else {
      setIRoom((prev) => prev - 1);
    }
  };

  const getValueGuestsAndRoooms = (): string => {
    return ` ${adult >= 1 ? "Adult:" : ""} ${adult >= 1 ? adult : ""}${
      children >= 1 ? ", Children:" : ""
    } ${children >= 1 ? children : ""}${room >= 1 ? ", Room:" : ""} ${
      room >= 1 ? room : ""
    }`;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await dispatch(fetchAutoCompleteLocation(location));
      const locationID = response.payload;

      if (locationID) {
        const searchResult = await dispatch(
          fetchHotelSearch({
            locationID: locationID,
            checkInDate: checkinDate,
            checkOutDate: checkoutDate,
            room: room,
            adult: adult,
            children: children,
          })
        );

        console.log(searchResult); // This will log the resolved search result
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex 2xl:flex-row 2xl:items-start 2xl:justify-start 2xl:space-x-8 2xl:space-y-0 xl:flex-row xl:items-start xl:justify-start xl:space-x-8 xl:space-y-0 lg:flex-row lg:items-start lg:justify-start lg:space-x-8 lg:space-y-0 md:flex-col md:items-start md:justify-start md:space-y-8 ls:flex-col ls:items-start ls:justify-start ls:space-x-0 ls:space-y-4 ms:flex-col ms:items-start ms:justify-start ms:space-x-0 ms:space-y-4 xs:flex-col xs:items-start xs:justify-start xs:space-x-0 xs:space-y-4">
        <div className="flex flex-row items-start justify-start space-x-1">
          <span>
            <CiLocationOn className="2xl:w-14 2xl:h-14 xl:w-14 xl:h-14 lg:w-14 lg:h-14 md:w-14 md:h-14 ls:w-14 ls:h-14 ms:w-14 ms:h-14 xs:h-10 xs:w-10" />
          </span>
          <TextField
            id="location"
            name="location"
            label="Location"
            variant="outlined"
            value={location}
            onChange={(e: any) => {
              setLocation(e.target.value);
            }}
            className="2xl:w-full xl:w-full lg:w-32 md:w-[34.222rem] ls:w-full"
          />
        </div>
        <div className="flex flex-row items-start justify-start space-x-1">
          <span>
            <CiCalendar className="2xl:w-14 2xl:h-14 xl:w-14 xl:h-14 lg:w-14 lg:h-14 md:w-14 md:h-14 ls:w-14 ls:h-14 ms:w-14 ms:h-14 xs:h-10 xs:w-10" />
          </span>
          <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row ls:flex-col ms:flex-col xs:flex-col items-start justify-start 2xl:space-x-1 2xl:space-y-0 xl:space-x-1 xl:space-y-0 lg:space-x-1 lg:space-y-0 md:space-x-1 md:space-y-0 ls:space-x-0 ls:space-y-2 ms:space-x-0 ms:space-y-2 xs:space-x-0 xs:space-y-2">
            <TextField
              id="checkinDate"
              name="checkinDate"
              label="Check in date"
              InputLabelProps={{
                shrink: true,
              }}
              type="date"
              value={checkinDate}
              onChange={(e: any) => {
                setCheckinDate(e.target.value);
              }}
              className="2xl:w-full xl:w-full lg:w-36 md:w-64 ls:w-full"
            />
            <TextField
              id="checkoutDate"
              name="checkoutDate"
              label="Check out date"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{ width: "100px" }}
              type="date"
              value={checkoutDate}
              onChange={(e: any) => {
                setCheckoutDate(e.target.value);
              }}
              className="2xl:w-full xl:w-full lg:w-36 md:w-72 ls:w-full"
            />
          </div>
        </div>

        <div className="flex flex-row items-start justify-start space-x-1">
          <span>
            <IoMdPeople className="2xl:w-14 2xl:h-14 xl:w-14 xl:h-14 lg:w-14 lg:h-14 md:w-14 md:h-14 ls:w-14 ls:h-14 ms:w-14 ms:h-14 xs:h-10 xs:w-10" />
          </span>
          <FormControl>
            <InputLabel id="guestsandroom">Guests & room</InputLabel>
            <Select
              labelId="select-guests-room"
              id="select-guests-room"
              label="Guests & room"
              value={getValueGuestsAndRoooms.toString()}
              renderValue={() => getValueGuestsAndRoooms().toString()}
              className="2xl:w-full xl:w-full lg:w-52 md:w-[34.222rem] ls:w-full ms:w-full xs:w-48">
              <MenuItem className="flex flex-row items-start justify-between">
                <span>Adults</span>
                <div className="flex flex-row items-center justify-center space-x-2">
                  <FaPlusCircle
                    className="w-5 h-5"
                    onClick={handleIncreaseAdult}
                  />
                  <span>{adult}</span>
                  <FaMinusCircle
                    className="w-5 h-5"
                    onClick={handleDecreaseAdult}
                  />
                </div>
              </MenuItem>
              <MenuItem className="flex flex-row items-start justify-between">
                <span>Children</span>
                <div className="flex flex-row items-center justify-center space-x-2">
                  <FaPlusCircle
                    className="w-5 h-5"
                    onClick={handleIncreaseChildren}
                  />
                  <span>{children}</span>
                  <FaMinusCircle
                    className="w-5 h-5"
                    onClick={handleDecreaseChildren}
                  />
                </div>
              </MenuItem>
              <MenuItem className="flex flex-row items-start justify-between">
                <span>Room</span>
                <div className="flex flex-row items-center justify-center space-x-2">
                  <FaPlusCircle
                    className="w-5 h-5"
                    onClick={handleIncreaseRoom}
                  />
                  <span>{room}</span>
                  <FaMinusCircle
                    className="w-5 h-5"
                    onClick={handleDecreaseRoom}
                  />
                </div>
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <button
          type="submit"
          className="absolute 2xl:right-16 2xl:top-20 xl:right-10 xl:top-20 lg:-right-4 lg:top-20 md:-right-8 md:-top-5 ls:-right-5 ls:top-0 ms:-right-3 ms:top-0 xs:-right-4 xs:-top-3">
          <div className="relative rounded-full border-2 border-slate-100 group bg-purple-400 p-2 hover:bg-purple-800 hover:duration-200 hover:transition-all hover:ease-in-out">
            <IoIosSearch className="w-8 h-8 group-hover:text-slate-100" />
          </div>
        </button>
      </form>
      {/* {hotels.map((hotel) => {
        const updatedPhotoUrl = hotel.photoUrls[0].replace(
          "square60",
          "square500"
        );
        return (
          <div key={hotel.id} className="hotel-card">
            <img src={updatedPhotoUrl} alt={hotel.name} />
            <h2>{hotel.name}</h2>
            <p>
              Review Score: {hotel.reviewScore} ({hotel.reviewScoreWord})
            </p>
            <p>Price: {hotel.priceBreakdown.grossPrice.amountRounded} VND</p>
            <p>
              Check-In: {hotel.checkin.fromTime} to {hotel.checkin.untilTime}
            </p>
            <p>
              Check-Out: {hotel.checkout.fromTime} to {hotel.checkout.untilTime}
            </p>
          </div>
        );
      })} */}
    </>
  );
};

export default FormSearchHotel;
