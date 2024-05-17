import Image from "../assets/Projet2img.jpg";

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
    </>
  );
}
export default ChoseRole;
