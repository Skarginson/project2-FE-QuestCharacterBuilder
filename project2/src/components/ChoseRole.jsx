import Image from "../assets/Projet2img.jpg";

function ChoseRole({ baseData, handleChange, newForm }) {
  console.log(newForm)
  return (
    <>
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
