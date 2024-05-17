import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Link className="footerLink" to="/Legal-notice">
        Legal notice
      </Link>
    </footer>
  );
}

export default Footer;
