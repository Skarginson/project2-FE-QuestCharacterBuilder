import { useNavigate, useParams } from "react-router-dom";
import { API_BASE_URL } from "../consts";
import axios from "axios";

function ChoseAbilities({ baseData, handleChange, newForm }) {
  const navigate = useNavigate();
  const { characterId } = useParams();
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
