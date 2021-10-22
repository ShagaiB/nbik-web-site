import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import logo from '../public/logo.png';
import LocaleSwitcher from './LocalSwitcher';
import { useTranslation } from 'next-i18next';




const Navbar = ({ toggle }) => {
    const { t } = useTranslation();
    return (
        <div className='container mx-auto'>
            <nav className='flex justify-between p-2 items-center'>
                <div className='flex'>
                    <a href="/">
                        <Image src={logo} alt="logo" layout="intrinsic" width="85" height='50'
                            quality="100" />
                    </a>
                </div>
                <div className="px-4 cursor-pointer lg:hidden" onClick={toggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <div className='hidden lg:flex items-center'>
                    <div className="lg:block">
                        <Link href="/"><a className='py-6 px-2 text-primary'>{t('home:start')}</a></Link>
                        <Link href="/About" ><a className='py-6 px-2 text-primary'>{t('home:about')}</a></Link>
                        <Link href="/Service" ><a className='py-6 px-2 text-primary'>{t('home:service')}</a></Link>
                        <Link href="/Project" ><a className='py-6 px-2 text-primary'>{t('home:projects')}</a></Link>
                        <Link href="/Career" ><a className='py-6 px-2 text-primary'>{t('home:career')}</a></Link>
                        <Link href="/Contact" ><a className='py-6 px-2 text-primary'>{t('home:contact')}</a></Link>
                    </div>
                    <div className='lg:block pl-3'><LocaleSwitcher /></div>
                </div>

            </nav>
        </div>
    )
}




export default Navbar
