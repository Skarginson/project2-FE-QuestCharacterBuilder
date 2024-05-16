import "../ChoseInventory.css";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "../consts";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function GearCard({ item, onClick, isSelected }) {
  return (
    <div
      className="gearCard"
      onClick={() => onClick(item)}
      style={{
        border: isSelected ? "3px solid #54fff7" : "1px solid grey",
      }}
    >
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </div>
  );
}

function ChooseInventory({ baseData, setBaseData, newForm, setNewForm }) {
  const [selectedGear, setSelectedGear] = useState(null);
  const [newItems, setNewItems] = useState([]);
  const [newItemName, setNewItemName] = useState("");
  const [newItemDescription, setNewItemDescription] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();

  const gearItems =
    baseData.treasures?.filter((item) => item.rarity === "gear") || [];
  const { characterId } = useParams();

  const handleSelectGear = (item) => {
    setSelectedGear(item);
  };

  const handleAddNewItem = () => {
    if (newItemName && newItemDescription) {
      const newItemObject = {
        name: newItemName,
        description: newItemDescription,
        rarity: "gear",
      };
      setNewItems((prev) => [...prev, newItemObject]);
      setNewItemName("");
      setNewItemDescription("");
    }
  };

  const handleResetSelection = () => {
    setSelectedGear(null);
  };

  useEffect(() => {
    if (baseData && baseData.characters) {
      const characterData = baseData.characters.find(
        (char) => char.id === characterId
      );
      if (characterData) {
        setNewForm({
          ...newForm,
          inventory: characterData.inventory,
        });
      }
    }
  }, [characterId, baseData, setNewForm]);

  // async function handleSubmit(newForm) {
  //   try {
  //     await axios.post(`${API_BASE_URL}/characters`, {
  //       ...newForm,
  //       inventory: [selectedGear, ...newItems],
  //     });
  //     navigate("/");
  //   } catch (err) {
  //     setErrorMsg(err.message);
  //   }
  // }

  const handleSubmit = async (newForm) => {
    const updatedCharacterData = {
      ...newForm,
      inventory: [selectedGear, ...newItems],
    };
    try {
      if (characterId) {
        await axios.put(
          `${API_BASE_URL}/characters/${characterId}`,
          updatedCharacterData
        );
      } else {
        await axios.post(`${API_BASE_URL}/characters`, {
          ...newForm,
          inventory: [selectedGear, ...newItems],
        });
      }
      navigate("/");
    } catch (error) {
      console.error("Failed to process your request:", error);
    } catch (error) {
      console.error("Failed to process your request:", error);
    }
  };

  console.log("newForm", newForm);
  return (
    <>
      <h2 className="titleSelectGear">
        {characterId ? "Update inventory" : "Select a Gear Item"}
      </h2>
      <p>
        {characterId
          ? ""
          : "Your character is almost finished. Time to pick what you carry! You may choose one useful item from this list. You may additionnally, you may add three common weapons."}
      </p>
      <p>
        {characterId
          ? ""
          : "Your character is almost finished. Time to pick what you carry! You may choose one useful item from this list. You may additionnally, you may add three common weapons."}
      </p>

      <div className="cardContainer">
        {gearItems.map((item) =>
          selectedGear ? (
            item === selectedGear && (
              <GearCard
                key={item.id}
                item={item}
                onClick={handleSelectGear}
                isSelected={true}
              />
            )
          ) : (
            <GearCard
              key={item.id}
              item={item}
              onClick={handleSelectGear}
              isSelected={selectedGear === item}
            />
          )
        )}
      </div>
      {selectedGear && (
        <button className="changeMind" onClick={handleResetSelection}>
          I've changed my mind!
        </button>
      )}
      <h2>{characterId ? "Edit Additional Items" : "Add More Items"}</h2>
      <div className="intexte">
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="Item Name"
        />
        <input
          type="text"
          value={newItemDescription}
          onChange={(e) => setNewItemDescription(e.target.value)}
          placeholder="Item Description"
        />
        <button onClick={handleAddNewItem}>Add Item</button>
        {newItems.map((item, index) => (
          <GearCard
            key={index}
            item={item}
            onClick={() => {}}
            isSelected={false}
          />
        ))}
      </div>
      <button
        className="create"
        onClick={() => {
          handleSubmit(newForm);
        }}
      >
        {characterId ? "Update Character" : "Create Character"}{" "}
      </button>
    </>
  );
}

export default ChooseInventory;
