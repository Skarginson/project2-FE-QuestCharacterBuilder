import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

function CharacterDetails({ baseData, setBaseData, newForm }) {
  return (
    <>
      <Header />
      <Sidebar />

      <Footer />
    </>
  );
}

export default CharacterDetails;
