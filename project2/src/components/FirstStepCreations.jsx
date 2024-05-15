import { useState } from "react";
import "../FirstStepCreations.css";

function FirstStepCreations({
  baseData,
  setBaseData,
  newForm,
  setNewForm,
  handleChange,
}) {
  console.log("changement", newForm);
  return (
    <>
      <div className="form-g" order="3">
        <h1>Tell us more about you ...</h1>
        <p>
          Hi, my name is{" "}
          <span
            data-name="name"
            contentEditable="true"
            onInput={handleChange}
          ></span>{" "}
          (
          <span
            data-name="surname"
            contentEditable="true"
            onInput={handleChange}
          ></span>
          ). I'm{" "}
          <span
            data-name="age"
            contentEditable="true"
            className="small"
            onInput={handleChange}
          ></span>{" "}
          years old and stand{" "}
          <span
            data-name="size"
            contentEditable="true"
            className="small"
            onInput={handleChange}
          ></span>{" "}
          tall. I'm the party's{" "}
          <span
            data-name="role"
            contentEditable="true"
            onInput={handleChange}
          ></span>
          . When people see me, they first notice my{" "}
          <span
            data-name="qualities1"
            contentEditable="true"
            onInput={handleChange}
          ></span>
          ,{" "}
          <span
            data-name="qualities2"
            contentEditable="true"
            onInput={handleChange}
          ></span>
          , and{" "}
          <span
            data-name="qualities3"
            contentEditable="true"
            className="tall"
            onInput={handleChange}
          ></span>
          . I wear{" "}
          <span
            data-name="accessories1"
            contentEditable="true"
            onInput={handleChange}
          ></span>
          ,{" "}
          <span
            data-name="accessories2"
            contentEditable="true"
            className="tall"
            onInput={handleChange}
          ></span>
          , and move with{" "}
          <span
            data-name="move"
            contentEditable="true"
            onInput={handleChange}
          ></span>
          . I'm from{" "}
          <span
            data-name="origin"
            contentEditable="true"
            onInput={handleChange}
          ></span>
          , where my people are known for{" "}
          <span
            data-name="culture"
            contentEditable="true"
            className="tall"
            onInput={handleChange}
          ></span>
          . I believe in{" "}
          <span
            data-name="belief"
            contentEditable="true"
            onInput={handleChange}
          ></span>
          , but my{" "}
          <span
            data-name="flaw"
            contentEditable="true"
            onInput={handleChange}
          ></span>{" "}
          side can get in my way. I dream of{" "}
          <span
            data-name="dream"
            contentEditable="true"
            className="tall"
            onInput={handleChange}
          ></span>
          .
        </p>
      </div>
    </>
  );
}

export default FirstStepCreations;
