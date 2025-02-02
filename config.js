// config.js
export const PORT = process.env.PORT || 3000;
export const API_KEY = process.env.API_KEY;

export const apiConfig = {
  method: "get",
  url: "https://marvelrivalsapi.com/api/v1/stats",
  params: { uid: "1138906818" },
  headers: {
    "x-api-key": API_KEY,
  },
};
