import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../consts";

function CharacterDetails({ baseData, setBaseData, newForm }) {
  const [detailsData, setDetailsData] = useState();
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    async function getDetailsData() {
      try {
        const response = await axios.get(`${API_BASE_URL}/characters/1`); //add ID here
        setDetailsData(response.data);
      } catch (err) {
        setErrorMsg(err.message);
      }
    }
    getDetailsData();
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
      {detailsData ? (
        <div className="details">
          <h1>Character Details</h1>
          <p>ID: {detailsData.id}</p>
          <p>Name: {detailsData.name}</p>
          <p>Age: {detailsData.age}</p>
        </div>
      ) : errorMsg ? (
        <p>Error loading character details: {errorMsg}</p>
      ) : (
        <p>Loading...</p>
      )}
      <Footer />
    </div>
  );
}

export default CharacterDetails;
