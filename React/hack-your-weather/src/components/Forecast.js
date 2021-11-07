function Forecast ({general, details, location}) {
    
    const cityLocation = `${location.lon},${location.lat}`;

    return (
        <div>
            <div className="general-forecast">
                <h4><strong>{general.main}</strong></h4>
                <h6 style={{"fontWeight": "lighter"}}>{general.description}</h6>
            </div>
            <div className="forecast-details">
                <ul>
                    <li><h6>min temp : {details.temp_min} </h6></li>
                    <li><h6>max temp : {details.temp_max} </h6></li>
                    <li><h6>location : {cityLocation} </h6></li>
                </ul>
            </div>
        </div>
    )
}

export default Forecast;