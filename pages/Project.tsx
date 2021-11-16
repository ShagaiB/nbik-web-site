import Head from 'next/head'
import React, { useState } from 'react'
import Footer from '../components/wFooter'
import { ubprojects as projectsData } from "../data";
import { otprojects as projectsotData } from "../data";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from "next-i18next";
import { GET_ALL_OT_PROJECTS } from '../components/queries';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import ProjectCard from '../components/ProjectCard';
import { useRouter } from 'next/router';

const Project = (projectlist) => {
    const { t } = useTranslation();
    const [projects] = useState(projectsData);
    const [otprojects] = useState(projectsotData);
    // console.log(projectlist.projectlist)
    const router = useRouter()
    const { locale: activeLocale } = router
    return (
        <>
            <Head>
                <title>NBIK | Projects</title>
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

                {/* Ub tosluud */}
                <div className='px-3 mt-10'>
                    <span className='text-2xl'>Улаанбаатар болон бусад төслүүд</span>
                    <div className='h-1 mt-2 bg-secondary'>
                    </div>
                </div>
                <div className='grid pt-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                {
                        projectlist.projectlist.map((projectub) => (
                            
                            projectub.categories[0].name == "ub" ?
                                <div className='m-4' key={projectub.id}>
                                    <ProjectCard project={projectub} locale={activeLocale} key={projectub.id} />
                                </div>
                                : null
                        )
                        )
                    }
                </div>
                {/* OT tosluud */}
                <div className='px-3 mt-3'>
                    <span className='text-2xl'>Оюу Толгой дахь төслүүд</span>
                    <div className='h-1 mt-2 bg-secondary'>
                    </div>
                </div>
                <div className='grid pt-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                    {
                        projectlist.projectlist.map((projectot) => (
                            projectot.categories[0].name == "ot" ?
                                <div className='m-4' key={projectot.id}>
                                    <ProjectCard project={projectot} locale={activeLocale} key={projectot.id} />
                                </div>
                                : null
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
    const client = new ApolloClient({
        uri: process.env.STRAPI_GRAPHQL_API,
        cache: new InMemoryCache(),
    });

    const { data } = await client.query({
        query: GET_ALL_OT_PROJECTS,
    });
    console.log("unshij duusav");

    return {
        props: {

            ...(await serverSideTranslations(locale, ['home'])),
            projectlist: data.projects,
        },
    };

}



export default Project