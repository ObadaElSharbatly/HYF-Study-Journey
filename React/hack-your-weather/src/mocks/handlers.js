import { rest } from "msw";

export const handlers = [
  rest.get("https://api.openweathermap.org/data/2.5/weather", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        coord: {
          lon: 6.9069,
          lat: 52.7792,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
        base: "stations",
        main: {
          temp: 10.23,
          feels_like: 9.68,
          temp_min: 9.34,
          temp_max: 11.65,
          pressure: 1019,
          humidity: 91,
        },
        visibility: 10000,
        wind: {
          speed: 4.02,
          deg: 271,
          gust: 5.81,
        },
        clouds: {
          all: 84,
        },
        dt: 1636380938,
        sys: {
          type: 2,
          id: 2007892,
          country: "NL",
          sunrise: 1636353751,
          sunset: 1636386587,
        },
        timezone: 3600,
        id: 2756136,
        name: "Emmen",
        cod: 200,
      })
    );
  }),
  // not found country
  rest.get("https://api.openweathermap.org/data/2.5/weather", (req, res, ctx) => {
    return res(
      ctx.status(404),
      ctx.json({
        cod: "404",
        message: "city not found",
      })
    );
  }),
];
