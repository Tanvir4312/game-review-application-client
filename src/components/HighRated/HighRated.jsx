import { useEffect, useState } from "react";
import GameCard from "../GameCard/GameCard";

const HighRated = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) =>
        setGames(data.sort((a, b) => b.rating - a.rating).slice(0, 6))
      );
  }, []);

  return (
    <div className="w-[280px] md:w-2xl lg:w-4xl mx-auto my-16">
      <h2 className="text-center text-4xl font-bold">
        <span className="text-[#00D283]">Top</span> Picks for Gamers
      </h2>
      <div className="mt-5 opacity-20">
        <hr />
      </div>
      {
        games.length === 0 && <h3 className="text-3xl font-bold text-center mt-14 text-red-500">Data Not Found</h3>
     }
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9 mt-10">
        {games.map((game) => (
          <GameCard key={game._id} game={game}></GameCard>
        ))}
      </div>
    </div>
  );
};

export default HighRated;
