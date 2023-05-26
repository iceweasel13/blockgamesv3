import React, { useEffect, useState } from "react";
import axios from "axios";
import AboutCard from "../components/AboutCard";

function AboutPage() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const res = await axios.get("http://localhost:5000/api/about");
      setProfiles(res.data);
    };
    fetchProfiles();
  }, []);

  return (
    <div className="h-screen container mx-auto p-4 bg-gray-800 rounded-lg mt-4 mb-4 px-36 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {profiles.map((profile) => (
          <AboutCard
            key={profile._id}
            pfp={profile.pfp}
            names={profile.names}
            role={profile.role}
          />
        ))}
      </div>
    </div>
  );
}

export default AboutPage;
