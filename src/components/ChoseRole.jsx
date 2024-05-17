// import WizardImg from "../assets/Projet2img.jpg";
// import FighterImg from "../assets/Fighter.jpg"
// import MagicianImg from "../assets/Magician.jpg"
// import InvokerImg from "../assets/Invoker.jpg"
// import RangerImg from '../assets/Ranger.jpg'
// import NaturalistImg from "../assets/Naturalist.jpg"
// import DoctorImg from "../assets/Doctor.jpg"
// import SpyImg from "../assets/Spy.jpg"
import { API_BASE_URL } from "../consts";


function ChoseRole({ baseData, handleChange, newForm }) {
  console.log(newForm);
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
              <div className="roleCardFront" >
                <h3 className="roleName">{el.name}</h3>
                <img src={`${API_BASE_URL}/image/${el.name}.jpg`} alt={el.name}/>
                {/* {el.name === "Fighter" && (
                  <img src={FighterImg} alt="Fighter"/>
                )}
                {el.name === "Invoker" && (
                  <img src={InvokerImg} alt="Invoker"/>
                )}
                {el.name === "Ranger" && (
                  <img src={RangerImg} alt="Ranger"/>
                )}
                {el.name === "Naturalist" && (
                  <img src={NaturalistImg} alt="Naturalist"/>
                )}
                {el.name === "Doctor" && (
                  <img src={DoctorImg} alt="Doctor"/>
                )}
                {el.name === "Spy" && (
                  <img src={SpyImg} alt="Spy"/>
                )}
                {el.name === "Magician" && (
                <img src={MagicianImg} alt="Magician"/>
                )}
                {el.name === "Wizard" && (
                <img src={WizardImg} alt="Wizard"/>
                )} */}
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
    </>
  );
}
export default ChoseRole;
