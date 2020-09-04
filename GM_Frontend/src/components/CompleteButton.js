import React from "react";

// Material ui imports
import { makeStyles } from "@material-ui/core/styles";

// Utils
import { client } from "../functions/client.js";

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
    marginBottom: "2rem",
    alignItems: "center",
    height: "300px",
    "&:active": {
      filter: "drop-shadow(0px 10px 0px #001703)",
      transform: "translateY(4px)",
      backgroundColor: "#00a916",
    },
  },

  completeTxt: {
    display: "block",
  },
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

    if (todayDate[4] === "-") {
      todayDate = todayDate.substring(0, 3) + "0" + todayDate.substring(3);
    }

    const statsObj = {
      action_amount: 1,
      user_id: localStorage.id,
      logged_time: todayDate,
    };

    client("stats", { body: statsObj }).then((data) => {
      if (!data.error) {
        props.setUserDailyTotal(props.userDailyTotal + 1);
      }
    });
  };

  return (
    <div className={classes.button} onClick={handleClick}>
      <span className={classes.completeTxt}>COMPLETE!</span>
    </div>
  );
}
