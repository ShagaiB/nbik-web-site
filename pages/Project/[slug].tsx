import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from "next-i18next";
import Footer from '../../components/wFooter'
const ProjectPost = ({ project }) => {
    console.log(project[0].title_mn)
    return (
        <div className=''>
        <div className="w-full relative">
            <div className="absolute bg-yellow-300  w-full h-full opacity-30 top-0 left-0 z-10"></div>
            <div className="absolute z-20 flex flex-col items-center w-full justify-center h-full">
            </div>
            <div>
                <img src={project[0].heroimage.url} />
            </div>
            
        </div>
        <div className='w-2/4 sm:w-3/4 mx-auto my-10'>
            <h1 className='mb-4 text-xl'>{project[0].title_mn}</h1>
            <div className='text-justify'>
                {project[0].content_mn}
            </div>
        </div>
        <Footer />
        </div>
    )
}
export default ProjectPost
export async function getStaticPaths() {
    const res = await fetch('https://nbik-strapi.herokuapp.com/projects');
    const projects = await res.json();
    const paths = projects.map((project) => ({
        params: {
            slug: project.slug
        },
    }));
    return {
        paths,
        fallback: false,
    }
}


export async function getStaticProps({ params, locale }) {
    const { slug } = params;
    const res = await fetch("https://nbik-strapi.herokuapp.com/projects?slug=" + slug)
    console.log(res)
    const project = await res.json();

    return {
        props: {
            ...(await serverSideTranslations(locale, ['home'])),
            project,

        }
    }
}

