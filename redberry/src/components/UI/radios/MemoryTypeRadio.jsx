import React, { useEffect } from "react";

// mui
import { FormControlLabel, RadioGroup, Radio } from "@mui/material";

const MemoryTypeRadio = ({ enteredMemoryType, setEnteredMemoryType }) => {
  return (
    <RadioGroup
      row
      value={enteredMemoryType}
      onChange={(e) => setEnteredMemoryType(e.target.value)}>
      <FormControlLabel
        control={
          <Radio
          value='SSD'
            sx={{
              "&, &.Mui-checked": {
                color: "#4D9AC3",
              },
            }}
          />
        }
        label="SSD"
      />
      <FormControlLabel
        control={
          <Radio
          value='HDD'
            sx={{
              "&, &.Mui-checked": {
                color: "#4D9AC3",
              },
              ml: "50px",
            }}
          />
        }
        label="HDD"
      />
    </RadioGroup>
  );
};

export default MemoryTypeRadio;
