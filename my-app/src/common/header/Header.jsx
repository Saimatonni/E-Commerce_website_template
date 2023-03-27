import React from 'react'
import Search from './Search'
import Head from './Head'
import Navbar from './Navbar'
import "./Header.css"

const Header = ({CartItem}) => {
  return (
    <>
      <Head/>
      <Search CartItem={CartItem}/>
      <Navbar/>

    </>
  )
}

export default Header
