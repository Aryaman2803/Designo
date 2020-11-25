import "./App.scss";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import WebDesign from "./WebDesign";
import AppDesign from "./AppDesign";
import GraphicDesign from "./GraphicDesign";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/web-design" render={() => <WebDesign />} />
        <Route exact path="/app-design" render={() => <AppDesign />} />
        <Route exact path="/graphic-design" render={() => <GraphicDesign />} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
