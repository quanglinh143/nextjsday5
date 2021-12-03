import Head from 'next/head'
import React from 'react'
import Banner from '../components/banner/Banner'
import Header from '../components/header/Header'
import Logo from '../components/logo/Logo'
const Homepage = () => {
  return (
    <div> 
      <Header/>
      <Logo/>
      <Banner/>
    </div>
      
  )
}

export default Homepage

