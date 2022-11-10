import React from "react";
import { Container } from "@mui/system";
import { Box, Button, InputLabel, TextField } from "@mui/material";

function UploadResume(props) {
  const d = new Date();
  function greet() {
    let hour = d.getHours();
    let user = JSON.parse(localStorage.getItem("user"));
    if (hour >= 14 && hour <= 18) {
      return `Good Afternoon, ${user.firstname} ${user.lastname}`;
    } else if (hour > 18 && hour < 7) {
      return `Good Morning, ${user.firstname} ${user.lastname}`;
    } else {
      return `Good Evening, ${user.firstname} ${user.lastname}`;
    }
  }
  return (
    <Container>
      <h2 style={{ marginTop: 40, marginBottom: 0, lineHeight: 0 }}>
        {greet()}
      </h2>
      <p>Welcome to your career toolkit.</p>
      <div
        style={{
          width: "100%",
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          // sx={style}
          component="form"
          // onSubmit={handlesignup}
        >
          <InputLabel>Resumé Upload</InputLabel>
          <TextField
            required
            name="resume"
            // label="Upload Resume"
            type="file"
            id="resume"
          />

          <p>Get expert feedback on your resume, instantly</p>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 2 }}
            style={{ width: "100px" }}
          >
            submit
          </Button>
        </Box>
      </div>
    </Container>
  );
}

export default UploadResume;
