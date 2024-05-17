import "../homepage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "../consts";
import axios from "axios";

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
        <Link to="/create" className="createCard">
          <div className="plus"></div>
          <p>create</p>
        </Link>
        {charInfo.map((char) => (
          <CharacterCard
            key={char.id}
            characterId={char.id}
            name={char.name}
            imageSrc={char.imageSrc}
            author={char.author}
              role={char.role}
            deleteCard={() => handleDeleteCard(char.id)}
          />
        ))}
        <CharacterCard name={"Example"} role={"Wizard"} author={"author"} />
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
