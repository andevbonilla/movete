import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { useTranslations } from 'next-intl';
import React from 'react'

const ContactPage = () => {

    const navarI18n = useTranslations('Navbar');
    const footerI18n = useTranslations('Footer');
    const contactI18n = useTranslations('Footer');

    return (
        <>
            <Navbar
                aboutText={navarI18n('about')}
                searchText={navarI18n('search')}
                dashboardText={navarI18n('dashboard')}
            />
            <main className='md:px-[20%] px-[10%] text-white mt-[8rem]'>
                <h1 className='text-3xl font-bold text-[#00FF8F]'>Contact Us</h1>
                <div className='mt-6'>
                    <h2 className='font-bold text-[#00FF8F] text-opacity-80'>Email:</h2>
                    <p>You can contact us through the following email: <span className='font-bold'>team@movete.me</span></p>
                </div>
            </main>
            <Footer
                title={footerI18n('title')}
                header1={footerI18n("header1")}
                linkAbout={footerI18n("linkAbout")}
                linkContact={footerI18n("linkContact")}
                linkTerms={footerI18n("linkTerms")}
                linkPrivacy={footerI18n("linkPrivacy")}
                header2={footerI18n("header2")}
                copyright={footerI18n("copyright")}
            />
        </>

    )
}

export default ContactPage;