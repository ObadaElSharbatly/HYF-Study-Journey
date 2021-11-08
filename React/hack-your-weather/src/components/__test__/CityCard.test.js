import { render } from "@testing-library/react";
import Container from "../Container";

describe("Container component", () => {
  it("gives me right details", () => {
    const city = {
      coord: {
        lon: 6.9069,
        lat: 52.7792,
      },
      weather: [
        {
          main: "Clouds",
          description: "broken clouds",
        },
      ],
      main: {
        temp_min: 9.34,
        temp_max: 11.65,
      },
      sys: {
        country: "NL",
      },
      name: "Zwolle",
    };
    const { getByText, getByTestId, getAllByTestId } = render(
      <Container city={city} />
    );

    // city and country code
    const cityAndCountry = getByText(/zwolle/i);
    expect(cityAndCountry.textContent).toBe(
      `${city.name}, ${city.sys.country}`
    );

    // general weather condition
    const conditionHeader = getAllByTestId("condition");
    expect(conditionHeader[0].textContent).toBe("Clouds");
    expect(conditionHeader[1].textContent).toBe("broken clouds");

    // other weather details
    const minTemp = getByTestId("min");
    const maxTemp = getByTestId("max");
    const location = getByTestId("location");
    expect(minTemp.textContent).toBe(`min temp : ${city.main.temp_min}`);
    expect(maxTemp.textContent).toBe(`max temp : ${city.main.temp_max}`);
    expect(location.textContent).toBe(
      `location : ${city.coord.lat}, ${city.coord.lon}`
    );
  });
});
