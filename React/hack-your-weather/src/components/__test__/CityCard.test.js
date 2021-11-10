import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import CityCard from "../CityCard";

describe("CityCard component", () => {
  it("gives me right details", () => {
    const city = [
      {
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
      },
    ];
    const { getByText, getByTestId, getAllByTestId } = render(
      <CityCard cityWeather={city} />
    );

    // city and country code
    const cityAndCountry = getByText(/zwolle/i);
    expect(cityAndCountry.textContent).toBe("Zwolle, NL");

    // general weather condition
    const conditionHeader = getAllByTestId("condition");
    expect(conditionHeader[0].textContent).toBe("Clouds");
    expect(conditionHeader[1].textContent).toBe("broken clouds");

    // other weather details
    const minTemp = getByTestId("min");
    const maxTemp = getByTestId("max");
    const location = getByTestId("location");
    expect(minTemp.textContent).toBe("min temp : 9.34");
    expect(maxTemp.textContent).toBe("max temp : 11.65");
    expect(location.textContent).toBe("location : 52.7792, 6.9069");
  });

  it("gives me welcome msg if the cityWeather array empty", () => {
    const city = [];
    const { getByText } = render(<CityCard cityWeather={city} />);

    // give me two weather cards
    const welcomeMsg = getByText(/welcome to hack/i);
    expect(welcomeMsg).toBeInTheDocument();
  });

  it("when requesting 2 cities gives me two containers", () => {
    const city = [
      {
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
      },
      {
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
          temp_min: 9.86,
          temp_max: 11.84,
        },
        sys: {
          country: "NL",
        },
        name: "Emmen",
      },
    ];
    const { getAllByTestId } = render(<CityCard cityWeather={city} />);

    // give me two weather cards
    const weatherCards = getAllByTestId("weather_card");
    expect(weatherCards.length).toBe(2);
  });
});
