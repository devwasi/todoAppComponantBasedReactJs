import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from '../../screens/Home/Home'
import About from '../../screens/About/About'

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />            
        </Routes>
    </Router>
  )
}

export default AppRouter