import { useNavigate, useParams } from "react-router-dom";
import { API_BASE_URL } from "../consts";
import axios from "axios";

function ChoseAbilities({ baseData, handleChange, newForm }) {
  const navigate = useNavigate();
  const { characterId } = useParams();
  console.log("newFomr", newForm);
  async function updateAbilities() {
    try {
      await axios.put(`${API_BASE_URL}/characters/${characterId}`, {
        ...newForm,
        role: newForm.role.split(",")[1],
        // abilities: baseData.abilities.filter((ability) => {
        //   return newForm.abilities.includes(ability.name);
        // }),
      });
      navigate(`/details/${characterId}`);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <h1>Choose your abilities</h1>
      <p>
        Time to pick your abilities ! Choose six abilities from this catalog
        before the next step. <br />
        Abilities belong to learning paths. You must learn abilities in each
        path in order, starting with the first ability in each path <br />
        You can learn abilities from all your learning paths. You can learn as
        many or as few abilities in each path, as you want. <br />
        You can't pick Legendary Abilities from the start. They are so powerful
        and rare that you can only learn them if your adventure provides the
        opportunity.
      </p>
      <div className="abilitiesSelection">
        {baseData.abilities
          .filter((el) => el.roleId === newForm.role.split(",")[0])
          .map((el) => {
            return (
              <ul key={el.name}>
                <li className="abilitiesCard">
                  <h2>{el.name}</h2>
                  <span>
                    Level : {el.level}
                    <br></br>
                  </span>
                  <span>
                    Path : {el.paths}
                    <br></br>
                  </span>
                  <span>
                    Cost : {el.cost}
                    <br></br>
                  </span>
                  <span>
                    damage : {el.damage}
                    <br></br>
                  </span>
                  <span>{el.description} </span>
                  <input
                    type="checkbox"
                    value={el.name}
                    name="abilities"
                    onChange={(e) => handleChange(e, true)}
                    checked={newForm.abilities.includes(el.name)}
                  />
                </li>
              </ul>
            );
          })}
        {characterId && (
          <button onClick={updateAbilities}>update abilities</button>
        )}
      </div>
    </>
  );
}

export default ChoseAbilities;
