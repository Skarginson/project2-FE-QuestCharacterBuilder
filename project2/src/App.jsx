import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Create from "./pages/Create";
import Details from "./pages/Details";
import Rules from "./pages/Rules";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Rules" element={<Rules />} />
        <Route path="/Details" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
