
import React from 'react'
import Nav from './components/Nav'
import { Route , Routes } from 'react-router'
import Ticket1 from './components/Ticket1'
// import Register from './components/Register'
// import Card from './components/Card'
import ChangeEmail from './components/ChangeEmail';
import Password from './components/Password';
import AcctSettingInfo from './components/AcctSettingInfo';
import CardDetails from './components/CardDetails'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element= {<Nav/>}/>
        <Route path='/ticket' element= {<Ticket1/>}/>
        <Route path='/card' element= {<CardDetails/>}/>
        {/* <Route path='/register' element= {<Register/>}/> */}
        <Route path="/accountInfo" element={<AcctSettingInfo />}/>
        <Route path='/changeEmail' element={<ChangeEmail />}/>
        <Route path='/Password' element={<Password />}/>
      </Routes>
    </div>
  )
}

export default App