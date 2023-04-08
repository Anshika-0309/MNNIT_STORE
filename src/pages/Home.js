import React from 'react'
import Announcements from '../components/Announcements'
import Categories from '../components/Categories'
import CategoriesBar from '../components/CategoriesBar'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Slider from '../components/Slider'
import Stationery from '../pages/Stationery'
import Item from '../pages/Item'
import Login from '../pages/Login'

const Home = () => {
  return (
    <div>
        <Announcements/>
        <Navbar/>
        {/* <Categories/> */}
        <CategoriesBar/>
        <Slider/>
        {/* <Login/> */}
        <Categories/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home