import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import Dropdown from '../components/Dropdown';
import Navbar from '../components/Navbar';
import { appWithTranslation } from 'next-i18next';


const MyApp = ({ Component, pageProps }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener("resize", hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })
  return (

    <div>
      <div className=''>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
      </div>
      <div>

        <Component {...pageProps} />
      </div>

    </div>

  )
}

export default appWithTranslation(MyApp);
