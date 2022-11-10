import * as React from "react";
import desktop from "../Assets/desktop.png";
import { Button, Link } from "@mui/material";
import Container from "@mui/material/Container";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Home = () => {
  React.useEffect(() => {}, [localStorage]);
  return (
    <Container style={{ marginTop: "40px" }}>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ width: "50%", textAlign: "center" }}>
          <h1
            style={{
              marginBottom: 0,
              color: "#1042b2",
              fontSize: "70px",
              lineHeight: "70px",
            }}
          >
            Ultimate
          </h1>
          <h2
            style={{
              margin: 0,
              color: "#2ad38e",
              fontSize: "35px",
              lineHeight: "35px",
            }}
          >
            Career Scoring!
          </h2>
          <h3 style={{ color: "#1042b2" }}>
            Get expert feedback on your resume, instantly
          </h3>
          <p style={{ color: "#1042b2" }}>
            Our free AI-powered resume checker scores your resume on key
            criteria recruiters and hiring managers look for. Get actionable
            steps to revamp your resume and land more interviews.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {localStorage.getItem("token") && (
              <>
                <Link href="upload-resume" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      color: "white",
                      width: "200px",
                      marginTop: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    Upload Resume <ArrowForwardIosIcon />
                  </Button>
                </Link>
                <Link href="preview" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{
                      color: "white",
                      width: "150px",
                      marginBottom: "20px",
                    }}
                  >
                    See Preview
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <img src={desktop} alt="Desktop" style={{ width: "100%" }} />
        </div>
      </div>
    </Container>
  );
};

export default Home;
