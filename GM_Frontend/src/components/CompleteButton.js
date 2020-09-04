import React from "react";

// Material ui imports
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "50%",
    width: "300px",
    fontSize: "2rem",
    fontFamily: "Roboto",
    fontWeight: "bold",
    filter: "drop-shadow(0px 20px 0px #00690e)",
    border: "1px solid #00a015",
    display: "flex",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    height: "300px",
    "&:active": {
      filter: "drop-shadow(0px 10px 0px #001703)",
      transform: "translateY(4px)",
      backgroundColor: "#00a916"
    }
  },

  completeTxt: {
    display: "block"
  }
}));

export default function CompleteButton(props) {
  const classes = useStyles();

  // CREATES A STAT FOR CURRENT USER
  const handleClick = () => {
    let today = new Date();
    let date =
      today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();
    let todayDate = date;

    if (date[1] === "-") {
      todayDate = "0" + date;
    }
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
        logged_time: todayDate,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(todayDate);
        if (!data.error) {
          props.setUserDailyTotal(props.userDailyTotal + 1);
        }
      });
  };

  return (
    <div
      className={classes.button}
      onClick={handleClick}
    >
      <span className={classes.completeTxt}>COMPLETE!</span>
    </div>
  );
}
