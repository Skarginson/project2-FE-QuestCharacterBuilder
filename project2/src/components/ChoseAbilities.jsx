function ChoseAbilities({ baseData , handleChange,newForm }) {
  console.log(newForm)
  return (
    <>
      <div className="abilitiesSelection">
        {baseData.abilities.map((el) => {
          return (
            <>
              <ul>
                <li className="abilitiesCard">
                  <h2>{el.name}</h2>
                  <span>Level : {el.level}<br></br></span>
                  <span>Path : {el.paths}<br></br></span>
                  <span>Cost : {el.cost}<br></br></span>
                  <span>damage : {el.cost}<br></br></span>
                  <span>Description : {el.description} </span>
                  <input
                  type="checkbox"
                  value={el.name}
                  name="abilities"
                  onChange={handleChange}
                />
                </li>
              </ul>
            </>
          );
        })}
      </div>
    </>
  );
}

export default ChoseAbilities;
