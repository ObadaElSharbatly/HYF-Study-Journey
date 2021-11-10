import "./App.css";
import CityCard from "./components/CityCard";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [cityWeather, setCityWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const { REACT_APP_OPENWEATHERMAP_API_KEY } = process.env;

  const endPoint = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${searchValue}&appid=${REACT_APP_OPENWEATHERMAP_API_KEY}`;
  const fetchWeatherData = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    try {
      const fetchData = await fetch(endPoint);
      const res = await fetchData.json();
      if (fetchData.status !== 200 || !fetchData.ok) {
        setErrMsg(res.message);
        throw new Error(res.message);
      } else {
        setCityWeather([...cityWeather, res]);
        setErrMsg(null);
      }
    } catch (error) {
      console.log(error.stack);
      setErrMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1> Weather </h1>{" "}
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        search={fetchWeatherData}
        setErrMsg={setErrMsg}
      />{" "}
      {errMsg && <h3 className="err"> {errMsg} </h3>}{" "}
      {isLoading && <h3 className="err"> Loading... </h3>}{" "}
      <CityCard cityWeather={cityWeather} />{" "}
    </div>
  );
}

export default App;
