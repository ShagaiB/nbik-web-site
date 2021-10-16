import React from 'react'


const ProjectCard = ({ project, locale }) => {
   
const url = process.env.STRAPI_API
    return (
        <div className='flex flex-col px-2 py-2 transition ease-in transform cursor-pointer duration-250 hover:-translate-y-2 hover:shadow-2xl'>
            <div>
                <div>
                    <img src={process.env.STRAPI_API + project.thumbnail.url} alt="logo" width={400} height={400}
                         />
                </div>
                <div className='items-center justify-center my-3 text-center '>
                    {locale === 'en'?project.title_en:project.title_mn}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
