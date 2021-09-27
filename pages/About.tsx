import Head from 'next/head'
import React from 'react'
import Footer from '../components/wFooter'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])),
    },
  };
}

const About = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>NBIK | About Us</title>

      </Head>
      <div className="w-full relative">
        <div className="absolute bg-prame-400 w-full h-full opacity-30 top-0 left-0 z-10"></div>
        <div className="absolute z-20 flex flex-col items-center w-full justify-center h-full">
          <div className="text-white font-bold text-12 h-10 lg:text-6xl"></div>
          <div className="text-white font-bold text-12 lg:text-4xl">We Build The Pride</div>
          <div className="text-white text-12 lg:text-2xl mt-2 font-medium">Great team, Qualified construction</div>
        </div>
        <div>
          <img src="/images/aboutbg.jpg" />
        </div>
      </div>
      <div className='container mx-auto'></div>
      <div className='flex items-center justify-center h-screen bg-gray-300'>
        <h1 className='font-black uppercase lg:text-9xl sm:text-2xl'>
          About Page
        </h1>
      </div>
      <div>
        <Footer />
      </div>
    </>

  )
}

export default About
