// Turns default values to ranks
// Can be combined into a single file
export function getRank(points) {
    if (typeof points !== "number" || points < 3000) return "Error Occurred";
    if (points > 5000) return "Eternity"
  
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
      ranks.find(([threshold]) => points >= threshold)?.[1]
    );
  }
  