import Image from "../assets/Projet2img.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { API_BASE_URL } from "../consts";
import axios from "axios";

function ChoseRole({ baseData, handleChange, newForm, edit }) {
  const navigate = useNavigate();
  console.log(newForm);
  const { characterId } = useParams();
  async function updateRole() {
    try {
      await axios.put(`${API_BASE_URL}/characters/${characterId}`, {
        ...newForm,
        role: newForm.role.split(",")[0],
      });
      navigate(`/edit-abilities/${characterId}`);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <h1>Chose your Role !</h1>
      <p>
        Your role gives you a unique set of abilities and is a big part of your
        character’s identity. <br />
        This is just a brief overview of Quest's eight roles; you can see the
        abilities of your chosen role in the next step !
      </p>
      <div className="roleSelection" order="1">
        {baseData.roles.map((el) => {
          return (
            <div key={el.id} className="roleCard">
              <div className="roleCardFront">
                <h3 className="roleName">{el.name}</h3>

                <img src={Image} alt="roleImage"></img>
              </div>
              <div className="roleCardBack">
                <p className="roleDescription">{el.description}</p>
                <input
                  type="radio"
                  value={`${el.id},${el.name}`}
                  name="role"
                  onChange={handleChange}
                />
              </div>
            </div>
          );
        })}
      </div>
      {edit && <button onClick={updateRole}>update Role</button>}
    </>
  );
}
export default ChoseRole;
