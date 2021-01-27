function WeaknessFilter({ weaknessFilter, setWeaknessFilter, types }) {
    // const [weaknessFilter, setWeaknessFilter] = useState([])
    const onWeaknessChange = (event) => {
        const {name} = event.target

        if(!weaknessFilter.includes(name)){
            //Add item to weakness filter
            setWeaknessFilter(oldFilter => [...oldFilter, name])
        } else {
            //Remove item from weakness filter
            setWeaknessFilter(weaknessFilter.filter(type => type !== name))
        }
    }

  return (
            <div className="FilterWeakness">
                Filter Weakness: <br/>
                {types.map(type => (
                    <label key={type} className={type}>
                        <input
                          type="checkbox"
                          name={type}
                          value={type}
                          checked={weaknessFilter.includes(type)}
                          onChange={onWeaknessChange}
                          className="weakness-input"
                        />
                        {type}
                    </label>
                ))}
            </div>
  );
}

export default WeaknessFilter;
