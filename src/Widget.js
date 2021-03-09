import React from "react";
import "./Widget.css";
import WeatherData from "./Data/WeatherData.js";

const Widget = (props) => {
  let currentEl = WeatherData.days.find(
    (el) => el.id === parseInt(props.match.params.id)
  );
  console.log(props.match.params);

  return (
    <div className="Widget">
      <h1>{currentEl.day}</h1>
      <h2>
        Temperature: {currentEl.temp}
        {WeatherData.tempUnit}
      </h2>
      <h3>WindDirection: {currentEl.windDirection}</h3>
      <h3>
        WindSpeed:
        {currentEl.windSpeed}
        {WeatherData.windSpeedUnit}
        {currentEl.windDirection === "north-east" ? (
          <span>&#8599;</span>
        ) : currentEl.windDirection === "south-east" ? (
          <span>&#8600;</span>
        ) : currentEl.windDirection === "south-east" ? (
          <span>&#8600;</span>
        ) : currentEl.windDirection === "north-east" ? (
          <span>&#8601;</span>
        ) : currentEl.windDirection === "north-east" ? (
          <span>&#8599;</span>
        ) : currentEl.windDirection === "north-east" ? (
          <span>&#8599;</span>
        ) : currentEl.windDirection === "north-east" ? (
          <span>&#8599;</span>
        ) : null}
      </h3>
      <h3>Type: {currentEl.type}</h3>
    </div>
  );
};

export default Widget;
