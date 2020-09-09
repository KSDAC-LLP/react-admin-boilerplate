import React from "react";

import "./user-registration.style.scss";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import { Box } from "@material-ui/core";

const UserRegistrationComponent = () => {

  return (
    <Card className="card">
      <CardContent className="card-content">
        <form noValidate /* onSubmit={(e) => doLogin(e)} */>
          <Grid container spacing={2}>
            <Grid item xl={12} lg={12} xs={12}>
              <Box mt={3}>
                <Typography variant="h6" gutterBottom className="title-text">
                  CSE Registration Form
                </Typography>
              </Box>
            </Grid>
            <Grid item xl={4} lg={6} xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name of the CSE"
                name="name"
                autoComplete="name"
                autoFocus
              />
            </Grid>
            <Grid item xl={4} lg={6} xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="email"
                label="CSE Email ID"
                id="email"
              />
            </Grid>

            <Grid item xl={4} lg={6} xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="employeeId"
                label="Employee ID"
                name="employeeId"
              />
            </Grid>
            <Grid item xl={4} lg={6} xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Reporting Manager"
              />
            </Grid>

            <Grid item xl={4} lg={6} xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="pno"
                label="Contact Number"
              />
            </Grid>
            <Grid item xl={4} lg={6} xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="alt_pno"
                label="Alternate Contact Number"
              />
            </Grid>

            <Grid item xl={12} lg={12} xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Postal Address"
                name="Address"
                autoComplete="address"
              />
            </Grid>

            <Grid item xl={12} lg={12} xs={12}>
              <Typography variant="h6" gutterBottom className="title-text">
                Franchisee / Vendor Details
              </Typography>
            </Grid>

            <Grid item xl={4} lg={6} xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="f_name"
                label="Franchisee Name"
              />
            </Grid>
            <Grid item xl={4} lg={6} xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="State"
                id="state"
                label="State"
              />
            </Grid>

            <Grid item xl={4} lg={6} xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="region"
                id="region"
                label="Region"
              />
            </Grid>
          </Grid>
          <Grid item xl={3} lg={3} xs={12}>
            <Box mt={3}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
              >
                Register
              </Button>
            </Box>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default UserRegistrationComponent;
