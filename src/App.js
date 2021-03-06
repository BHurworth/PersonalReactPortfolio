import logo from "./logo.svg";
import "./App.css";
import PhotographyPage from "./components/pages/PhotographyPage/PhotographyPage";
import LandingPage from "./components/pages/LandingPage/LandingPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactMePageTemp from "./components/pages/ContactMePageTemp/ContactMePageTemp";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/photography"
            render={(props) => <PhotographyPage {...props} />}
          ></Route>
          <Route exact path="/contact-me" component={ContactMePageTemp}></Route>
          <Route path="/" component={LandingPage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
