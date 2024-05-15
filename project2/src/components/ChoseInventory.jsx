import "../ChoseInventory.css";
import { useState } from "react";
import { API_BASE_URL } from "../consts";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

function ChooseInventory({
  baseData,
  setBaseData,
  handleChange,
  newForm,
  setNewForm,
}) {
  const [selectedGear, setSelectedGear] = useState(null);
  const [newItems, setNewItems] = useState([]);
  const [newItemName, setNewItemName] = useState("");
  const [newItemDescription, setNewItemDescription] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const gearItems =
    baseData.treasures?.filter((item) => item.rarity === "gear") || [];

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

  const handleInventorySubmit = () => {
    setNewForm((newForm) => ({
      ...newForm,
      inventory: [selectedGear, ...newItems],
    }));
  };

  async function handleSubmit(newForm) {
    console.log("console log before try", newForm);
    try {
      await axios.post(`${API_BASE_URL}/characters`, {
        ...newForm,
        inventory: [selectedGear, ...newItems],
      });
      navigate("/");
    } catch (err) {
      setErrorMsg(err.message);
    }
  }

  console.log(newForm);
  return (
    <>
      <h2 className="titleSelectGear">Select a Gear Item</h2>

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
      <h2>Add More Items</h2>
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
          // handleInventorySubmit();
          handleSubmit(newForm);
        }}
      >
        Create your Character
      </button>
    </>
  );
}

export default ChooseInventory;
