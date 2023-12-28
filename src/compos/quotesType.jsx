import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const options = ["Select Type", "As Single", "Quotes"];

export default function QuotesType(props) {
  return (
    <>
      <Autocomplete
        value={props.value}
        onChange={(event, newValue) => {
          props.onChange(newValue || null);
        }}
        inputValue={props.value} // Ensure inputValue matches the controlled value
        onInputChange={(event, newValue) => {
          props.onChange(newValue || null); // Update the controlled value
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Select Type...." />}
      />
    </>
  );
}
