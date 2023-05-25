import React from "react";
import { Link } from "react-router-dom";

import GamesCard from "../components/GamesCard.js";

const GamesPage = ({ props }) => {
  return (
    <div className="h-100 container mx-auto p-4 bg-gray-950 rounded-lg mt-4 mb-4 px-36">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {props.map((prop) => (
          <GamesCard logo={prop.logo} title={prop.title} id={prop.id} />
        ))}
      </div>
    </div>
  );
};

export default GamesPage;
