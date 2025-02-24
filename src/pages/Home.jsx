import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonials";
import DarkMode from "../components/DarkMode";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>

      <Banner />
      <Testimonials />
      <DarkMode />
      <Footer />
    </>
  );
};

export default Home;
