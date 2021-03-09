import "./App.css";
import WeatherData from "./Data/WeatherData.js";
import Day from "./Day";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Widget from "./Widget";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App1">
          {WeatherData.days.map((element) => {
            return (
              <Day id={element.id} title={element.day} temp={element.temp} />
            );
          })}
        </div>
        <Switch>
          <Route path="/Details/:id" component={Widget}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
