import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { useTranslations } from 'next-intl';
import React from 'react'

const PrivacyPage = () => {

    const navarI18n = useTranslations('Navbar');
    const footerI18n = useTranslations('Footer');
    const privacy = useTranslations('PrivacyPolicy');

    return (
        <>
            <Navbar
                aboutText={navarI18n('about')}
                searchText={navarI18n('search')}
                dashboardText={navarI18n('dashboard')}
            />
            <main className="md:px-[20%] px-[10%] text-white mt-40"><h1 className="font-bold text-3xl mt-4 text-[#00FF8F]">{privacy('title')}</h1><p className="py-4">{privacy("contentSection1")}</p><h2 className="font-bold text-2xl text-[#00FF8F]">{privacy("headerSection2")}</h2><p className="py-4">{privacy("contentSection2")}</p><h2 className="font-bold text-2xl text-[#00FF8F]">{privacy("headerSection3")}</h2><p className="py-4">{privacy("contentSection3")}</p><h2 className="font-bold text-2xl text-[#00FF8F]">{privacy("headerSection4")}</h2><p className="py-4">{privacy("contentSection4")}</p><h2 className="font-bold text-2xl text-[#00FF8F]">{privacy("headerSection5")}</h2><p className="py-4">{privacy("contentSection5")}</p><h2 className="font-bold text-2xl text-[#00FF8F]">{privacy("headerSection6")}</h2><p className="py-4">{privacy("contentSection6")}</p></main>
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
};

export default PrivacyPage;
