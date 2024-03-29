import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable({allProducts, filterText, isStockOnly}) {
  const rows = [];
  let lastCategory = null;

  allProducts.forEach((product) => {
    if(product.name.indexOf(filterText) === -1) {
      return;
    }
    if(isStockOnly && !product.stocked) {
      return;
    }
    if(product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow 
          category={product.category}
          key={product.category}
        />
      )
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name}
      />
    )

    lastCategory = product.category
  })
  return (
    <fieldset>
      <legend>ProductTable</legend>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {rows}
        </tbody>
      </table>
    </fieldset>
  );
}

export default ProductTable;
