// server.js
import express from "express";
import { PORT } from "./config.js";
import { fetchPlayerData } from "./scripts/rankService.js";
import { processLastFiveGames } from "./scripts/historyService.js";

const app = express();

app.get("/rank/:uid", async (req, res) => {
  try {
    const playerData = await fetchPlayerData(req.params.uid);
    res.send(playerData);
  } catch (error) {
    res.status(500).send("Error fetching player data");
  }
});

app.get("/history/:uid", async (req, res) => {
  try {
    const history = await processLastFiveGames(req.params.uid);
    res.send(`Last 5 Games: ${history}`);
  } catch (error) {
    res.status(500).send("Code 500");
  }
});

app.listen(PORT, () => {
  console.log(`Logged in. Server running on port ${PORT}`);
});
