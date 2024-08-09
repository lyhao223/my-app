"use client";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { CiLocationOn, CiCalendar } from "react-icons/ci";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { SlPeople } from "react-icons/sl";
const FormSearchHotel = () => {
  const [adult, setIAdult] = useState(1);
  const [children, setIChildren] = useState(1);
  const [room, setIRoom] = useState(1);
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
  return (
    <form className="flex 2xl:flex-row 2xl:items-center 2xl:justify-center 2xl:space-x-8 2xl:space-y-0 xl:flex-row xl:items-center xl:justify-center xl:space-x-8 xl:space-y-0 lg:flex-row lg:items-center lg:justify-center lg:space-x-8 lg:space-y-0 md:flex-col md:items-start md:justify-start md:space-y-8">
      <div className="flex flex-row items-start justify-start space-x-1">
        <CiLocationOn className="w-14 h-14" />
        <TextField
          id="location"
          name="location"
          label="Location"
          variant="outlined"
          className="2xl:w-full xl:w-full lg:w-full md:w-[36rem]"
        />
      </div>
      <div className="flex flex-row items-start justify-start space-x-1">
        <CiCalendar className="w-14 h-14" />
        <TextField
          id="pickdatestart"
          name="pickdatestart"
          label="Pick date start"
          InputLabelProps={{
            shrink: true,
          }}
          type="date"
          className="2xl:w-full xl:w-full lg:w-full md:w-72"
        />
        <TextField
          id="pickdateend"
          name="pickdateend"
          label="Pick date end"
          InputLabelProps={{
            shrink: true,
          }}
          type="date"
          className="2xl:w-full xl:w-full lg:w-full md:w-72"
        />
      </div>

      <FormControl>
        <InputLabel id="guestsandroom">Guests & room</InputLabel>
        <Select
          labelId="select-guests-room"
          id="select-guests-room"
          label="Guests & room"
          value={getValueGuestsAndRoooms.toString()}
          renderValue={() => getValueGuestsAndRoooms().toString()}>
          <MenuItem className="flex flex-row items-start justify-between">
            <span>Adults</span>
            <div className="flex flex-row items-center justify-center space-x-2">
              <FaPlusCircle className="w-5 h-5" onClick={handleIncreaseAdult} />
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
              <FaPlusCircle className="w-5 h-5" onClick={handleIncreaseRoom} />
              <span>{room}</span>
              <FaMinusCircle className="w-5 h-5" onClick={handleDecreaseRoom} />
            </div>
          </MenuItem>
        </Select>
      </FormControl>
      <button
        type="submit"
        className="absolute 2xl:bottom-10 2xl:-right-10 xl:bottom-10 xl:-right-10 lg:bottom-10 lg:-right-10 md:bottom-28 md:-right-5">
        <div className="relative rounded-full border-2 border-slate-100 group bg-purple-400 p-2 hover:bg-purple-800 hover:duration-200 hover:transition-all hover:ease-in-out">
          <IoIosSearch className="w-8 h-8 group-hover:text-slate-100" />
        </div>
      </button>
    </form>
  );
};

export default FormSearchHotel;
