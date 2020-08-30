import React from "react";
import { Link } from "react-router-dom";

// To create the styles object
import { makeStyles } from "@material-ui/core/styles";

// Material UI imports
import { Button } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.secondary,
  },
  logoutLink: {
    textDecoration: "none",
  },
}));

export default function LogoutButton() {
  const classes = useStyles();

  return (
    <Link to="/" className={classes.logoutLink}>
      <Button
        variant="outlined"
        color="secondary"
        className={classes.button}
        onClick={() => {
          localStorage.clear();
        }}
      >
        Logout
      </Button>
    </Link>
  );
}
