import "./App.css";
import { Routes, Route } from "react-router-dom";
// import About from "./pages/About";
import Create from "./pages/Create";
// import Details from "./pages/Details";
// import Rules from "./pages/Rules";
import Homepage from "./pages/Homepage";
import { API_BASE_URL } from "../consts";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [baseData, setBaseData] = useState([]);
  const [errorMsg, setErrorMsg] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`${API_BASE_URL}/data.json`);
        setBaseData(response.data);
      } catch (err) {
        setErrorMsg(err.message);
      }
    }
    getData();
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Homepage baseData={baseData} setBaseData={setBaseData} />}
        />
        <Route
          path="/Create"
          element={<Create baseData={baseData} setBaseData={setBaseData} />}
        />
        {/* <Route path="/About" element={<About />} />
        <Route path="/Rules" element={<Rules />} />
      <Route path="/Details" element={<Details />} /> */}
      </Routes>
    </>
  );
}

export default App;
