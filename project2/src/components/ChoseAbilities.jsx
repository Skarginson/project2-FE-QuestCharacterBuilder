function ChoseAbilities({ baseData, handleChange, newForm }) {
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
                  />
                </li>
              </ul>
            );
          })}
      </div>
    </>
  );
}

export default ChoseAbilities;
