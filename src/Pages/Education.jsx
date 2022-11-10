import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Add } from "@mui/icons-material";
import EducationTable from "../Components/EducationTable";

const Education = () => {
  const [school, setSchool] = React.useState("");
  const [degree, setDegree] = React.useState("");
  const [startdate, setStartdate] = React.useState("");
  const [enddate, setEnddate] = React.useState("");
  const [row, setRow] = React.useState([]);
  function onAdd() {
    let r = row;
    setRow([
      ...r,
      {
        school: school,
        degree: degree,
        startdate: startdate,
        enddate: enddate,
      },
    ]);
    // console.log(row);
  }
  function remove(obj) {
    // console.log(obj);
    let a = row.filter((i) => i !== obj);
    // console.log(a)
    setRow(a);
  }
  return (
    <>
      <Container>
        <h1>Education</h1>
        <Box
          // sx={style}
          component="form"
          // onSubmit={handlesignup}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item md={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="instetute"
                label="School / College / University"
                type="instetute"
                id="instetute"
                onChange={(e) => setSchool(e.target.value)}
              />
            </Grid>
            <Grid item md={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="degree"
                label="Degree"
                type="text"
                id="degree"
                onChange={(e) => setDegree(e.target.value)}
              />
            </Grid>
            <Grid item md={2}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="start"
                label="Start Date"
                type="date"
                id="start"
                InputLabelProps={{
                  shrink: true,
                }}
                autoComplete="startdate"
                onChange={(e) => setStartdate(e.target.value)}
              />
            </Grid>
            <Grid item md={2}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="end"
                InputLabelProps={{
                  shrink: true,
                }}
                label="End Date"
                type="date"
                id="end"
                autoComplete="enddate"
                onChange={(e) => setEnddate(e.target.value)}
              />
            </Grid>
            <Grid
              item
              md={2}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton onClick={onAdd}>
                <Add /> <p style={{ fontSize: "15px" }}>Add</p>
              </IconButton>
            </Grid>
          </Grid>

          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            style={{ width: "100px" }}
          >
            submit
          </Button> */}
        </Box>
        <p>Education List</p>
        <EducationTable row={row} remove={remove} />
      </Container>
    </>
  );
};

export default Education;
