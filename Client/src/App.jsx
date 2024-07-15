import React from 'react';
import AcctSettingInfo from './components/AcctSettingInfo';
import { Route, Routes } from 'react-router-dom';
import ChangeEmail from './components/ChangeEmail';
import Password from './components/Password';


const App =()=>{
  return(
    <div>
      <Routes>
        <Route path="/accountInfo" element={<AcctSettingInfo />}/>
        <Route path='/changeEmail' element={<ChangeEmail />}/>
        <Route path='/Password' element={<Password />}/>
      </Routes>
    </div>
  )
}

export default App