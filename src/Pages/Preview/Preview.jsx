import "./preview.css";
import React from "react";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
// import { Link } from "@mui/material";

function Preview(props) {
  return (
    <Container>
      <h1>Score Components</h1>
      <div className="card-container" style={{minHeight: "50vh"}}>
        <Link to="profile">
          <div className="card">
            <h4>Profile</h4>
            <div className="iconcontainer profile"></div>
          </div>
        </Link>
        <Link to="employeehistory">
          <div className="card">
            <h4>Employment History</h4>
            <div className="iconcontainer employment"></div>
          </div>
        </Link>
        <Link to="education">
          <div className="card">
            <h4>Education</h4>
            <div className="iconcontainer education"></div>
          </div>
        </Link>
        <Link to="scoring-grid">
          <div className="card">
            <h4>Scoring Grid</h4>
            <div className="iconcontainer grid"></div>
          </div>
        </Link>
        <Link to="benefits">
          <div className="card">
            <h4>Candidate Benefits Demand</h4>
            <div className="iconcontainer benefits"></div>
          </div>
        </Link>
        {/* <Link to="questions">
          <div className="card">
            <h4>Candidate Questions</h4>
            <div className="iconcontainer questions"></div>
          </div>
        </Link> */}
      </div>
    </Container>
  );
}

export default Preview;
