import React from "react";
import {Link} from "react-router-dom";

// To create the styles object
import { makeStyles } from "@material-ui/core/styles";

// Material UI imports
import { Grid, Container, Typography, TextField, Button, Box } from "@material-ui/core";

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
  },
  formInputs__submit: {
    marginTop: "1rem",
    color: "#fff",
    marginTop: "1rem",
    fontWeight: "bold"
  },
  signupContainer: {
    marginTop: "2rem"
  },
  signup_button: {
    textAlign: "center", 
    marginTop: "1rem",
    fontWeight: "bold"
  },
  textDecorationNone: {
      textDecoration: "none"
  },
  headerTitle: {
      marginBottom: "2rem",
      fontWeight: "bold"
  },
  wrapper: {
    paddingTop: "3rem"
  }

}));

export default function Signup() {
  // Variable to enable ease of use of stlyes object
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.wrapper}>
        <Typography variant="h3" className={classes.headerTitle}>
            SIGN UP:
        </Typography>
        <Box className="formInputs" >

            <TextField
            id="standard-full-width"
            label="Enter First Name:"
            style={{ margin: 8 }}
            placeholder="Enter First Name"
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            />

            <TextField
            id="standard-full-width"
            label="Last Name:"
            style={{ margin: 8 }}
            placeholder="Enter Last Name"
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            />

            <TextField
            id="standard-full-width"
            label="Username:"
            style={{ margin: 8 }}
            placeholder="Enter Username"
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
            placeholder="Enter Password"
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            />

            <TextField
            id="standard-full-width"
            label="Password Confirmation:"
            style={{ margin: 8 }}
            placeholder="Enter Password Confirmation"
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            />

            <Button 
                variant="contained" 
                color="secondary" 
                className={classes.formInputs__submit} 
                size="large" 
                onClick={()=>{ console.log('WINNER!')}}
            >
                SUBMIT
            </Button>  

        </Box>

    </Container>
  );
}
