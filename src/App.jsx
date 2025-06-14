import React from 'react'
import LandingPage from './components/Landing/LandingPage'
import Navbar from './components/Landing/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import About from './components/About/About'
import TechStack from './components/About/TechStack'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  const location = useLocation()

  return (

    <div className='bg-black text-white'>
      <Navbar />
      <Routes>
        <Route path='/'
          element={<>
            <LandingPage key={location} />
            <About />
            <TechStack />
            <Contact />
          </>}
        />
        <Route path='/About' element={<>
          <About key={location} />
          <TechStack key={location} />
          <Contact key={location} />
        </>}
        />
        <Route path='/contact'
          element={<>
            <Contact key={location} />
          </>}
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App