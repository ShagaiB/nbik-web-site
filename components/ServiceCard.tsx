import React from 'react'
import Image from "next/image";
import Link from 'next/link';
const ServiceCard = ({ service, locale }) => {

    return (
        <Link href={{ pathname: '../Service/'+service.slug}} key={service.id}>
            <a>
        <div className='flex flex-col px-2 py-2 transition ease-in transform cursor-pointer duration-250 hover:-translate-y-2 hover:shadow-2xl'>
            <div>
                <div>
                    <img className='object-cover'  src={service.image.url} alt="service.slug" />
                </div>
                <div className='items-center justify-center my-3 text-center '>
                {locale === 'en' ? service.title_en : service.title_mn}
                </div>
                
            </div>
        </div>
        </a>
        </Link>
    )
}

export default ServiceCard
