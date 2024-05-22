'use client'
import React, { useEffect, useState } from 'react'
import Mobile from './Mobile.jsx'
import Desktop from './Desktop.jsx'

const NavBar = () => {
    const [windowWidth, setWindowWidth] = useState('window.innerWidth')

    useEffect(() => {
        const handleResize = () =>{
            setWindowWidth(window.innerWidth)
        } 

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
        
    }, [windowWidth])
  return (
    <div>
        {windowWidth <= 768 ? <Mobile /> : <Desktop />}
    </div>
  )
}

export default NavBar