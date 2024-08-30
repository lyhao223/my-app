import { Button, Input, TextField } from "@mui/material";
import React from "react";

interface IFormInputBookingProps {
  id: any;
}
const FormInputBooking = () => {
  return (
    <>
      <div className="flex items-start justify-center">
        <span className="text-3xl font-bold antialiased">Booking Process</span>
      </div>
      <div className="my-10 2xl:mx-80 xl:mx-36 mx-auto grid 2xl:grid-cols-4 xl:grid-cols-4 gap-20 items-stretch">
        <div className="col-span-1 2xl:col-span-2 xl:col-span-2 my-5 2xl:my-0 xl:my-0 flex items-center justify-center 2xl:flex-none">
          {/*info hotel*/}
          <div className="flex flex-col items-start justify-center 2xl:items-start 2xl:justify-start xl:items-start xl:justify-start space-y-6">
            <div className="w-80 h-auto rounded-lg border-2 p-4">
              <div className="flex flex-col items start justify-start space-y-2">
                <span>Apartment</span>
                <span>Name hotel</span>
                <span>Address</span>
                <div className="flex flex-row items-center justify-start space-x-2">
                  <span className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center">
                    8.9
                  </span>
                  <span>Good</span>
                  <span>5000 reviews</span>
                </div>
              </div>
            </div>
            {/*detail room*/}
            <div className="w-80 h-auto rounded-lg border-2 p-4">
              <div className="flex flex-col items start justify-start space-y-2">
                <span>Detail booking</span>
                <div className="flex flex-row items-center justify-between">
                  <span>Check in date: 2024-09-01</span>
                  <span>Check out date: 2024-09-05</span>
                </div>
                <span>Amount nights:</span>
                <span>4</span>
                <span>You choose:</span>
                <span>2 rooms - 4 adults - 2 children</span>
                <span>1 x Delux room</span>
              </div>
            </div>
            {/*detail price*/}

            <div className="w-80 h-auto p-4 border-2 rounded-lg">
              <span>Detail Price:</span>
              <div className="flex flex-row items-center justify-between">
                <span>Price Amout:</span>
                <span>1,500,000VND</span>
              </div>
              <div className="flex flex-row items-center justify-between">
                <span>Price With Voucher:</span>
                <span>500,000VND</span>
              </div>
              <div className="min-w-full h-20 bg-blue-300 rounded-lg p-2 my-3">
                <div className="flex flex-row items-center justify-between">
                  <span>Total:</span>
                  <div className="flex flex-col items-end justify-start">
                    <span>1,500,000VND</span>
                    <span>500,000VND</span>
                    <span>VAT and Fee includes</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <span>Info price:</span>
                <span>Include 8% VAT and 33,800VND</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 2xl:col-span-2 xl:col-span-2 min-w-full">
          <div className="flex flex-col items-start justify-start space-y-3">
            <div className="w-full border-2 rounded-lg p-4">
              <span>Info Custom</span>
              <form className="my-4 flex flex-col items-start justify-between space-y-8">
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                />

                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                  fullWidth
                />
              </form>
            </div>

            <div className="w-full border-2 rounded-lg p-4">
              <span>Notes</span>
              <div className="my-2 flex flex-col items-start justify-start space-y-2">
                <span>No payment</span>
                <span>No payment</span>
                <span>No payment</span>
                <span>No payment</span>
              </div>
            </div>

            <Button variant="contained" color="primary" className="w-80">
              Book now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormInputBooking;
