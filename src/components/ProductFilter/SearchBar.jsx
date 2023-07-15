function SearchBar({ filterText, isStockOnly, onFilterTextChange, onStockChange }) {
  return (
    <fieldset>
      <legend>SearchBar</legend>
      <label htmlFor="filterText">
        <input
          value={filterText}
          onChange={onFilterTextChange}
          type="text"
          placeholder="Search..."
          name="filterText"
          id="filterText"
        />
      </label>
      <br />
      <label htmlFor="stockOnly">
        <input
          onChange={onStockChange}
          checked={isStockOnly}
          type="checkbox"
          name="stockOnly"
          id="stockOnly"
        />
        Only show products in stock
      </label>
    </fieldset>
  );
}

export default SearchBar;
