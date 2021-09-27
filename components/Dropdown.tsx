import React from 'react'
import Link from 'next/link';
import LocaleSwitcher from './LocalSwitcher';
import { useTranslation } from 'next-i18next';

function Dropdown({ isOpen, toggle }) {
    const { t } = useTranslation();
    return (
        <div className={isOpen ? 'grid items-center grid-rows-4 text-center bg-prame-200' : 'hidden'} onClick={toggle}>
            <Link href="/" ><a className='p-4'>{t('home:start')}</a></Link>
            <Link href="/About" ><a className='p-4'>{t('home:about')}</a></Link>
            <Link href="/Service" ><a className='p-4'>{t('home:service')}</a></Link>
            <Link href="/Project" ><a className='p-4'>{t('home:projects')}</a></Link>
            <Link href="/Career" ><a className='p-4'>{t('home:career')}</a></Link>
            <Link href="/Contact" ><a className='p-4'>{t('home:contact')}</a></Link>
            <div className='mx-auto p-4'><LocaleSwitcher /></div>
        </div>
    )
}

export default Dropdown
