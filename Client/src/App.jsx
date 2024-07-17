import React from "react";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import Footer from "./components/Footer";
import Ticket1 from "./components/Ticket1";
// import Register from './components/Register'
// import Card from './components/Card'
import ChangeEmail from "./components/ChangeEmail";
import Password from "./components/Password";
import AcctSettingInfo from "./components/AcctSettingInfo";
import Banner from './Components/Banner';
import Eventedit from './Components/Eventedit';
import Tickets from './Components/Tickets';
import './App.css';
import Review from './Components/Review';
import CardDetails from "./components/CardDetails";

const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Nav />} > */}
        {/* </Route> */}
        <Route path="/" element={<Home />} />
        <Route path="/ticket" element={<Ticket1 />} />
        <Route path="/card" element={<CardDetails />} />
        {/* <Route path='/register' element= {<Register/>}/> */}
        <Route path="/accountInfo" element={<AcctSettingInfo />} />
        <Route path="/changeEmail" element={<ChangeEmail />} />
        <Route path="/Password" element={<Password />} />
        <Route path="/searchResult" element={<SearchResult />} />
        <Route path='/event/home' element={<Eventedit />} />
        <Route path='/event/banner' element={<Banner />} />
        <Route path='/event/tickets' element={<Tickets />} />
        <Route path='/event/review' element={<Review />} />
              </Routes>
      <Footer />
    </div>
  );
};

export default App;
