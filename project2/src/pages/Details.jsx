import "../charDetails.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../consts";
import { Link, useNavigate, useParams } from "react-router-dom";

function CharacterDetails({ baseData, setBaseData, newForm, setNewForm }) {
  const [detailsData, setDetailsData] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  const [edit, setEdit] = useState(false);
  const [cursorPos, setCursorPos] = useState(0);
  const { characterId } = useParams();
  const navigate = useNavigate();

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

  useEffect(() => {
    if (!cursorPos || !document.activeElement.firstChild) {
      return;
    }
    const range = document.createRange();
    range.setStart(document.activeElement.firstChild, cursorPos);
    range.collapse(true);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }, [cursorPos]);
  const handleEdit = (e) => {
    let newValue;
    let name;
    newValue = e.target.textContent;
    name = e.target.dataset.name;
    setCursorPos(document.getSelection().focusOffset);
    setDetailsData((data) => {
      return { ...data, [name]: newValue };
    });
  };

  async function handleSubInfo() {
    try {
      await axios.put(`${API_BASE_URL}/characters/${characterId}`, {
        ...detailsData,
      });
    } catch (err) {
      setErrorMsg(err.message);
    }
    setEdit(false);
  }

  const handleEditInventory = () => {
    setNewForm({
      ...newForm,
      ...detailsData,
      abilities: detailsData.abilities.map((ability) => ability.name),
      inventory: detailsData.inventory || [],
    });
    navigate(`/edit-inventory/${characterId}`);
  };

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
                {" "}
                <div className="headDetails">
                  <h1>Character Details</h1>
                  <button
                    onClick={() => (edit ? handleSubInfo() : setEdit(true))}
                  >
                    edit
                  </button>
                </div>
                <p>
                  Hi, my name is{" "}
                  <span
                    data-name="name"
                    contentEditable={edit ? "true" : "false"}
                    onInput={handleEdit}
                    className={edit && "editable"}
                  >
                    {detailsData.name}
                  </span>{" "}
                  (
                  <span
                    data-name="surname"
                    contentEditable={edit ? "true" : "false"}
                    onInput={handleEdit}
                    className={edit && "editable"}
                  >
                    {detailsData.surname}
                  </span>
                  ). I'm{" "}
                  <span
                    data-name="age"
                    contentEditable={edit ? "true" : "false"}
                    className={edit && "small editable"}
                    onInput={handleEdit}
                  >
                    {detailsData.age}
                  </span>{" "}
                  years old and stand{" "}
                  <span
                    data-name="size"
                    contentEditable={edit ? "true" : "false"}
                    className={edit && "small editable"}
                    onInput={handleEdit}
                  >
                    {detailsData.height}
                  </span>{" "}
                  tall. I'm the party's{" "}
                  <span>
                    {edit ? (
                      <Link to="">detailsData.role</Link>
                    ) : (
                      detailsData.role
                    )}
                  </span>
                  . When people see me, they first notice my{" "}
                  <span
                    data-name="qualities1"
                    contentEditable={edit ? "true" : "false"}
                    onInput={handleEdit}
                    className={edit && "editable"}
                  >
                    {detailsData.qualities1}
                  </span>
                  ,{" "}
                  <span
                    data-name="qualities2"
                    contentEditable={edit ? "true" : "false"}
                    onInput={handleEdit}
                    className={edit && "editable"}
                  >
                    {detailsData.qualities2}
                  </span>
                  , and{" "}
                  <span
                    data-name="qualities3"
                    contentEditable={edit ? "true" : "false"}
                    className={edit && "tall editable"}
                    onInput={handleEdit}
                  >
                    {detailsData.qualities3}
                  </span>
                  . I wear{" "}
                  <span
                    data-name="accessories1"
                    contentEditable={edit ? "true" : "false"}
                    onInput={handleEdit}
                    className={edit && "editable"}
                  >
                    {detailsData.accessories1}
                  </span>
                  ,{" "}
                  <span
                    data-name="accessories2"
                    contentEditable={edit ? "true" : "false"}
                    className={edit && "tall editable"}
                    onInput={handleEdit}
                  >
                    {detailsData.accessories2}
                  </span>
                  , and move with{" "}
                  <span
                    data-name="move"
                    contentEditable={edit ? "true" : "false"}
                    onInput={handleEdit}
                    className={edit && "editable"}
                  >
                    {detailsData.move}
                  </span>
                  . I'm from{" "}
                  <span
                    data-name="origin"
                    contentEditable={edit ? "true" : "false"}
                    onInput={handleEdit}
                    className={edit && "editable"}
                  >
                    {detailsData.origin}
                  </span>
                  , where my people are known for{" "}
                  <span
                    data-name="culture"
                    contentEditable={edit ? "true" : "false"}
                    className={edit && "tall editable"}
                    onInput={handleEdit}
                  >
                    {detailsData.culture}
                  </span>
                  . I believe in{" "}
                  <span
                    data-name="belief"
                    contentEditable={edit ? "true" : "false"}
                    onInput={handleEdit}
                    className={edit && "editable"}
                  >
                    {detailsData.belief}
                  </span>
                  , but my{" "}
                  <span
                    data-name="flaw"
                    contentEditable={edit ? "true" : "false"}
                    onInput={handleEdit}
                    className={edit && "editable"}
                  >
                    {detailsData.flaw}
                  </span>{" "}
                  side can get in my way. I dream of{" "}
                  <span
                    data-name="dream"
                    contentEditable={edit ? "true" : "false"}
                    className={edit && "tall editable"}
                    onInput={handleEdit}
                  >
                    {detailsData.dream}
                  </span>
                  .
                </p>
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
              <button
                onClick={() => {
                  console.log(detailsData, "ici");
                  const role = baseData.roles.find((role) => {
                    return (role.name = detailsData.role);
                  });
                  setNewForm((newForm) => {
                    return {
                      ...newForm,
                      ...detailsData,
                      abilities: detailsData.abilities.map((ability) => {
                        return ability.name;
                      }),
                      role: `${role.id},${role.name}`,
                    };
                  });
                  navigate(`/edit-abilities/${characterId}`);
                }}
              >
                Edit
              </button>
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
              <button onClick={handleEditInventory}>Edit Inventory</button>
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
