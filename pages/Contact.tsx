import Head from 'next/head'
import React from 'react'
import Footer from '../components/wFooter'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from "next-i18next";
import { AiFillHome, AiFillMail, AiFillPhone } from "react-icons/ai";


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])),
    },
  };
}

const Contact = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>NBIK | Contact Us</title>

      </Head>

      <div className="w-full relative">
        <div className="absolute bg-prame-400  w-full h-full opacity-30 top-0 left-0 z-10"></div>
        <div className="absolute z-20 flex flex-col items-center w-full justify-center h-full">
          <div className="text-white font-bold text-12 lg:text-6xl">Partnership</div>
          <div className="text-white text-12 lg:text-2xl mt-2 font-medium">Quality construction, Honest service, Great value</div>
        </div>
        <div>
          <img src="/images/contactbg.jpg" />
        </div>
      </div>
      <div className='container mx-auto'>

        <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 md:items-stretch md:space-x-12 bg-white w-full  p-8 sm:px-12 sm:py-10 text-primary overflow-hidden'>
          <div className="md:py-4 flex-grow flex flex-col space-y-8">
            <div className="">
              <h1 className="font-bold text-4xl tracking-wide">{t("home:contact")}</h1>
              <p className=" text-sm pt-2"></p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center">
                <AiFillHome />
                <span className="select-all">{t("home:address")}</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <AiFillPhone />
                <span className="select-all">+976-98019797, 976-98029797</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <AiFillMail />
                <span className="select-all">info@nbik.mn</span>
              </div>

            </div>
          </div>
          <div>
            <div className="relative z-10 w-full md:w-80 h-full bg-white p-8 text-gray-600 rounded-xl shadow-lg">
              <form action="" className="flex flex-col space-y-4">
                <div>
                  <label htmlFor="" className="text-sm">{t("home:name")}</label>
                  <input type="text" placeholder={t("home:name")} className="ring-1 ring-primarylight mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-secondary" />
                </div>
                <div>
                  <label htmlFor="" className="text-sm">{t("home:email")}</label>
                  <input type="text" placeholder={t("home:email")} className="ring-1 ring-primarylight mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-secondary" />
                </div>
                <div>
                  <label htmlFor="" className="text-sm">{t("home:message")}</label>
                  <textarea placeholder={t("home:messagetype")} className="ring-1 ring-primarylight mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-secondary"></textarea>
                </div>
                <button className="inline-block self-end bg-primary text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">{t("home:send")}</button>
              </form>
            </div>
          </div>
        </div>


      </div>
      <div>

        <Footer />
      </div>

    </>
  )
}

export default Contact
