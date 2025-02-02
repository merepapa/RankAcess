// server.js
import express from "express";
import { PORT } from "./config.js";
import { fetchPlayerData } from "./scripts/apiService.js";
import { processLastFiveGames } from "./scripts/apiService.js";

const app = express();

app.get("/rank/", async (req, res) => {
  try {
    const playerData = await fetchPlayerData();
    res.send(playerData);
  } catch (error) {
    res.status(500).send("Error fetching player data");
  }
});

app.get("/history/", async (req, res) => {
  try {
    const history = await processLastFiveGames();
    res.send(history);
  } catch (error) {
    res.status(500).send("Code 500");
  }
});

app.listen(PORT, () => {
  console.log(`Logged in. Server running on port ${PORT}`);
});
