import logo from "./logo.svg";
import "./App.css";
import PhotographyPage from './components/pages/PhotographyPage/photographyPage';
import LandingPage from "./components/pages/LandingPage/LandingPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' component={LandingPage}></Route>
          <Route exact path='/photography' component={PhotographyPage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
