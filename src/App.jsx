import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Categories from './Components/Categories'
import ExploreSection from './Components/ExploreSection'
import AboutUs from './Components/AboutUs'
import NewCc from './Components/NewCc'
import NewSeasonSection from './Components/NewSeasonSection'
import LifeSyle from './Components/LifeSyle'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <AboutUs />
      <ExploreSection />
      <NewCc />
      <NewSeasonSection />
      <LifeSyle />
      <Footer />
    </div>

  )
}

export default App