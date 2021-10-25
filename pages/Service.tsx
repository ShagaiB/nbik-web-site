import Head from 'next/head'
import React, { useState } from 'react'
import ServiceCard from '../components/ServiceCard';
import Footer from '../components/wFooter'
import { nbikservices as servicesData } from "../data";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from "next-i18next";
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_ALL_SERVICES } from '../components/queries';
import { useRouter } from 'next/router';


const Service = (servicelist) => {
    const { t } = useTranslation();
    const [services] = useState(servicesData);
    console.log({ servicesData });
    const router = useRouter()
    const { locale: activeLocale } = router
    return (
        <>
            <Head>
                <title>NBIK | Service</title>
            </Head>
            <div className="w-full relative">
                <div className="absolute bg-yellow-300  w-full h-full opacity-30 top-0 left-0 z-10"></div>
                <div className="absolute z-20 flex flex-col items-center w-full justify-center h-full">
                    <div className="text-white font-bold text-12 lg:text-6xl">Growth</div>
                    <div className="text-white text-12 lg:text-2xl mt-2 font-medium">Developing our people, growing our business</div>
                </div>
                <div>
                    <img src="/images/servicebg.jpg" />
                </div>
            </div>
            <div className='container mx-auto'>
                {/* Services */}
                <div className='px-3 mt-16'>
                    <span className='text-2xl'></span>
                    <div className='h-1 mt-2 bg-yellow-600'>
                    </div>
                </div>
                <div className='grid pt-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                {
                        servicelist.servicelist.map((service) => (
                            
                                <div className='m-4' key={service.id}>
                                    <ServiceCard service={service} locale={activeLocale} key={service.id} />
                                </div>
                    
                        )
                        )
                    }
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export const getStaticProps = async ({ locale }) => {
    console.log("server achaallaa");
    const client1 = new ApolloClient({
        uri: process.env.STRAPI_GRAPHQL_API,
        cache: new InMemoryCache(),
    });

    const { data } = await client1.query({
        query: GET_ALL_SERVICES,
    });
    console.log("unshij duusav");
    return {
        props: {

            ...(await serverSideTranslations(locale, ['home'])),
            servicelist: data.services,
        },
    };

}

export default Service
