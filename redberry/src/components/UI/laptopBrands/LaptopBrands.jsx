import React, { useState, useEffect } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function LaptopBrands() {
  const [dropdownValues, setDropdownValues] = useState([]);
  const [eachBrandsValue, setEachBrandsValue] = useState(
    localStorage.getItem("eachBrandsValue") || ""
  );

  useEffect(() => {
    localStorage.setItem("eachBrandsValue", eachBrandsValue);
  }, [eachBrandsValue]);

  const handleChange = (e) => {
    setEachBrandsValue(e.target.value);
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

  return (
    <>
      <FormControl sx={{ width: 371, mt: 1 }}>
        <InputLabel id="multiple-brand">აირჩიეთ ბრენდი</InputLabel>
        <Select
          sx={{
            height: "60px",
            borderRadius: "8px",
            backgroundColor: "#EBEBEB",
          }}
          labelId="multiple-brand"
          id="multiple-brand"
          defaultValue=""
          value={eachBrandsValue}
          onChange={handleChange}
          input={<OutlinedInput label="აირჩიეთ ხარისხი" />}>
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
