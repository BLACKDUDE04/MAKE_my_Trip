import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import { Accordion } from './Components/Accordion/Accordian'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Main/>
   <Accordion/>
   <Footer/>
    </>
    
  )
}

export default App