import React, { useEffect, useState } from 'react'
import "./Navbar.css"

const NavBar = () => {

  const [show, setShow]= useState(false)
  useEffect(()=>
  {
  window.addEventListener("scroll", ()=>
  {
    if(window.scrollY>100)
    {
      setShow(true)
    }
    else{
      setShow(false)
    }
  })
  },[])


  return (
    <div className={`navbar ${show && 'nav_black'}`}>

      <img className='nav_logo' alt='netflix logo' src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' />
      <img className='nav_avatar' alt='avatar' src="/userprofile.png" />  
      
    </div>
  )
}

export default NavBar