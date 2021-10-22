import React from 'react'
import Link from 'next/link';

const ProjectCard = ({ project, locale}) => {
  
    return (
        
        
        <Link href={{ pathname: '../Project/'+project.slug}} key={project.id}>
            <a>
                <div className='flex flex-col px-2 py-2 transition ease-in transform cursor-pointer duration-250 hover:-translate-y-2 hover:shadow-2xl'>
                    <div>
                        <div>
                            <img src={project.image.url} alt="logo" width={400} height={400}
                            />
                        </div>
                        <div className='items-center justify-center my-3 text-center '>
                            {locale === 'en' ? project.title_en : project.title_mn}
                        </div>
                    </div>
                </div>
            </a>
        </Link>
        
    )
}

export default ProjectCard
