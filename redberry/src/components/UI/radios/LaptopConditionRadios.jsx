import React, { useEffect } from "react";

// mui
import { FormControlLabel, RadioGroup, Radio } from "@mui/material";

const LaptopConditionRadios = ({
  enteredLaptopCondition,
  setEnteredLaptopCondition,
}) => {
  return (
    <RadioGroup
      row
      value={enteredLaptopCondition}
      onChange={(e) => setEnteredLaptopCondition(e.target.value)}>
      <FormControlLabel
        control={
          <Radio
            value="ახალი"
            sx={{
              "&, &.Mui-checked": {
                color: "#4D9AC3",
              },
            }}
          />
        }
        label="ახალი"
      />
      <FormControlLabel
        control={
          <Radio
            value="მეორადი"
            sx={{
              "&, &.Mui-checked": {
                color: "#4D9AC3",
              },
              ml: "50px",
            }}
          />
        }
        label="მეორადი"
      />
    </RadioGroup>
  );
};

export default LaptopConditionRadios
