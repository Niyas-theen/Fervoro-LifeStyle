import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Categories from './Components/Categories'
import ExploreSection from './Components/ExploreSection'
import AboutUs from './Components/AboutUs'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <AboutUs />
      <ExploreSection />
    </div>

  )
}

export default App