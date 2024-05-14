import "./ChoseInventory.css";
import { useState } from "react";

function GearCard({ item, onClick, isSelected }) {
  return (
    <div
      onClick={() => onClick(item)}
      style={{
        border: isSelected ? "2px solid blue" : "1px solid grey",
        cursor: "pointer",
        margin: "10px",
        padding: "10px",
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

  const handleSubmit = () => {
    setNewForm((newForm) => ({
      ...newForm,
      inventory: [selectedGear, ...newItems],
    }));
  };

  return (
    <div>
      <div>
        <h2>Select a Gear Item</h2>
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
        {selectedGear && (
          <button onClick={handleResetSelection}>I've changed my mind!</button>
        )}
      </div>
      <div>
        <h2>Add More Items</h2>
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
      <button onClick={handleSubmit}>Go Next!</button>
    </div>
  );
}

export default ChooseInventory;
