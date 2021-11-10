import Forecast from "./Forecast";

function CityCard({ cityWeather }) {
  return (
    <div>
      {cityWeather.length > 0 ? (
        cityWeather.map((city, index) => {
          const { name, sys, weather, main, coord } = city;
          return (
            <div className="city-card" data-testid="weather_card" key={index}>
              <h3>
                {name}, {sys.country}
              </h3>
              <Forecast general={weather[0]} details={main} location={coord} />
            </div>
          );
        })
      ) : (
        <h2 className="welcome-msg">
          Welcome to HackYourWeather <br /> Enter a City Name to know the
          current weather all over the world
        </h2>
      )}
    </div>

  )
}

export default CityCard;
