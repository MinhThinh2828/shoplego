import React from "react";

function ProductList({ products, onProductClick }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div
          key={product.id}
          className="product-item"
          onClick={() => onProductClick(product)}
        >
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
