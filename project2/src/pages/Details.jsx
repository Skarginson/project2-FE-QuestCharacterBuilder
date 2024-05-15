import "../charDetails.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../consts";
import { useParams } from "react-router-dom";

function CharacterDetails({ baseData, setBaseData, newForm }) {
  const [detailsData, setDetailsData] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  const { characterId } = useParams();

  useEffect(() => {
    async function getDetailsData() {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/characters/${characterId}`
        );
        const filteredCharAbilities = baseData.abilities.filter((ability) =>
          response.data.abilities.includes(ability.name)
        );

        response.data.abilities = filteredCharAbilities;
        setDetailsData(response.data);
      } catch (err) {
        setErrorMsg(err.message);
      }
    }
    getDetailsData();
  }, [characterId]);

  console.log("Inventory", detailsData.inventory);

  return (
    <div>
      <Header />
      <Sidebar />
      {detailsData ? (
        <>
          {" "}
          <div className="cadre">
            <div className="leftSide">
              <div className="details">
                <h1>Character Details</h1>
                <p>
                  Hi, my name is {detailsData.name} ({detailsData.surname}). I'm{" "}
                  {detailsData.age} years old and stand {detailsData.height}{" "}
                  tall. I'm the party's {detailsData.role}.
                </p>
                <p>
                  When people see me, they first notice my{" "}
                  {detailsData.qualities1}, {detailsData.qualities2} and{" "}
                  {detailsData.qualities3}.
                </p>
                <p>
                  I wear {detailsData.accessories1}, {detailsData.accessories2}{" "}
                  and move with {detailsData.move}.
                </p>
                <p>
                  I'm from {detailsData.origin} where my people are known for{" "}
                  {detailsData.culture}
                </p>
                <p>
                  I believe in {detailsData.belief} but my {detailsData.flaw}{" "}
                  side can get in my way.
                </p>
                <p>I dream of {detailsData.dream}</p>
              </div>

              <div className="abilitiesContainer">
                <h1>Abilities</h1>
                {detailsData.abilities ? (
                  detailsData.abilities.map((ability, index) => (
                    <div key={index} className="abilityCard">
                      <h3>{ability.name}</h3>
                      <p>Coût en AP: {ability.cost}</p>
                      <p>Description: {ability.description}</p>
                    </div>
                  ))
                ) : (
                  <p>No abilities found</p>
                )}
              </div>
            </div>
            <div className="inventoryContainer">
              <h1>Inventory</h1>
              {detailsData.inventory ? (
                detailsData.inventory.map((inventory, index) => (
                  <div key={index} className="inventoryCard">
                    <h3>{inventory.name}</h3>
                    {/* <p>Coût en AP: {inventory.cost}</p> */}
                    <p>Description: {inventory.description}</p>
                  </div>
                ))
              ) : (
                <p>No items found</p>
              )}
            </div>
          </div>
        </>
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
