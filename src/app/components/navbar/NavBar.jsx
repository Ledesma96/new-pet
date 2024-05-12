'use client'
import React, { useEffect, useState } from 'react'
import Mobile from './Mobile.jsx'
import { PillTabs } from './PillTabs.jsx'

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
        
    }, [])
  return (
    <div>
        {windowWidth < 768 ? <Mobile /> : <PillTabs/>}
    </div>
  )
}

export default NavBar