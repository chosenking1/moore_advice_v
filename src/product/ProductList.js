import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewProduct from "./ViewProduct";


function ProductList() {
  const [products, setProducts] = useState([]);

    useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h2>Product List</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <a href={`/products/${product.id}`} className="btn btn-primary">View</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProductList;


