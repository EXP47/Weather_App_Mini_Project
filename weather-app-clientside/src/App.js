import logo from './logo.svg';
import './App.css';


const api = {
  key: "fa9f5178ee72ca1e2a6a88cd6fa19436",
  base: "https://api.openweathermap.org/data/2.5/",
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER */}
        <h1>Weather App</h1>
      {/* Search Box */}
      <div className="search-box">
        <input type="text" className="search-bar" placeholder="Search..." />
      </div>

      {/* Location */}
      <div className="location-box">
        <div className="location">New York City, US</div>
        <div className="date">Sunday 7th March 2021</div>
      </div>

      {/* Weather Box */}
      <div className="weather-box">
        <div className="temp">15°C</div>
        <div className="weather">Sunny</div>
      </div>

      </header>
    </div>
  );
}

export default App;
