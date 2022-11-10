import React from "react";
import { Link } from "react-router-dom";
import {
  Autocomplete,
  Box,
  Button,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import BasicTable from "../Components/BasicTable";

const category = ["Health", "Vacations", "Seniority", "Extra Earning"];
const benefit = [
  "Medical Insurance",
  "HSA",
  "Leave 1 Week",
  "Leave 2 Weeks",
  "Leave 3 Weeks",
  "Leave 4 Weeks",
  "Seniority - Expert",
  "Seniority - Mid Level",
  "Extra Earning - Stocks",
  "Extra Earning - Profit Sharing",
];

const Benefits = () => {
  const [row, setRow] = React.useState([]);
  const [benefits, setBenefit] = React.useState("");
  const [categories, setCategory] = React.useState("");
  function onAdd() {
    let r = row;
    setRow([...r, { benefit: benefits, category: categories }]);
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
        <h1>Employment Benefits</h1>
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
              <Autocomplete
                label="Category"
                autofocus
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ width: "90%", margin: "0 10px" }}
                options={category}
                getOptionLabel={(option) => option}
                id="category"
                name="category"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Choose a Category"
                    inputProps={{
                      ...params.inputProps,
                      // autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                    onChange={(e) => setCategory(e.target.value)}
                    onSelect={(e) => setCategory(e.target.value)}
                  />
                )}
              />
            </Grid>
            <Grid item md={3}>
              <Autocomplete
                label="Benefit"
                autofocus
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ width: "90%", margin: "0 10px" }}
                options={benefit}
                getOptionLabel={(option) => option}
                id="benefit"
                name="benefit"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Choose a Benefit"
                    inputProps={{
                      ...params.inputProps,
                      // autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                    onChange={(e) => setBenefit(e.target.value)}
                    onSelect={(e) => setBenefit(e.target.value)}
                  />
                )}
              />
            </Grid>
            <Grid item md={2}>
              <Button
                // type="submit"
                onClick={onAdd}
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2 }}
                style={{ width: "100px" }}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </Box>
        <h2>Benefits List</h2>
        <BasicTable row={row} removeBenefit={remove} />
      </Container>
    </>
  );
};

export default Benefits;
