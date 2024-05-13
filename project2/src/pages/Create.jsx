import ChoseAbilities from "../components/ChoseAbilities";
import ChoseRole from "../components/ChoseRole";
import ChoseInventory from "../components/ChoseInventory";
import FirstStepCreations from "../components/FirstStepCreations";

function Create({ baseData, setBaseData }) {
  return (
    <>
      <ChoseAbilities baseData={baseData} setBaseData={setBaseData} />;
      <ChoseRole baseData={baseData} setBaseData={setBaseData} />
      <ChoseInventory baseData={baseData} setBaseData={setBaseData} />
      <FirstStepCreations baseData={baseData} setBaseData={setBaseData} />
    </>
  );
}

export default Create;
