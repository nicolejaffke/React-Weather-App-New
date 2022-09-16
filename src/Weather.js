import React from "react";
import "./index.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <br />
        <h1 id="city">San Diego</h1>
        <h2>Today</h2>
        <form id="search">
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeHolder="Search for New City"
                id="search-input"
                class="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-2">
              <input type="submit" value="Search" id="search-btn" />
            </div>
          </div>
        </form>
        <div className="col-2">
          <button id="current-location">Current Location</button>
        </div>
      </div>
      <div className="today">
        <img src="" alt="Clear" id="icon" />
        <div id="sunny">Sunny</div>
        <div className="temp-today" id="temperature">
          72
        </div>
        <span className="units">
          <a href="#" id="celsius-link">
            °C
          </a>{" "}
          /
          <a href="#" id="fahrenheit-link">
            °F
          </a>
        </span>
        <ul>
          <li>
            <span id="humidity-name">Humidity:</span>{" "}
            <span id="humidity"></span>
            <span id="percentage">%</span>
          </li>
          <li>
            <span id="wind-name">Wind Speed:</span> <span id="wind"></span>
            <span id="m-s">m/s</span>
          </li>
        </ul>
      </div>
      <hr />
      <h3>5 Day Forecast</h3>
      <hr />
      <div>
        <div className="weather-forecast" id="forecast"></div>
      </div>
      <p></p>
      <div>
        <a href="https://github.com/nicolejaffke/Weather-App">
          Open Sourced by Nicole Jaffke
        </a>
      </div>
      ;
    </div>
  );
}
