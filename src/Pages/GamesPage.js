import React, { useEffect, useState } from "react";
import axios from "axios";
import GamesCard from "../components/GamesCard.js";

const GamesPage = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/games");
        setGames(response.data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="h-screen container mx-auto p-4 bg-gray-950 rounded-lg mt-4 mb-4 px-36">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {games.map((game) => (
          <GamesCard
            key={game.id}
            logo={game.logo}
            title={game.title}
            id={game.id}
          />
        ))}
      </div>
    </div>
  );
};

export default GamesPage;
