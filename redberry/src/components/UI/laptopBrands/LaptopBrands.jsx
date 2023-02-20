import React, { useState, useEffect } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function LaptopBrands(props) {
  const [dropdownValues, setDropdownValues] = useState([]);

  const handleChange = (e) => {
    props.setEachBrandsValue(e.target.value);
  };

  //http request
  useEffect(() => {
    const fetchBrands = async () => {
      const response = await fetch(
        "https://pcfy.redberryinternship.ge/api/brands"
      );
      const data = await response.json();
      setDropdownValues(data);
    };
    fetchBrands();
  }, []);


  const hasError = props.isBrandsTouched && props.eachBrandsValue === "";

  return (
    <>
      <FormControl sx={{ width: 371, mt: 1 }} error={hasError}>
        <InputLabel id="multiple-brand">აირჩიეთ ბრენდი</InputLabel>
        <Select
          sx={{
            height: "60px",
            borderRadius: "8px",
            backgroundColor: "#EBEBEB",
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
          }}
          labelId="multiple-brand"
          id="multiple-brand"
          defaultValue=""
          value={props.eachBrandsValue}
          onChange={handleChange}
          input={<OutlinedInput label="აირჩიეთ ბრენდი" />}>
          {dropdownValues.data !== undefined &&
            dropdownValues.data.map((dropdownValue) => {
              return (
                <MenuItem key={dropdownValue.id} value={dropdownValue.name}>
                  {dropdownValue.name}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </>
  );
}
