import React, { useState, useEffect } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Cpu = () => {
  const [dropdownValues, setDropdownValues] = useState([]);
  const [eachCpuValue, setEachCpuValue] = useState(
    localStorage.getItem("eachCpuValue") || ""
  );

  useEffect(() => {
    localStorage.setItem("eachCpuValue", eachCpuValue);
  }, [eachCpuValue]);

  const handleChange = (e) => {
    setEachCpuValue(e.target.value);
  };

  useEffect(() => {
    const fetchCpus = async () => {
      const res = await fetch("https://pcfy.redberryinternship.ge/api/cpus");
      const data = await res.json();
      setDropdownValues(data);
    };
    fetchCpus();
  }, []);

  return (
    <>
      <FormControl sx={{ mt: 1 }}>
        <InputLabel id="multiple-cpu">აირჩიეთ CPU</InputLabel>
        <Select
          sx={{ backgroundColor: "#EBEBEB" }}
          labelId="multiple-cpu"
          id="multiple-cpu"
          defaultValue=""
          value={eachCpuValue}
          onChange={handleChange}
          input={<OutlinedInput label="აირჩიეთ CPU" />}>
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
};

export default Cpu;


