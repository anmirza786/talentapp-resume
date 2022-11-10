import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import Link from "@mui/material/Link";
import Logo from "../../Assets/logo.png";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { Redirect } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { Link, Modal, TextField } from "@mui/material";
// import { Link } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        InsightHR
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// const footers = [
//   {
//     title: "Company",
//     description: ["Team", "History", "Contact us", "Locations"],
//   },
//   {
//     title: "Features",
//     description: [
//       "Cool stuff",
//       "Random feature",
//       "Team feature",
//       "Developer stuff",
//       "Another one",
//     ],
//   },
//   {
//     title: "Resources",
//     description: [
//       "Resource",
//       "Resource name",
//       "Another resource",
//       "Final resource",
//     ],
//   },
//   {
//     title: "Legal",
//     description: ["Privacy policy", "Terms of use"],
//   },
// ];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Navbar = (props) => {
  const [open, setOpen] = React.useState(false);
  const [openSignup, setOpenSignup] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenSignup = () => setOpenSignup(true);
  const handleCloseSignup = () => setOpenSignup(false);
  const handlelogin = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (
      data.get("email") === "jack@test.com" &&
      data.get("password") === "12345678"
    ) {
      // alert("hogya")
      localStorage.setItem("token", "abcdefghijklmnopqrstuvwxyz1234567890");
      const user = JSON.stringify({
        firstname: "Jack",
        lastname: "Huston",
        email: "jack@test.com",
      });
      localStorage.setItem("user", user);
      setOpen(false);
    } else {
      localStorage.removeItem("token");
    }
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
  };
  const handlesignup = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      password2: data.get("password2"),
    });
  };
  const gotosignup = () => {
    setOpen(false);
    setOpenSignup(true);
  };
  const gotoLogin = () => {
    setOpen(true);
    setOpenSignup(false);
  };
  const handleLogout = () => {
    setOpen(true);
    // eslint-disable-next-line no-restricted-globals
    // setOpenSignup(false);
    localStorage.removeItem("token");
    
  };
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography noWrap sx={{ flexGrow: 1 }}>
            <Link href="/">
              <img
                src={Logo}
                alt="InsightHR"
                style={{ padding: "10px", paddingTop: "15px", width: "150px" }}
              />
            </Link>
          </Typography>
          <nav>
            {/* <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Enterprise
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link> */}
          </nav>
          {localStorage.getItem("token") ? (
            <Button
              onClick={handleLogout}
              style={{ color: "white" }}
              variant="contained"
              color="secondary"
            >
              Logout
            </Button>
          ) : (
            <>
              <div>
                <Button onClick={handleOpenSignup}>Signup</Button>
                <Modal
                  open={openSignup}
                  onClose={handleCloseSignup}
                  aria-labelledby="modal-modal-title"
                  s
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style} component="form" onSubmit={handlesignup}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password2"
                      label="Password Confirm"
                      type="password2"
                      id="password2"
                      autoComplete="current-password"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      style={{ color: "white" }}
                    >
                      Sign Up
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2" onClick={gotoLogin}>
                          Have an Account? Login
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Modal>
              </div>
              <div>
                <Button onClick={handleOpen}>Login</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style} component="form" onSubmit={handlelogin}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      style={{ color: "white" }}
                    >
                      Login
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2">
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href="#" variant="body2" onClick={gotosignup}>
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Modal>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      {props.children}
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          //   mt: 8,
          py: [3, 6],
        }}
      >
        {/* <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid> */}
        <Copyright
        // sx={{ mt: 5 }}
        />
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
};

export default Navbar;
