import logo from "./logo.svg";
import "./App.css";
 <link
   href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
   rel="stylesheet"
   integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
   crossorigin="anonymous"
 />;

function App() {
  return <div className="App"
    
    <div class="container">
      <br />
      <h1 id="city">San Diego</h1>
      <h2>Today</h2>
      <form id="search">
        <div class="row">
          <div class="col-8">
            <input
              type="search"
              placeholder="Search for New City"
              id="search-input"
              class="form-control"
              autocomplete="off"
            />
          </div>
          <div class="col-2">
            <input type="submit" value="Search" id="search-btn" />
          </div>
        
      </form>
      <div class="col-2">
      <button id="current-location">Current Location</button>
      </div>
      </div>
      <div class="today">
        <img src="" alt="Clear" id="icon" />
        <div id="sunny">Sunny</div>
        <div class="temp-today" id="temperature">72</div>
        <span class="units"
          ><a href="#" id="celsius-link">°C</a> /
          <a href="#" id="fahrenheit-link">°F</a></span
        >
        <ul>
          <li>
            <span id="humidity-name">Humidity:</span> <span id="humidity"></span
            ><span id="percentage">%</span>
          </li>
          <li>
            <span id="wind-name">Wind Speed:</span> <span id="wind"></span
            ><span id="m-s">m/s</span>
          </li>
        </ul>
      </div>
      <hr />
      <h3>5 Day Forecast</h3>
      <hr />
      <div>
      <div class="weather-forecast" id="forecast"></div>
      </div>
    <p></p>
    <div>
      <a href="https://github.com/nicolejaffke/Weather-App">
        Open Sourced by Nicole Jaffke
      </a>
    </div>;
}

export default App;
