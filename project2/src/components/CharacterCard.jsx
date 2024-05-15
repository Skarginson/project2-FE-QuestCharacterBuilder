import "../homepage.css";

function CharacterCard({ author, name, imageSrc }) {
  return (
    <div className="homeCard">
      <h1>{name}</h1>
      <img src={imageSrc} alt="" />
      <i>By {author}</i>
    </div>
  );
}

export default CharacterCard;
