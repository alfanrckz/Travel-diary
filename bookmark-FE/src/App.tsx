import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import { Profile } from './pages/Profile';


function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
        
        </Routes>
       
          
       
      </BrowserRouter>
    </>
  )
}

export default App
