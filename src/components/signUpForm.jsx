import { TextField } from "@mui/material";
import React from "react";
import { Button, FormGroup, Text, Title } from "./form";

const SignUpForm = () => {
  return (
    <>
      <Title>
        {" "}
        <img
          src={require("../img/logo.jpg")}
          width="50px"
          align="center"
        />{" "}
        <em>Real World App</em>
      </Title>
      <Text>Sign Up</Text>
      <FormGroup>
        <TextField id="outlined-basic" label="First Name*" variant="outlined" fullWidth/> 
      </FormGroup>
      <FormGroup>
      <TextField id="outlined-basic" label="Last Name*" variant="outlined" fullWidth/> 
      </FormGroup>
      <FormGroup>
      <TextField id="outlined-basic" label="Username*" variant="outlined" fullWidth/> 
      </FormGroup>
      <FormGroup>
      <TextField id="outlined-basic" label="Password*" variant="outlined" fullWidth type="password"/> 
      </FormGroup>
      <FormGroup>
      <TextField id="outlined-basic" label="Confirm Password*" variant="outlined" fullWidth type="password"/> 
      </FormGroup>
      <FormGroup>
        <Button>SIGN UP</Button>
      </FormGroup>
    </>
  );
};

export default SignUpForm;
