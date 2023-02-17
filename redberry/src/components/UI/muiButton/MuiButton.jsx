import React from 'react'

// mui button
import Button from "@mui/material/Button";

const MuiButton = (props) => {
  return (
    <>
      <Button
        type="submit"
        onClick={props.submitHandler}
        variant="contained"
        size="large"
        sx={{
          position: "relative",
          right: 0,
          mt: "95px",
          width: props.width,
          height: "60px",
          fontSize: "18px",
        }}
        disableElevation>
        {props.text}
      </Button>
    </>
  );
}

export default MuiButton
