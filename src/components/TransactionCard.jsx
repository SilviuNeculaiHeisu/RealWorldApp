import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

const TransactionCard = () => {
  return (
    <Paper sx={{ marginTop: "10px" }}>
      <Grid container>
        <Grid item xs={3} md={3}>
          <img
            src="https://cdn.dribbble.com/users/1223630/screenshots/8115260/char_still_2x.gif?compress=1&resize=400x300"
            width={"90px"}
            height={"75px"}
          ></img>
        </Grid>
        <Grid item xs={3} md={3}>
          <Grid item>
            <Typography variant="h6">Name of payer</Typography>
          </Grid>
        </Grid>
        <Grid item xs={3} md={3}>
          <Grid item>
            <Typography variant="h6">Name of payer</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TransactionCard;
