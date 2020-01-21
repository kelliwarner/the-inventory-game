import React from 'react';

function Stats(props) {
  const lowInventoryProducts = props.products.filter(
    product => product.numberInStock < 3
  );

  return (
    <div>
      <h1>The Inventory Game ({props.products.length})</h1>
      <p>
        There are {lowInventoryProducts.length} products with low inventory.
      </p>
    </div>
  );
}

export default Stats;
