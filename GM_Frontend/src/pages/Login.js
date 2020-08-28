import React from "react";
import AppBar from "../components/AppBar";
import CompleteButton from "../components/CompleteButton";

// To create the styles object
import { makeStyles } from "@material-ui/core/styles";

// Material UI imports
import { Grid, Container, Typography, TextField, Button } from "@material-ui/core";

// Styles Object
const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    marginTop: "5%",
    textAlign: 'center'
  },
  dailyTotal: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '60px'
  },
  grandTotalBox: {
    textAlign: 'right',
    display: 'inline-block'
  }
}));

export default function Login() {
  // Variable to enable ease of use of stlyes object
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
        <Typography variant="h1" >
            Login:
        </Typography>
        <TextField
          id="standard-full-width"
          label="Username:"
          style={{ margin: 8 }}
          placeholder="Username"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          label="Password:"
          style={{ margin: 8 }}
          placeholder="Password"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button variant="contained" color="secondary">
            SUBMIT
        </Button>

        <Typography variant="p" >
            New to GoodMoney? Signup Below!
        </Typography>
        <Button variant="outlined" color="secondary">
            SIGN UP
        </Button>
    </Container>
  );
}
