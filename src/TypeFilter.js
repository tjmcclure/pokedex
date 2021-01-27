function TypeFilter({ typeFilter, setTypeFilter, types }) {
    const onTypeChange = (event) => {
        const {name} = event.target

        if(!typeFilter.includes(name)){
            //Add item to type filter
            setTypeFilter(oldFilter => [...oldFilter, name])
        } else {
            //Remove item from type filter
            setTypeFilter(typeFilter.filter(type => type !== name))
        }
    }

  return (
    <div className="FilterType">
        Filter Type: <br/>
        {types.map(type => (
            <label key={type} className={type}>
                <input
                  type="checkbox"
                  name={type}
                  value={type}
                  checked={typeFilter.includes(type)}
                  onChange={onTypeChange}
                  className="type-input"
                />
                {type}
            </label>
        ))}
    </div>
  );
}

export default TypeFilter;
