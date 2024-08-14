"use client";
import { store } from "@/app/services/redux/store";
import React from "react";
import { Provider } from "react-redux";
import TopHotelInDaNang from "@/app/Components/UI/TopHotelInDaNang/TopHotelInDaNang";

const ProviderStoreTopHotelInDaNang = () => {
  return (
    <Provider store={store}>
      <TopHotelInDaNang />
    </Provider>
  );
};

export default ProviderStoreTopHotelInDaNang;
