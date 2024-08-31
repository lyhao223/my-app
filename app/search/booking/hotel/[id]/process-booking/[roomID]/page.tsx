"use client";
import FormInputBooking from "@/app/Components/UI/FormBooking/FormInputBooking";
import { store } from "@/app/services/redux/store";
import React from "react";
import { Provider } from "react-redux";

const Page = ({ params }: { params: { roomID: any; id: any } }) => {
  return (
    <Provider store={store}>
      <div className="2xl:my-16 xl:my-16 my-0 2xl:mx-12 xl:mx-12 mx-2 ">
        <FormInputBooking roomID={params.roomID} hotelID={params.id} />
      </div>
    </Provider>
  );
};

export default Page;
