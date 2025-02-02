require("dotenv").config(); // Load environment variables

const express = require("express");
const app = express();
const port = 3000;
const axios = require("axios");

const API_KEY = process.env.API_KEY;

const config = {
  method: "get",
  url: "https://marvelrivalsapi.com/api/v1/stats",
  params: { uid: "1138906818" },
  headers: {
    "x-api-key": API_KEY,
  },
};

function getRank(points) {
  if (typeof points !== "number" || points < 3000) return "Error Occured";

  const ranks = [
    [5000, "Celestial 1"],
    [4900, "Celestial 2"],
    [4800, "Celestial 3"],
    [4700, "Grandmaster 1"],
    [4600, "Grandmaster 2"],
    [4500, "Grandmaster 3"],
    [4400, "Diamond 1"],
    [4300, "Diamond 2"],
    [4200, "Diamond 3"],
    [4100, "Platinum 1"],
    [4000, "Platinum 2"],
    [3900, "Platinum 3"],
    [3800, "Gold 1"],
    [3700, "Gold 2"],
    [3600, "Gold 3"],
    [3500, "Silver 1"],
    [3400, "Silver 2"],
    [3300, "Silver 3"],
    [3200, "Bronze 1"],
    [3100, "Bronze 2"],
    [3000, "Bronze 3"],
  ];

  return (
    ranks.find(([threshold]) => points >= threshold)?.[1] || "Unknown Rank"
  );
}

app.get("/", async (req, res) => {
  try {
    const response = await axios.request(config);
    const rankData = JSON.parse(response.data.player.info.rank_game_1001002);
    const points = rankData.rank_game.rank_score;
    const rank = getRank(points);
    console.log("Exec happened");
    res.send(`${rank} - ${Math.round(points % 100)} RS`);
  } catch (error) {
    console.error("Error fetching player data:", error.message);
  }
});

app.listen(port, () => {
  console.log(`Logged in.`);
});
