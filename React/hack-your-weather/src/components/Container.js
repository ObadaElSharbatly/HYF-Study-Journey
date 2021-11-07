import CityName from "./City";
import Forecast from "./Forecast";

function Container ({city}) {

    return (
        <div className="card-con">
            <CityName cityName={city.name} cityCode={city.sys.country} />
            <Forecast general={city.weather[0]} details={city.main} location={city.coord} />
        </div>
    )
}

export default Container;