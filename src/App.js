import "./App.css";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Benefits from "./Pages/Benefits";
import Education from "./Pages/Education";
import Questions from "./Pages/Questions";
import Navbar from "./Components/hocs/Navbar";
import ScoringGrid from "./Pages/ScoringGrid";
import Preview from "./Pages/Preview/Preview";
import UploadResume from "./Pages/UploadResume";
import { Theme } from "./Components/hocs/Theme";
import { ThemeProvider } from "@mui/material/styles";
import EmploymentHistory from "./Pages/EmploymentHistory";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <Navbar>
          <Switch>
            <Route path="/employeehistory" component={EmploymentHistory} />
            <Route path="/scoring-grid" component={ScoringGrid} />
            <Route path="/upload-resume" component={UploadResume} />
            <Route path="/questions" component={Questions} />
            <Route path="/education" component={Education} />
            <Route path="/benefits" component={Benefits} />
            <Route path="/preview" component={Preview} />
            <Route path="/profile" component={Profile} />
            <Route path="/home" component={Home} />
            <Route path="/" component={Home} />
            <Redirect from="*" to="/" />
          </Switch>
        </Navbar>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
