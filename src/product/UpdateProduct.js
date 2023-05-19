import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate,useParams} from "react-router-dom";


function UpdateProduct() {
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/products/${id}`);
      setProduct(response.data);
      setProductName(response.data.product_name);
      setDescription(response.data.description);
      setPrice(response.data.price);
    } catch (error) {
      console.error(error);
    }
  };

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
      await axios.put(`http://localhost:8000/api/products/${id}`, {
        product_name: productName,
        description,
        price,
      });
      // Optional: Display a success message or redirect to the product list page
      alert('Product updated successfully!');
      navigate('/');
    } catch (error) {
      console.error(error);
      // Optional: Display an error message or handle the error
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
   <div className="container">
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            name="productName"
            value={productName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price:
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={price}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProduct;
