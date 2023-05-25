import AboutCard from "../components/AboutCard";
function AboutPage({ props }) {
  return (
    <div className="h-screen container mx-auto p-4 bg-gray-800 rounded-lg mt-4 mb-4 px-36 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {props.map((prop) => (
          <AboutCard pfp={prop.pfp} names={prop.names} role={prop.role} />
        ))}
      </div>
    </div>
  );
}

export default AboutPage;
