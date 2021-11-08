function Forecast ({general, details, location}) {
    
    const cityLocation = `${location.lat}, ${location.lon}`;

    return (
        <div>
            <div className="general-forecast">
                <h4 data-testid="condition"><strong>{general.main}</strong></h4>
                <h6 style={{"fontWeight": "lighter"}} data-testid="condition">{general.description}</h6>
            </div>
            <div className="forecast-details">
                <ul>
                    <li><h6 data-testid="min">min temp : {details.temp_min}</h6></li>
                    <li><h6 data-testid="max">max temp : {details.temp_max}</h6></li>
                    <li><h6 data-testid="location">location : {cityLocation}</h6></li>
                </ul>
            </div>
        </div>
    )
}

export default Forecast;