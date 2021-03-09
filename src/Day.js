import React from "react";
import "./Day.css";
import { Link } from "react-router-dom";

import weatherData from "./Data/WeatherData.js";
const Day = (props) => {
  return (
    <div class="Day">
      <Link to={`/Details/${props.id}`}>
        <h1>{props.title}</h1>
        <p>
          {props.temp} {weatherData.tempUnit}
        </p>
      </Link>
    </div>
  );
};

export default Day;
