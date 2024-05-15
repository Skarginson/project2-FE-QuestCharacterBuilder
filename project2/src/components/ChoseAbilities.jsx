function ChoseAbilities({ baseData, handleChange, newForm }) {
  return (
    <>
      <div className="abilitiesSelection">
        {baseData.abilities.filter((el) => el.roleId === newForm.roleId).map((el) => {
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
                  />
                </li>
              </ul>
          )
        })}
      </div>
    </>
  )
}

export default ChoseAbilities;
