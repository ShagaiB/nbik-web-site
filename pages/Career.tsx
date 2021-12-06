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

const Career = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>NBIK | Career</title>

      </Head>
      <div className="w-full relative">
        <div className="absolute bg-yellow-300  w-full h-full opacity-30 top-0 left-0 z-10"></div>
        <div className="absolute z-20 flex flex-col items-center w-full justify-center h-full">
          <div className="text-white font-bold text-12 lg:text-6xl">Discover the World</div>
          <div className="text-white text-12 lg:text-2xl mt-2 font-medium">Building your visions creating reality</div>
        </div>
        <div>
          <img src="/images/project.jpg" />
        </div>
      </div>
      <div className='container mx-auto'>
      <div className="w-full md:w-3/5 mx-auto p-8">
         Coming Soon
       </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Career
