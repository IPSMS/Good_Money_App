import React from "react";

// Material ui imports
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    borderRadius: "50%",
    width: "400px",
    height: "400px",
    fontSize: "40px",
    fontFamily: "Roboto",
    fontWeight: "bold",
    filter: "drop-shadow(3px 7px 8px #7e7e7e)",
    border: "15px solid #00a015",
    "&:hover": {
      border: "10px solid #599634",
    },
  },
}));

export default function CompleteButton() {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.button}
      onClick={() => {
        console.log("MAKE DOLLAS");
      }}
    >
      COMPLETE!
    </Button>
  );
}
