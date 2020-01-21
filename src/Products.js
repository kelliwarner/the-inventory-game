import React, { useState } from 'react';
import Data from './data';
import Stats from './Stats';

function Products() {
  const [products, setProducts] = useState(Data.products);

  const decrement = productToUpdate => {
    console.log(productToUpdate);
    const decreaseProduct = products.map(product => {
      if (product.id !== productToUpdate.id) {
        return product;
      } else {
        return {
          ...productToUpdate,
          numberInStock: productToUpdate.numberInStock--,
        };
      }
    });
    setProducts(decreaseProduct);
    console.log(productToUpdate.numberInStock);
  };

  const increment = productToUpdate => {
    const increaseProduct = products.map(product => {
      if (product.id !== productToUpdate.id) {
        return product;
      } else {
        return {
          ...productToUpdate,
          numberInStock: productToUpdate.numberInStock++,
        };
      }
    });
    setProducts(increaseProduct);
  };

  return (
    <div className="product-container">
      <Stats products={products} />
      <ul>
        {products.map(product => (
          <li className="card">
            <div className="card-body">
              <h6 className="card-title">{product.name}</h6>
              <h6 className="card-title">{product.numberInStock} in Stock</h6>
              <div>
                <button type="button" onClick={() => decrement(product)}>
                  -
                </button>
                <button type="button" onClick={() => increment(product)}>
                  +
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
