import React from 'react'
import Image from "next/image";
const ServiceCard = ({ service }) => {

    return (
        <div className='flex flex-col px-2 py-2 transition ease-in transform cursor-pointer duration-250 hover:-translate-y-2 hover:shadow-2xl'>
            <div>
                <div>
                    <Image src={service.image_path} alt="logo" layout="responsive" width="1024" height='683'
                        quality="100" />
                </div>
                <div className='items-center justify-center my-3 text-center '>
                    {service.name}
                </div>
                <div className='my-3'>
                    {service.text}
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
