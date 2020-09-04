import React from "react";
import { Link } from "react-router-dom";

// To create the styles object
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// Material UI imports

// Util
import { logout } from "../functions/client.js"

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
      <a
        href="#"
        
        className={classes.button}
        onClick={() => {
          logout();
        }}
      >
        <ExitToAppIcon color="secondary" />
      </a>
    </Link>
  );
}
