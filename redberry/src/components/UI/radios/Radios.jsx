import React from "react";

// mui
import { FormControlLabel, RadioGroup, Radio } from "@mui/material";

const Radios = ({ firstValue, secondValue }) => {
  return (
    <RadioGroup row>
      <FormControlLabel
        value={firstValue}
        control={
          <Radio
            sx={{
              "&, &.Mui-checked": {
                color: "#4D9AC3",
              },
            }}
          />
        }
        label={firstValue}
      />
      <FormControlLabel
        value={secondValue}
        control={
          <Radio
            sx={{
              "&, &.Mui-checked": {
                color: "#4D9AC3",
              },
              ml: "50px",
            }}
          />
        }
        label={secondValue}
      />
    </RadioGroup>
  );
};

export default Radios;
