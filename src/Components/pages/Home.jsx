import React from 'react'
import NavBar from '../Navbar/NavBar'
import About from './HomeContainers/About/About'
import Footer from './HomeContainers/copyright/Footer'
import Courses from './HomeContainers/Courses/Courses'
import Header from './HomeContainers/Header/Header'
import PriceTable from './HomeContainers/PriceTable/PriceTable'

const Home = () => {
  return (
    <div>
    <NavBar />
    <Header />
    <About />
    <Courses />
    <PriceTable />
    <Footer />
    </div>
  )
}

export default Home