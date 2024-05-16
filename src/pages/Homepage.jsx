import "../homepage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "../consts";
import axios from "axios";
import imgEx from "../assets/Projet2img.jpg";

function Homepage() {
  const [charInfo, setCharInfo] = useState([]);
  useEffect(() => {
    async function getCharInfo() {
      const response = await axios.get(`${API_BASE_URL}/characters`);
      setCharInfo(response.data);
    }
    getCharInfo();
  }, []);
  function handleDeleteCard(id) {
    setCharInfo(charInfo.filter((char) => char.id !== id));
  }
  return (
    <>
      <Header />
      <Sidebar />
      <div className="holdCard">
        <Link to="/create" className="homeCard">
          Create
        </Link>
        {charInfo.map((char) => (
          <Link to={`/details/${char.id}`} key={char.id} className="homeCard">
            <CharacterCard
              key={char.id}
              id={char.id}
              name={char.name}
              imageSrc={char.imageSrc}
              author={char.author}
              deleteCard={() => handleDeleteCard(char.id)}
            />
          </Link>
        ))}
        <CharacterCard name={"name"} imageSrc={imgEx} author={"author"} />
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
