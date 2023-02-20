import React, { useState, useEffect } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const TeamAndPositionSelects = (props) => {
  const [teamId, setTeamId] = useState("");

  useEffect(() => {
    const fetchTeams = async () => {
      const res = await fetch("https://pcfy.redberryinternship.ge/api/teams");
      const data = await res.json();
      props.setTeams(data);
    };
    fetchTeams();
  }, []);

  useEffect(() => {
    const fetchPosiions = async () => {
      const res = await fetch(
        "https://pcfy.redberryinternship.ge/api/positions"
      );
      const data = await res.json();
      props.setPositions(data);
    };
    fetchPosiions();
  }, []);

  const handleTeamChange = (e) => {
    props.setEachTeam(e.target.value);
  };

  const handlePositionChange = (e) => {
    props.setEachPosition(e.target.value);
  };

  const handleTeamClick = (e) => {
    setTeamId(e.target.id);
  };

  const hasTeamsError = props.eachTeam === "" && props.isTeamTouched;
  const hasPositionsError =
    props.eachPosition === "" && props.isPositionTouched;

  let filteredItems = [];

  if (props.positions.data !== undefined) {
    filteredItems.push(
      props.positions.data.filter((position) => position.team_id === +teamId)
    );
  }
  return (
    <>
      <FormControl
        sx={{ width: "100%", m: "55px 0  45px 0" }}
        error={hasTeamsError}>
        <InputLabel id="multiple-team">აირჩიეთ თიმი</InputLabel>
        <Select
          sx={{
            height: "60px",
            borderRadius: "8px",
            backgroundColor: "#EBEBEB",
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
          }}
          labelId="multiple-team"
          id="multiple-team"
          defaultValue=""
          value={props.eachTeam}
          onChange={handleTeamChange}
          onClick={handleTeamClick}
          input={<OutlinedInput label="აირჩიეთ თიმი" />}>
          {/* show content */}
          {props.teams.data !== undefined &&
            props.teams.data.map((team) => {
              return (
                <MenuItem key={team.id} value={team.name} id={team.id}>
                  {team.name}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
      <FormControl
        sx={{ width: "100%", m: "45px 0 55px 0" }}
        error={hasPositionsError}>
        <InputLabel id="multiple-position">აირჩიეთ პოზიცია</InputLabel>
        <Select
          sx={{
            height: "60px",
            borderRadius: "8px",
            backgroundColor: "#EBEBEB",
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
          }}
          labelId="multiple-position"
          id="multiple-position"
          defaultValue=""
          value={props.eachPosition}
          onChange={handlePositionChange}
          input={<OutlinedInput label="აირჩიეთ პოზიცია" />}>
          {/* show content */}
          {filteredItems[0] !== undefined &&
            filteredItems[0].map((item) => {
              return (
                <MenuItem key={item.id} value={item.name}>
                  {item.name}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </>
  );
};

export default TeamAndPositionSelects;
