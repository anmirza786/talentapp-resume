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
import EmploymentTable from "../Components/EmploymentTable";

const EmploymentHistory = () => {
  const [company, setCompany] = React.useState("");
  const [business, setBusiness] = React.useState("");
  const [startdate, setStartdate] = React.useState("");
  const [enddate, setEnddate] = React.useState("");
  const [row, setRow] = React.useState([]);
  function onAdd() {
    let r = row;
    setRow([
      ...r,
      {
        company: company,
        business: business,
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
        <h1>Employment History</h1>
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
                name="company"
                label="Company Name/Location"
                type="company"
                id="company"
                onChange={(e) => setCompany(e.target.value)}
              />
            </Grid>
            <Grid item md={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="type"
                label="Types of Business"
                type="text"
                id="type"
                onChange={(e) => setBusiness(e.target.value)}
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
        <p>Employment History List</p>
        <EmploymentTable row={row} remove={remove} />
      </Container>
    </>
  );
};

export default EmploymentHistory;
