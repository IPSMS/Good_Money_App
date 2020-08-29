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

  // CREATES A STAT FOR CURRENT USER
  const handleClick = () => {
    fetch("http://localhost:3000/stats", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.jwt}`,
      },
      body: JSON.stringify({
        action_amount: 1,
        user_id: localStorage.id,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        console.log(user);
      });
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.button}
      onClick={handleClick}
    >
      COMPLETE!
    </Button>
  );
}
