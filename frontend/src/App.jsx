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
import UserProfile from "./components/protected/user/UserProfile";
import AdminProfile from "./components/protected/admin/AdminDashboard";
import Users from "./components/protected/admin/Users/Users";
import Inbox from "./components/protected/admin/Inbox/Inbox";
import Verifaction from "./components/protected/admin/Verification/Verifaction";
import Institute from "./components/protected/admin/Institutes/Institute";
import Transation from "./components/protected/admin/Transation/Transation";
import Help from "./components/protected/admin/Help/Help";
import AdminDashboard from "./components/protected/admin/AdminDashboard";
import AdminBatches from "./components/protected/admin/Batches/AdminBatches";

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
        <Route path="/user/profile" element={<UserProfile />}/>
        <Route path="/admin/profile" element={<AdminProfile />}/>
        <Route path="/admin/users" element={<Users />}/>
        <Route path="/admin/dashboard" element={<AdminDashboard />}/>
        <Route path="/admin/inbox" element={<Inbox />}/>
        <Route path="/admin/varification" element={<Verifaction />}/>
        <Route path="/admin/institutes" element={<Institute />}/>
        <Route path="/admin/transation" element={<Transation />}/>
        <Route path="/admin/batches" element={<AdminBatches />}/>
        <Route path="/admin/help" element={<Help />}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
