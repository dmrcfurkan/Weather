import "./App.css";
import { cities, getCityTemp } from "./city.js";
import weatherimg from "./weather.jpg";
import { Sidebar } from "./Sidebar.jsx";
import { Weatherinfo } from "./Weatherinfo.jsx";
import { useEffect, useState } from "react";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [cityName, setCityName] = useState("");

  const handleCity = async (city) => {
    console.log(cityName, city.name);
    if (city.name !== cityName) {
      const data = await getCityTemp(city);
      setSelectedCity(data);
      setCityName(city.name);
    }
  };

  useEffect(() => {
    console.log("render");
    handleCity(cities[0]);
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${weatherimg})`, // TODO: do it in css
      }}
    >
      <Sidebar handleCity={handleCity} />
      {selectedCity && <Weatherinfo city={selectedCity} name={cityName} />}
    </div>
  );
}

export default App;
