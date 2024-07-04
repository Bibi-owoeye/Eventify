import { Route, Routes } from 'react-router-dom'
import React from 'react'
import './index.css'
import Home from './components/Home'
import SearchResult from './components/SearchResult'
import Footer from './components/Footer'



const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/searchResult' element={<SearchResult/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App