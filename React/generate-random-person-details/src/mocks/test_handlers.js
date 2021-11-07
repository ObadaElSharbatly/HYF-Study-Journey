import { rest } from "msw";

export const handlers = [
  rest.get("https://www.randomuser.me/api", (req, res, ctx) => {
    return res(
      ctx.json({
        results: [
          {
            gender: "male",
            name: {
              title: "Mr",
              first: "Adam",
              last: "Smith",
            },
            location: {
              street: {
                number: 1708,
                name: "Fitzherbert Avenue",
              },
              city: "Rotorua",
              state: "Marlborough",
              country: "New Zealand",
              postcode: 78309,
              coordinates: {
                latitude: "65.2543",
                longitude: "-134.3130",
              },
              timezone: {
                offset: "-9:00",
                description: "Alaska",
              },
            },
            email: "adam.smith@example.com",
            login: {
              uuid: "0a124a6c-c783-451b-af99-64be02829979",
              username: "organicmeercat446",
              password: "violin",
              salt: "WDHpwgSO",
              md5: "6e69255957898e1088b5d93890ca892c",
              sha1: "52db86d67f738a7dd56f3629ff7943feda2808d9",
              sha256:
                "0d4c8af478f4962fbd7e9d2af744ff95549b662fcc30eade4a4bb390900ab1af",
            },
            dob: {
              date: "1960-07-29T21:36:35.479Z",
              age: 61,
            },
            registered: {
              date: "2015-04-07T20:31:55.689Z",
              age: 6,
            },
            phone: "(015)-155-4547",
            cell: "(455)-023-5869",
            id: {
              name: "",
              value: null,
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/90.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/90.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/90.jpg",
            },
            nat: "NZ",
          },
        ],
        info: {
          seed: "bfe99575cd45fc68",
          results: 1,
          page: 1,
          version: "1.3",
        },
      })
    );
  }),
  rest.get(
    "https://www.randomuser.me/api", (req, res, ctx) => {
      return res(ctx.json({error: "please shutdown your pc right now"}))
    }
  )
]


