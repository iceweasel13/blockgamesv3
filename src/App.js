import "./styles/Home.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Header";
import FaqPage from "./Pages/FaqPage";
import GamesPage from "./Pages/GamesPage";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import logo from "./images/logo.png";
import GamePage from "./Pages/GamePage";

const games = [
  { id: "1", logo: logo, title: "oyun1" },
  { id: "2", logo: logo, title: "oyun2" },
  { id: "3", logo: logo, title: "oyun3" },
  { id: "4", logo: logo, title: "oyun4" },
  { id: "1", logo: logo, title: "oyun1" },
  { id: "2", logo: logo, title: "oyun2" },
  { id: "3", logo: logo, title: "oyun3" },
  { id: "4", logo: logo, title: "oyun4" },
  { id: "1", logo: logo, title: "oyun1" },
  { id: "2", logo: logo, title: "oyun2" },
  { id: "3", logo: logo, title: "oyun3" },
  { id: "4", logo: logo, title: "oyun4" },
];

export default function Home() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/Games" element={<GamesPage />} />
        <Route path="/games/:id" element={<GamePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/More" element={<FaqPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
