import { useTranslations } from 'next-intl';
import { Dela_Gothic_One } from "@next/font/google";
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ExampleProfiles } from '@/components/cards-profiles/ExampleProfiles';
import { Fqas } from '@/components/Fqas';
import { ClaimLink } from '@/components/ClaimLink';
import Image from 'next/image';
import { DashboardExample } from '@/components/mini-dashboard/DashboardExample';

const delaGothic = Dela_Gothic_One({
    weight: ["400"], // bold de la fuente
    style: ["normal"],
    subsets: ["latin"]
});

export default function Index() {

    // 1. #001429
    // 2. #00FF8F

    const t = useTranslations('Index');
    const navarI18n = useTranslations('Navbar');
    const claimLinkI18n = useTranslations('ClaimYourLink');
    const secctionTwoI18n = useTranslations('SecctionTwo');
    const secctionThreeI18n = useTranslations('SecctionThree');
    const secctionFourthI18n = useTranslations('FourthSection');
    const footerI18n = useTranslations('Footer');

    return (
        <>
            <Navbar
                aboutText={navarI18n('about')}
                searchText={navarI18n('search')}
                dashboardText={navarI18n('dashboard')}
            />
            <main className='text-white mt-18'>

                <section className='lg:mt-[8rem] lg:flex lg:justify-between lg:items-center md:px-[20%] sm:px-[12%] px-[10%]'>

                    <div className='px-0 mt-[4rem] mb-[3rem] py-[5rem] lg:w-1/2 lg:mr-10 md:px-[10%] lg:px-0'>
                        <h2 className={`text-4xl ${delaGothic.className}`}>
                            {t('presentation-part1')}
                            <span className='beautiful-underline'>{t('presentation-part2')}</span>
                            {t('presentation-part3')}
                            <span className='beautiful-underline'>{t('presentation-part4')}</span>
                            {t('presentation-part5')}
                            <span className='beautiful-underline'>{t('presentation-part6')}</span>
                            {t('presentation-part7')}
                            <span className='beautiful-underline'>{t('presentation-part8')}</span>
                        </h2>
                        <p className={`text-xl mt-6 text-opacity-50`}>
                            {t('sub-presentation')}
                        </p>
                        <ClaimLink
                            placeholderText={claimLinkI18n('placeholder')}
                            buttonText={claimLinkI18n('button')}
                        />
                    </div>

                    <div className='overflow-hidden mb-10 lg:w-1/2 sm:px-[2%] lg:px-0 xl:px-[2%]'>
                        <ExampleProfiles />
                    </div>

                </section>


                {/* second seccion */}
                <section className="lg:items-center lg:justify-between lg:flex sm:px-[20%] w-full px-[10%] mt-32">

                    <div className='lg:w-1/2 lg:mb-0 w-full mb-32'>
                        <h2 className={`text-2xl ${delaGothic.className}`}>
                            {secctionTwoI18n('title')}
                        </h2>
                        <p className='mt-3 mb-8'>{secctionTwoI18n('description')}</p>
                        <a
                            href={`${process.env.DASHBOARD_LINK}/register/claim-your-link`}
                            className={`lg:w-auto bg-[#00FF8F] py-3 px-5 text-center rounded font-extrabold text-lg mb-14`}
                        >
                            {secctionTwoI18n('button')}
                        </a>
                    </div>

                    <div className='lg:w-1/2 overflow-hidden w-full sm:px-[2%] lg:px-0 xl:px-[2%]'>
                        <Image
                            src={require(`@/assets/sports-stats-example.jpg`)}
                            alt='online page'
                            width={1000}
                            height={1000}
                            className='lg:ml-6'
                        />
                    </div>

                </section>

                {/* third seccion */}
                <section className="sm:px-[20%] w-full px-[10%] mt-32">

                    <div className='text-center w-full mb-32'>
                        <h2 className={`text-3xl ${delaGothic.className}`}>
                            {secctionThreeI18n('title')}
                        </h2>
                        <p className='mt-6 mb-8 lg:px-[12%]'>{secctionThreeI18n("description")}</p>
                    </div>

                    <DashboardExample />

                </section>

                {/* fourth seccion */}
                <section className="lg:flex-row lg:items-center lg:justify-center lg:flex sm:px-[20%] flex-col w-full px-[10%] mt-32">

                    <div className='lg:w-1/2 lg:mb-0 w-full mb-32'>
                        <h2 className={`text-2xl ${delaGothic.className}`}>
                            {secctionFourthI18n("title")}
                        </h2>
                        <p className='mt-3 mb-8'>{secctionFourthI18n("description")}</p>
                        <a
                            href={`${process.env.DASHBOARD_LINK}/register/claim-your-link`}
                            className={`lg:w-auto bg-[#00FF8F] py-3 px-5 text-center rounded font-extrabold text-lg mb-14`}
                        >
                            {secctionTwoI18n('button')}
                        </a>
                    </div>

                    <div className='lg:w-1/2 overflow-hidden w-full sm:px-[2%] lg:px-0 xl:px-[2%]'>
                        <div className='w-[10rem] h-[10rem] bg-pink-300'></div>
                    </div>

                </section>

                <section>
                    <Fqas />
                </section>

            </main >
            <Footer
                title={footerI18n('title')}
                header1={footerI18n("header1")}
                linkAbout={footerI18n("linkAbout")}
                linkContact={footerI18n("linkContact")}
                linkSupport={footerI18n("linkSupport")}
                header2={footerI18n("header2")}
                copyright={footerI18n("copyright")}
            />
        </>
    );
}