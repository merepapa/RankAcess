/*Fetches MMR from Marvel Rivals API
and returns the corresponding rank*/

import axios from "axios";
import { apiConfig } from "../config.js";
import { getRank } from "./rankUtils.js";
import { updateData } from "./updateService.js"; 

export async function fetchPlayerData(UID) {

  const url = `https://marvelrivalsapi.com/api/v1/player/${UID}`
  updateData();
 
  try {
    const response = await axios.request({...apiConfig, url});

    const rankData = JSON.parse(response.data.player.info.rank_game_1001002);

    const points = rankData.rank_game.rank_score;
    const rank = getRank(points);
    if (rank != "Eternity") {
      return `${rank} [${Math.round(points % 100)}RS]`;
    } else {
      return `${rank} [${Math.round(points - 5000)}RS]`;
    }
  } catch (error) {
    console.log("Timed Out");
  }
}
