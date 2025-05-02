import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Home, LoginPage } from "./Routes/route.js";
import {
  SignupPage,
  CreateProduct,
  MyProducts,
  Cart,
  ProductDetails,
  Profile,
  CreateAddress,
} from "./Routes/route.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/product" element={<CreateProduct />} />
        <Route path="/product/:id" element={<CreateProduct />} />
        <Route path="/cart" element={<MyProducts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-address" element={<CreateAddress />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
