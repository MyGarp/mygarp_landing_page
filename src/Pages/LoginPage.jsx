import React from 'react'
import Login from '../Componet/Login'
import Navbar2 from '../Componet/ReusableComponent/Navbar2'
import Navbar from '../Componet/ReusableComponent/Navbar'
import Footer from '../Componet/ReusableComponent/Footer'


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