import ChoseAbilities from "../components/ChoseAbilities";
import ChoseRole from "../components/ChoseRole";
import ChoseInventory from "../components/ChoseInventory";
import FirstStepCreations from "../components/FirstStepCreations";

function Create({ baseData, setBaseData, handleChange, newForm, setNewForm }) {
  return (
    <>
      <ChoseAbilities
        baseData={baseData}
        setBaseData={setBaseData}
        handleChange={handleChange}
        newForm={newForm}
        setNewForm={setNewForm}
      />
      ;
      <ChoseRole
        baseData={baseData}
        setBaseData={setBaseData}
        handleChange={handleChange}
        newForm={newForm}
        setNewForm={setNewForm}
      />
      <ChoseInventory
        baseData={baseData}
        setBaseData={setBaseData}
        handleChange={handleChange}
        newForm={newForm}
        setNewForm={setNewForm}
      />
      <FirstStepCreations
        baseData={baseData}
        setBaseData={setBaseData}
        handleChange={handleChange}
        newForm={newForm}
        setNewForm={setNewForm}
      />
    </>
  );
}

export default Create;
