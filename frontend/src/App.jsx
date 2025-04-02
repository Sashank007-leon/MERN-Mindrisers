import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Footer from "./components/Footer";
import UserList from "./components/UserList";
import User from "./components/User";
import Login from "./components/Login";
import ProductState from "./context/ProductState";
import ThemeState from "./context/ThemeState"; // Import ThemeState
import News from "./components/News";
import Products from "./components/Products";
import Cart from "./components/Cart";
import AddProduct from "./components/AddProduct";

const App = () => {
  return (
    <ThemeState> 
      <ProductState> 
        <div className="transition-all duration-500">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/userlist" element={<UserList />} />
            <Route path=":user_ID/:userName/:userAddress" element={<User />} />
            <Route path="/login" element={<Login />} />
            <Route path="/news" element={<News />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="add-product" element={<AddProduct />} />
          </Routes>
          <Footer />
        </div>
      </ProductState>
    </ThemeState>
  );
};

export default App;
