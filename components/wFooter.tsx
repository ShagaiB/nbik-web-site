import React from 'react'
import { AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin, AiFillYoutube, AiFillMail, AiFillPhone } from "react-icons/ai";
import Image from "next/image";
import logo from '../public/logo.png';
import { useTranslation } from 'next-i18next';

const wFooter = () => {
    const { t } = useTranslation();
    return (
        <>
            <footer className="footer bg-footerbg relative pt-1 border-t-4 border-primary">
                <div className="container mx-auto px-6">
                    <div className='-mt-6 sm:w-1/2 md:w-2/5 lg:w-4/12 h-12 relative bg-social flex flex-row  items-center pl-3' >
                        <p>{t('home:follow')}</p>
                        <div className="flex my-2">
                            <AiFillFacebook className='w-8 h-8 hover:text-white text-black pl-2' />
                            <AiFillTwitterSquare className='w-8 h-8 hover:text-white text-black pl-2' />
                            <AiFillLinkedin className='w-8 h-8 hover:text-white text-black pl-2' />
                            <AiFillYoutube className='w-8 h-8 hover:text-white text-black pl-2' />

                        </div>
                    </div>
                    <div className="sm:flex sm:mt-8">
                        <div className="mt-8 sm:mt-0 sm:items-center mx-auto sm:w-full sm:px-2 flex flex-col md:flex-row justify-between">
                            <div className="flex w-1/3 flex-col">
                                <a href="/">
                                    <Image src={logo} alt="logo" layout="intrinsic" width="100" height='60'
                                        quality="100" />
                                </a>

                            </div>
                            <div className="flex items-center w-full lg:w-1/3 flex-col">
                                <span className="my-1 flex items-center"><AiFillMail className='w-4 h-4 mr-2' />info@nbik.mn</span>
                                <span className="my-1 flex items-center"><AiFillPhone className='w-4 h-4 mr-2' />976-98019797, 976-98029797</span>

                            </div>
                            <div className="flex items-center w-full lg:w-1/3">
                                <span className="my-1">{t('home:address')}</span>
                                

                            </div>
                        </div>
                    </div>
                </div>
                <div className=" px-6 bg-grey-700 text-white">
                    <div className="mt-16  flex flex-col items-center">
                        <div className="sm:w-2/3 text-center py-6">
                            <p className="text-sm mb-2">
                                Copyright © 2021 NBIK LLC All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default wFooter
