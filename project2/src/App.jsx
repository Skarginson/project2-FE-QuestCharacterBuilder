import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Create from "./pages/Create";
import Details from "./pages/Details";
import Rules from "./pages/Rules";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Rules" element={<Rules />} />
        <Route path="/Details" element={<Details />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
