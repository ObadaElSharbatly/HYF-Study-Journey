import { rest } from "msw";

export const handlers = [
  rest.get("https://dog.ceo/api/breeds/image/random",
  (req, res, ctx) => {
    return res(
      ctx.json({
        message: "https://images.dog.ceo/breeds/cockapoo/george-close-up.jpeg",
        status: "success",
      })
    );
  }),
];
