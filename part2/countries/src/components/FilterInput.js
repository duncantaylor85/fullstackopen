const FilterInput = ({ filterText, onFilterChange }) => {
  const handleChange = (event) => {
    const lowercaseText = event.target.value.toLowerCase();
    onFilterChange(lowercaseText);
    console.log(lowercaseText);
  };
  return (
    <div>
      find countries
      <input
        type="text"
        value={filterText}
        onChange={handleChange}
        placeholder="country"
      ></input>
    </div>
  );
};

export default FilterInput;
