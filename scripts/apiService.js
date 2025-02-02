import axios from "axios";
import { apiConfig } from "../config.js";
import { getRank } from "./rankUtils.js";

//Fetching data to be processed
const response = await axios.request(apiConfig);

// For fetching rank
export async function fetchPlayerData() {
  try {
    const rankData = JSON.parse(response.data.player.info.rank_game_1001002);
    const points = rankData.rank_game.rank_score;
    const rank = getRank(points);
    return `${rank}[${Math.round(points % 100)}RS]`;
  } catch (error) {
    console.log("Error fetching player data:");
  }
}

// For last five games results
export async function processLastFiveGames() {
  const lastFiveGames = response.data.match_history.slice(0, 5);

  const results = lastFiveGames.map((item) => {
    const isWin = item.player_performance?.is_win;
    if (isWin === 1) return "W";
    if (isWin === 0) return "L";
    return "N/A"; // For any unexpected cases
  });
  return results.join(",");
}
