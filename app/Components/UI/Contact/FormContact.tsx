import React from "react";
import contact from "@/assets/contact/contact.svg";
import { TextField } from "@mui/material";
const FormContact = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <img src={contact?.src} className="max-w-full h-auto" />
      <div className="w-full h-auto rounded-lg bg-slate-300">
        <form className="px-5 py-8 flex flex-col items-start justify-start space-y-4">
          <h1 className="text-xl font-bold text-black my-2">Form Contact</h1>
          <div className="flex flex-row items-start justify-center space-x-2">
            <TextField label="Name" variant="outlined" className="w-72 h-12" />
            <TextField label="Email" variant="outlined" className="w-72 h-12" />
          </div>
          <TextField
            label="Mobile"
            variant="outlined"
            className="w-full h-12 my-2"
          />
          <TextField
            label="Message"
            variant="outlined"
            className="w-full"
            multiline
            rows={4}
          />
        </form>
      </div>
    </div>
  );
};

export default FormContact;
