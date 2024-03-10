import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Services from "./components/Service/Services";
import Batches from "./components/Batches/Batches";
import Organization from "./components/Organization/Organization";
import SeeAllInstitutes from "./components/Organization/See all/SeeAllInstitutes";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/batches" element={<Batches />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/organization" element={<Organization />} />
        <Route path="/organization/all-institutes" element={<SeeAllInstitutes />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
