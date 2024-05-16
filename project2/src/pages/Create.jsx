import ChoseAbilities from "../components/ChoseAbilities";
import ChoseRole from "../components/ChoseRole";
import ChoseInventory from "../components/ChoseInventory";
import FirstStepCreations from "../components/FirstStepCreations";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import "../create.css";
import { useState } from "react";

function Create({
  baseData,
  setBaseData,
  handleChange,
  newForm,
  setNewForm,
  emptyForm,
}) {
  const [step, setStep] = useState(0);
  return (
    <>
      <Header />
      <Sidebar />
      {step === 0 && (
        <div className="firstpage">
          <h1>Create your Character</h1>
          <p>
            Hey there ! Welcome to our character sheet creator for the quest
            TTRPG !<br />
            We'll guide you through you character creation so that you can be
            all set to play !<br />
            Just like in the book version, you'll have to chose your roles,
            abilities, complete your character profile andpick your starting
            items.
            <br />
            Ready ? Let's start !
          </p>{" "}
          <p>
            What's your name ?{" "}
            <span
              className="editable"
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
          emptyForm={emptyForm}
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
