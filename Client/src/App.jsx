import React from "react";
import Nav2 from "./components/Nav2";
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
import Banner from './components/Banner';
import Eventedit from './components/Eventedit';
import Tickets from './components/Tickets';
import './App.css';
import Review from './components/Review';
import CardDetails from "./components/CardDetails";
import Register from "./components/Register";
import Login from "./components/Login";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav />} >
        <Route path="/home" element={<Home />} />
        <Route path="/card" element={<CardDetails />} />
        {/* <Route path='/register' element= {<Register/>}/> */}
        <Route path="/changeEmail" element={<ChangeEmail />} />
        <Route path="/Password" element={<Password />} />
        <Route path="/searchResult" element={<SearchResult />} />
        <Route path='/createevent' element={<Eventedit />} />
        <Route path='/event/banner' element={<Banner />} />
        <Route path='/event/tickets' element={<Tickets />} />
        <Route path='/event/review' element={<Review />} />
        </Route>
        <Route path="/nav2" element={<Nav2 />} >
        <Route path="/ticket" element={<Ticket1 />} />
        <Route path="/accountInfo" element={<AcctSettingInfo />} />

        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
              </Routes>
      
    </div>
  );
};

export default App;
