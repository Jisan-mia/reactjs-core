import React from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import allProducts from "./data.json";

export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      isStockOnly: false,
    };
  }

  handleFilterTextChange = (e) => {
    this.setState({
      filterText: e.target.value,
    });
  };

  handleStockChangeCheckbox = (e) => {
    this.setState({
      isStockOnly: e.target.checked,
    });
  };

  render() {
    const { filterText, isStockOnly } = this.state;
    return (
      <fieldset style={{ maxWidth: "400px" }}>
        <legend>FilterableProductTable</legend>

        <SearchBar
          filterText={filterText}
          isStockOnly={isStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onStockChange={this.handleStockChangeCheckbox}
        />
        <ProductTable
          allProducts={allProducts}
          filterText={filterText}
          isStockOnly={isStockOnly}
        />
      </fieldset>
    );
  }
}
