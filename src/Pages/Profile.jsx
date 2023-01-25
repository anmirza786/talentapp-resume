import {
  Box,
  Button,
  Container,
  Grid,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <Container>
        <h1>Profile</h1>
        <Box
          // sx={style}
          component="form"
          // onSubmit={handlesignup}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            style={{ alignItems: "center" }}
          >
            <Grid item xs={6} md={8}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item md={5}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="email"
                    label="Email"
                    type="email"
                    id="email"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item md={3}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="mobile"
                    label="Mobile Number"
                    type="text"
                    id="mobile"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item md={3}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="zip"
                    label="Zip Code"
                    type="text"
                    id="zip"
                    autoComplete="current-password"
                  />
                </Grid>
              </Grid>
              <InputLabel>Address</InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                name="line1"
                label="Address 1"
                type="text"
                id="line1"
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                fullWidth
                name="line2"
                label="Address 2 (Optional)"
                type="text"
                id="line2"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={4}>
              <textarea
                name="summery"
                id="summery"
                cols="40"
                rows="21"
                placeholder="Resume Summery"
              ></textarea>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            style={{ width: "100px" }}
          >
            submit
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Profile;
