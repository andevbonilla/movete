import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { useTranslations } from 'next-intl';

const TOSpage = () => {

    const navarI18n = useTranslations('Navbar');
    const footerI18n = useTranslations('Footer');
    const terms = useTranslations('TermsAndConditions');


    return (
        <>
            <Navbar
                aboutText={navarI18n('about')}
                searchText={navarI18n('search')}
                dashboardText={navarI18n('dashboard')}
            />

            <main className="md:px-[20%] px-[10%] text-white mt-40"><h1 className="font-bold text-3xl mt-4 text-[#00FF8F]">{terms("title")}</h1><p className="py-4">{terms("contentSection1")}</p><h2 className="font-bold text-2xl text-[#00FF8F]">{terms("headerSection2")}</h2><p className="py-4">{terms("contentSection2")}</p><h2 className="font-bold text-2xl text-[#00FF8F]">{terms("headerSection3")}</h2><p className="py-4">{terms("contentSection3")}</p><h2 className="font-bold text-2xl text-[#00FF8F]">{terms("headerSection4")}</h2><p className="py-4">{terms("contentSection4")}</p><h2 className="font-bold text-2xl text-[#00FF8F]">{terms("headerSection5")}</h2><p className="py-4">{terms("contentSection5")}</p></main>

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

export default TOSpage;
