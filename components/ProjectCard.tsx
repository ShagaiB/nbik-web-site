import React from 'react'
import Image from "next/image";

const ProjectCard = ({ project }) => {
    return (
        <div className='flex flex-col px-2 py-2 transition ease-in transform cursor-pointer duration-250 hover:-translate-y-2 hover:shadow-2xl'>
            <div>
                <div>
                    <Image src={project.image_path} alt="logo" layout="responsive" width="400" height='400'
                        quality="100" />
                </div>
                <div className='items-center justify-center my-3 text-center '>
                    {project.name}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
