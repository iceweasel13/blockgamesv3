// GamesCard.js
import React from "react";
import { Link } from "react-router-dom";

const GamesCard = ({ logo, title, id }) => {
  return (
    <div className="flex flex-col h-76 w-full max-w-xs mx-2 my-2 items-center p-4 text-center bg-gray-900 rounded-lg shadow-md">
      <img src={logo} alt={title} className="w-48 h-48 mb-4 rounded-full" />
      <h3 className="font-bold text-xl text-white">{title}</h3>
      <Link to={`/games/${id}`}>
        <button className="bg-yellow-300 rounded-xl text-black font-semibold px-2 py-2 mt-1">
          Play Now!
        </button>
      </Link>
    </div>
  );
};

export default GamesCard;
