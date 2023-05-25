import React from "react";
import bodyImage from "../images/body.jpg";

function HomePage() {
  return (
    <div
      className="main h-100"
      style={{
        backgroundImage: `url(${bodyImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="content " style={{ marginTop: "-600px" }}>
        <h1 className="title text-6xl font-extrabold">
          Blockchain Based Play 2 Earn Gaming
        </h1>
      </div>
    </div>
  );
}

export default HomePage;
