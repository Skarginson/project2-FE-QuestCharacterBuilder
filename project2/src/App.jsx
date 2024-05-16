import "./App.css";
import { Routes, Route } from "react-router-dom";
// import About from "./pages/About";
import Create from "./pages/Create";
import Details from "./pages/Details";
// import Rules from "./pages/Rules";
import Homepage from "./pages/Homepage";
import { API_BASE_URL } from "./consts";
import axios from "axios";
import { useEffect, useState } from "react";
import ChoseAbilities from "./components/ChoseAbilities";

function App() {
  const emptyForm = {
    id: "",
    name: "",
    surname: "",
    age: 0,
    height: 0,
    role: "",
    qualities1: "",
    qualities2: "",
    qualities3: "",
    accessories1: "",
    accessories2: "",
    move: "",
    origin: "",
    culture: "",
    belief: "",
    flaw: "",
    dream: "",
    abilities: [],
    inventory: [],
  };

  const [baseData, setBaseData] = useState(null);
  const [errorMsg, setErrorMsg] = useState([]);
  const [newForm, setNewForm] = useState(emptyForm);

  const handleChange = (e, addToList = false) => {
    let newValue;
    let name;

    if (
      e.target instanceof HTMLInputElement ||
      e.target instanceof HTMLTextAreaElement
    ) {
      newValue = e.target.value;
      name = e.target.name;
    } else {
      newValue = e.target.textContent;
      name = e.target.dataset.name;
    }

    if (addToList && Array.isArray(newForm[name])) {
      setNewForm((data) => {
        const newList = data[name].includes(newValue)
          ? data[name].filter((el) => el !== newValue)
          : [...data[name], newValue];

        return { ...data, [name]: newList };
      });
    } else {
      setNewForm((data) => {
        return { ...data, [name]: newValue };
      });
    }
  };
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`${API_BASE_URL}/data.json`);
        setBaseData(response.data);
      } catch (err) {
        setErrorMsg(err.message);
      }
    }
    getData();
  }, []);
  if (!baseData) {
    return <></>;
  }
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              baseData={baseData}
              setBaseData={setBaseData}
              handleChange={handleChange}
              newForm={newForm}
              setNewForm={setNewForm}
            />
          }
        />
        <Route
          path="/Create"
          element={
            <Create
              baseData={baseData}
              setBaseData={setBaseData}
              handleChange={handleChange}
              newForm={newForm}
              setNewForm={setNewForm}
            />
          }
        />
        {/* <Route path="/About" element={<About />} />
        <Route path="/Rules" element={<Rules />} />*/}
        <Route
          path="/Details/:characterId"
          element={
            <Details
              setNewForm={setNewForm}
              setBaseData={setBaseData}
              baseData={baseData}
              newForm={newForm}
            />
          }
        />
        <Route
          path="/edit-abilities/:characterId"
          element={
            <ChoseAbilities
              baseData={baseData}
              newForm={newForm}
              handleChange={handleChange}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
