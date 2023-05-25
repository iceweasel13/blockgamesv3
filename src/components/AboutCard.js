import React from "react";

const AboutCard = ({ pfp, names, role }) => {
  return (
    <div className="flex flex-col items-center bg-black p-4 rounded-xl">
      <img src={pfp} alt={names} className="rounded-full w-40 h-40 mb-4" />
      <h2 className="text-xl font-bold">{names}</h2>
      <p className="text-lg">{role}</p>
    </div>
  );
};

export default AboutCard;
