"use client";
import { store } from "@/app/services/redux/store";
import React from "react";
import { Provider } from "react-redux";
import RoundTrip from "./RoundTrip";

const ProviderStoreRoundTrip = () => {
  return (
    <Provider store={store}>
      <RoundTrip />
    </Provider>
  );
};

export default ProviderStoreRoundTrip;
