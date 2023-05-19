// import logo from './logo.svg'
// import './App.css';
//
// import React from 'react';
// import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
// import { render } from 'react-dom';
//
// import ProductList from './product/ProductList';
// import CreateProduct from "./product/CreateProduct";
// import UpdateProduct from './product/UpdateProduct';
// import Navbar from './layout/Navbar';
// import ViewProduct from "./product/ViewProduct";
//
// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route exact path="/" component={ProductList} />
//         <Route exact path="/create" component={CreateProduct} />
//         <Route exact path="/products/:id" component={ViewProduct} />
//            <Route exact path="/products/:id/edit" component={UpdateProduct} />
//       </Routes>
//     </Router>
//   );
// }
//
// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './product/ProductList';
import CreateProduct from "./product/CreateProduct";
import UpdateProduct from './product/UpdateProduct';
import Navbar from './layout/Navbar';
import ViewProduct from "./product/ViewProduct";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/products/:id" element={<ViewProduct />} />
        <Route path="/products/:id/edit" element={<UpdateProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
