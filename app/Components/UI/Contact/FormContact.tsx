import React from "react";
import contact from "@/assets/contact/contact.svg";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
const FormContact = () => {
  return (
    <div className="flex flex-col 2xl:flex-row xl:flex-row items-center justify-center">
      <img src={contact?.src} className="max-w-full h-auto" />
      <div className="w-full 2xl:w-full xl:w-full h-auto rounded-lg bg-slate-300">
        <form className="2xl:px-5 xl:px-5  2xl:py-8 xl:py-8 p-2 py-3 flex flex-col items-start justify-start space-y-4">
          <h1 className="text-xl font-bold text-black my-2">Form Contact</h1>
          <div className="flex flex-col space-x-0 space-y-5 2xl:flex-row xl:flex-rowitems-start justify-center 2xl:space-x-2 2xl:space-y-0 xl:space-x-2 xl:space-y-0 ">
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

          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label=" By submitting this form you agree to our terms and conditions."
            />
          </FormGroup>

          <Button variant="contained">Send Message</Button>
        </form>
      </div>
    </div>
  );
};

export default FormContact;
