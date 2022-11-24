import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";

const UserSettings = () => {
  return (
    <>
      <Paper elevation={2} sx={{}}>
        <Typography variant="h5" sx={{ color: "#9099C5" }}>
          User Settings
        </Typography>

        <Grid container mt={2} ml={3} spacing={2}>
          <Grid item xs={5} md={3}>
            <img
              src="https://www.pngitem.com/pimgs/m/226-2261456_user-setting-user-setting-icon-png-transparent-png.png"
              width={250}
              height={250}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <Grid container direction={"column"}>
              <Grid item mt={1}>
                <TextField
                  id="firstName"
                  label="First Name"
                  variant="standard"
                />
              </Grid>

              <Grid item mt={1}>
                <TextField id="lastName" label="Last Name" variant="standard" />
              </Grid>

              <Grid item mt={1}>
                <TextField
                  id="Email"
                  label="Email"
                  variant="standard"
                  type={"email"}
                />
              </Grid>

              <Grid item mt={1}>
                <TextField
                  id="phoneNumber"
                  label="Phone Number"
                  variant="standard"
                  type={"number"}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={1} md={3}></Grid>
          <Grid container mt={1} mb={2}>
            <Grid item xs={4} md={2}></Grid>
            <Grid item xs={4} md={2}>
              <Button variant="contained">Save</Button>
            </Grid>{" "}
            <Grid item xs={4} md={2}></Grid>{" "}
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default UserSettings;
