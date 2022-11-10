import "./preview.css";
import React from "react";
import { Container } from "@mui/system";
import { Link } from "@mui/material";

function Preview(props) {
  return (
    <Container>
      <h1>Score Components</h1>
      <div className="card-container">
        <Link href="profile">
          <div className="card">
            <h4>Profile</h4>
            <div className="iconcontainer profile"></div>
          </div>
        </Link>
        <Link href="employeehistory">
          <div className="card">
            <h4>Employment History</h4>
            <div className="iconcontainer employment"></div>
          </div>
        </Link>
        <Link href="education">
          <div className="card">
            <h4>Education</h4>
            <div className="iconcontainer education"></div>
          </div>
        </Link>
        <Link href="scoring-grid">
          <div className="card">
            <h4>Scoring Grid</h4>
            <div className="iconcontainer grid"></div>
          </div>
        </Link>
        <Link href="benefits">
          <div className="card">
            <h4>Candidate Benefits Demand</h4>
            <div className="iconcontainer benefits"></div>
          </div>
        </Link>
        <Link href="questions">
          <div className="card">
            <h4>Candidate Questions</h4>
            <div className="iconcontainer questions"></div>
          </div>
        </Link>
      </div>
    </Container>
  );
}

export default Preview;
