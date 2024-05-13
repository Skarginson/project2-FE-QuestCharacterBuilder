import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

function Homepage({ baseData, setBaseData }) {
  return (
    <>
      <Header />
      <Sidebar />
      <Link to="/Create"></Link>
      <Footer />
    </>
  );
}

export default Homepage;
