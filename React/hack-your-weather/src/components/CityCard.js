import Forecast from "./Forecast";

function CityCard({ city }) {
  const { name, sys, weather, main, coord } = city;

  return (
    <div className="city-card">
      <div>
        <h3>
          {name}, {sys.country}
        </h3>
      </div>
      <Forecast general={weather[0]} details={main} location={coord} />
    </div>
  );
}

export default CityCard;
