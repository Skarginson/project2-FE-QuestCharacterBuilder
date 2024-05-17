import "../homepage.css";
import { API_BASE_URL } from "../consts";
import axios from "axios";

function CharacterCard({ author, name, id, deleteCard, role }) {
  const handleDelete = async () => {
    await axios.delete(`${API_BASE_URL}/characters/${id}`);
  };
  return (
    <div className="homeCard">
      <h1>{name}</h1>
      <img src={`${API_BASE_URL}/image/${role}.jpg`} alt={role} />
      <i>By {author}</i>
      <button
        onClick={() => {
          handleDelete();
          deleteCard();
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default CharacterCard;
