import React, { useState, useEffect } from 'react';
import './ProductList.css';

const ProductList = ({ products, onDelete }) => {
  return (
    <div className="product-list-container">
      <h2 className="list-title"> All Products </h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/200x180?text=No+Image';
                }}
              />
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">₹{Number(product.price).toLocaleString('en-IN')}</p>
              <button
                className="delete-btn"
                onClick={() => onDelete(product.id)}
              >
                🗑 Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {products.length === 0 && (
        <p className="no-products">No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
