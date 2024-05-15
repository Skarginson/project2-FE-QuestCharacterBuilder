import ChoseAbilities from "../components/ChoseAbilities";
import ChoseRole from "../components/ChoseRole";
import ChoseInventory from "../components/ChoseInventory";
import FirstStepCreations from "../components/FirstStepCreations";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import "../create.css";
import { useState } from "react";

function Create({ baseData, setBaseData, handleChange, newForm, setNewForm }) {
  const [step, setStep] = useState(0);
  return (
    <>
      <Header />
      <Sidebar />
      {step === 0 && "présentation jeu"}
      {step === 2 && (
        <ChoseAbilities
          baseData={baseData}
          setBaseData={setBaseData}
          handleChange={handleChange}
          newForm={newForm}
          setNewForm={setNewForm}
        />
      )}
      ;
      {step === 1 && (
        <ChoseRole
          baseData={baseData}
          setBaseData={setBaseData}
          handleChange={handleChange}
          newForm={newForm}
          setNewForm={setNewForm}
        />
      )}
      {step === 4 && (
        <ChoseInventory
          baseData={baseData}
          setBaseData={setBaseData}
          handleChange={handleChange}
          newForm={newForm}
          setNewForm={setNewForm}
        />
      )}
      {step === 3 && (
        <FirstStepCreations
          baseData={baseData}
          setBaseData={setBaseData}
          handleChange={handleChange}
          newForm={newForm}
          setNewForm={setNewForm}
        />
      )}
      <div className="btnForm">
        {step >= 1 && (
          <button onClick={() => step >= 1 && setStep(step - 1)}>
            previous
          </button>
        )}
        {step <= 3 && (
          <button onClick={() => step <= 3 && setStep(step + 1)}>next</button>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Create;
