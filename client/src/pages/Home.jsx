import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {

  return (
    <div>
      <Slider />
      <Categories />
      <Products />
    </div>
  )
}

export default Home
