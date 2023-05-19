import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate, } from "react-router-dom";

function CreateProduct() {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'productName') {
      setProductName(value);
    } else if (name === 'description') {
      setDescription(value);
    } else if (name === 'price') {
      setPrice(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/products/create', {
        product_name: productName,
        description,
        price,
      });
      // Optional: Display a success message or redirect to the product list page
      alert('Product created successfully!');
      navigate('/');
    } catch (error) {
      console.error(error);
      // Optional: Display an error message or handle the error
    }
  };

  return (
     <div className="container">
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name:</label>
          <input
            type="text"
            name="productName"
            value={productName}
            className="form-control"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={description}
            className="form-control"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={price}
            className="form-control"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Create</button>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
