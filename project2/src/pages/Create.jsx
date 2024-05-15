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
      {step === 0 && (
        <div className="firstpage">
          <h1>Create tour Character</h1> <p>description</p>{" "}
          <p>
            Who is the creator ?{" "}
            <span
              data-name="author"
              contentEditable="true"
              onInput={handleChange}
            ></span>{" "}
          </p>{" "}
        </div>
      )}
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
          <button
            className="previous"
            onClick={() => step >= 1 && setStep(step - 1)}
          ></button>
        )}
        {step <= 3 && (
          <button
            className="next"
            onClick={() => step <= 3 && setStep(step + 1)}
          ></button>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Create;
