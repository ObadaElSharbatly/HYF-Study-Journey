import { fireEvent, render } from "@testing-library/react";
import App from "./App";
import { handlers } from "./mocks/handlers";
import { server } from "./mocks/server";

describe("App component", () => {
  it("there are a welcome message and header when rendering app", () => {
    const { getByText, getByRole } = render(<App />);
    const welcomeMsg = getByText(/welcome to hackyourweather/i);
    expect(welcomeMsg).toBeInTheDocument();

    const header = getByRole("heading", { name: "Weather" });
    expect(header).toBeInTheDocument();
  });

  describe("testing API requests", () => {
    beforeAll(() => {
      // Establish requests interception layer before all tests.
      server.listen();
    });
    afterEach(() => {
      server.resetHandlers();
    });
    afterAll(() => {
      // Clean up after all tests are done, preventing this
      // interception layer from affecting irrelevant tests.
      server.close();
    });

    describe("doing right requests", () => {
      beforeAll(() => {
        server.use(handlers[0]);
      });

      it("loading text while fetching data", async () => {
        const { getByRole, findByText } = render(<App />);
        const searchButton = getByRole("button", { name: /search/i });
        fireEvent.submit(searchButton);
        const loading = await findByText(/loading/i);
        expect(loading).toBeInTheDocument();
      });

      it("No Loading text when getting info", async () => {
        const { getByRole, findByText, findByTestId } = render(<App />);
        const searchButton = getByRole("button", { name: /search/i });
        fireEvent.submit(searchButton);
        const loading = await findByText(/loading/i);
        expect(loading).toBeInTheDocument();

        const weatherInfo = await findByTestId("min");
        expect(weatherInfo).toBeInTheDocument();
        expect(loading).not.toBeInTheDocument();
      });
    });

    describe("do with error", () => {
      it("it's loading before getting error", async () => {
        server.use(handlers[1]);
        const { getByRole, findByText } = render(<App />);
        const searchButton = getByRole("button", { name: /search/i });
        expect(searchButton).toBeInTheDocument();
        fireEvent.submit(searchButton);
        const loading = await findByText(/loading/i);
        expect(loading).toBeInTheDocument();
      });

      it("Get error When writing invalid city name", async () => {
        server.use(handlers[1]);
        const { getByRole, findByText } = render(<App />);
        const searchButton = getByRole("button", { name: /search/i });
        expect(searchButton).toBeInTheDocument();
        fireEvent.submit(searchButton);
        const err = await findByText("city not found");
        expect(err).toBeInTheDocument();
      });

      it("loading is disappeared after getting error", async () => {
        server.use(handlers[1]);
        const { getByRole, findByText } = render(<App />);
        const searchButton = getByRole("button", { name: /search/i });
        expect(searchButton).toBeInTheDocument();
        fireEvent.submit(searchButton);

        const loading = await findByText(/loading/i);
        expect(loading).toBeInTheDocument();

        const err = await findByText("city not found");
        expect(err).toBeInTheDocument();

        expect(loading).not.toBeInTheDocument();
      });
    });
  });
});
