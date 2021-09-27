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

export default function Home(props) {
  const { t } = useTranslation();

  return (

    <div>
      <Head>
        <title>NBIK | NATIONAL BUILDING INFRASTRUCTURE KAIZEN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <header className="relative flex items-center justify-center w-auto min-h-screen mb-12 overflow-hidden">
        <div className="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
          {t('home:welcomemsg')}
        </div>
        <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4" />Your browser does not support the video tag.
        </video>
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
