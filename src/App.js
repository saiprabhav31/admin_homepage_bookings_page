import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import pagenotfound from "./pagenotfound/pagenotfound";
import "./App.css";
import Nav from "./navbar/nav";
import Mainbody from "./adminhome/mainbody";
import Userpickup from "./userpickup/userpickup";
import Userpayment from "./userpaymentpage/userpayment";
import Adminbookingspage from "./adminbookings/adminbookings";
import Admindriverpage from "./adddriverpage/fullpage";
import Admincarspage from "./adminvehiclepage/adminvehiclemain";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Mainbody />} />
        <Route path="/userpickup" element={<Userpickup />} />
        <Route path="/userpayment" element={<Userpayment />} />
        <Route path="/adminbookings" element={<Adminbookingspage />} />
        <Route path="/admindriverpage/*" element={<Admindriverpage />} />
        <Route path="/admincarspage/*" element={<Admincarspage />} />
        <Route path="*" element={<pagenotfound />} />
      </Routes>
    </Router>
  );
}

export default App;
