import logoQuest from "../assets/logo_white.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoQuest} alt="logo Quest"></img>
      </Link>
    </div>
  );
}

export default Header;
