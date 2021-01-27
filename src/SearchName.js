function SearchName({ nameFilter, setNameFilter }) {

    //Name filter
    const onNameChange = (event) => {
        const {value} = event.target
        setNameFilter(value.toLowerCase())
    }

    return (
        <div className="SearchName">
            <input
				type="text"
				name="nameFilter"
				placeholder = "Search Name"
				value={nameFilter}
				onChange={onNameChange}
			/>
        </div>
    );
}

export default SearchName;
