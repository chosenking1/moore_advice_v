import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate, useParams, } from "react-router-dom";

function ViewProduct() {
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:8070/api/products/${id}`);
      console.log(response.data);
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8070/api/products/${id}`);
      // Optional: Display a success message or redirect to the product list page
      alert('Product deleted successfully!');
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
      <h2>View Product</h2>
      <p>
        <strong>Product Name:</strong> {product.product_name}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
      <p>
        <strong>Price:</strong> {product.price}
      </p>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default ViewProduct;
