import React from 'react'
import Login from '../Component/Login'
import Navbar2 from '../Component/ReusableComponent/Navbar2'
import Navbar from '../Component/ReusableComponent/Navbar'
import Footer from '../Component/ReusableComponent/Footer'


const LoginPage = () => {
  return (
    <>
    <Navbar2/>
   <Login/>
    <Footer/>
    </>
  )
}

export default LoginPage