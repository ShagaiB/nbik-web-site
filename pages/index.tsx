import Head from 'next/head'
import React from 'react'
import Footer from '../components/wFooter'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from "next-i18next";
import Image from "next/image";
import CarouselSwitcher from '../components/CarouselSwitcher'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])),
    },
  };
}

const Home = (props) => {
  const { t } = useTranslation();

  return (

    <div>
      <Head>
        <title>NBIK | NATIONAL BUILDING INFRASTRUCTURE KAIZEN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <header className="relative flex items-center justify-center w-full mb-12 overflow-hidden">
      
        <div className="absolute bg-yellow-300  w-full h-full opacity-30 top-0 left-0 z-10"></div>
        <div className="absolute z-20 flex flex-col items-center w-full justify-center h-full">
          <div className="text-white font-bold text-12 lg:text-6xl"></div>
          <div className="text-white text-12 lg:text-2xl mt-2 font-medium"></div>
        </div>
        <div>
          <img src="/images/project.jpg" />
        </div>
      
      </header>


      <div className='container mx-auto'>

        {/* Partners Carousel  */}
        
        <div className='pb-16 p mx-auto '>
          <Carousel additionalTransfrom={0}
            arrows={false}
            autoPlay
            autoPlaySpeed={2500}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            customTransition="all 1s linear"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 768
                },
                items: 5,
                partialVisibilityGutter: 40
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
              },
              tablet: {
                breakpoint: {
                  max: 768,
                  min: 464
                },
                items: 2,
                partialVisibilityGutter: 30
              }
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            transitionDuration={1000}
          >

            <CarouselSwitcher imagePath='/images/partners/hlb.png' />
            <CarouselSwitcher imagePath='/images/partners/kardex.png' />
            <CarouselSwitcher imagePath='/images/partners/lg.png' />
            <CarouselSwitcher imagePath='/images/partners/mmse.png' />
            <CarouselSwitcher imagePath='/images/partners/mona.png' />
            <CarouselSwitcher imagePath='/images/partners/ot.png' />
            <CarouselSwitcher imagePath='/images/partners/samsung.png' />
            <CarouselSwitcher imagePath='/images/partners/shangrila.png' />
            <CarouselSwitcher imagePath='/images/partners/weid.png' />
            <CarouselSwitcher imagePath='/images/partners/worley.png' />
          </Carousel>
        </div>
      </div>
      {/* 
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer> */}
      <div>
        <Footer />
      </div>
    </div>
  )
}
export default Home;
