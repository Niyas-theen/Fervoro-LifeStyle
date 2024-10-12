import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Categories from './Components/Categories'
import ExploreSection from './Components/ExploreSection'
import AboutUs from './Components/AboutUs'
import NewCc from './Components/NewCc'
import NewSeasonSection from './Components/NewSeasonSection'


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
    </div>

  )
}

export default App