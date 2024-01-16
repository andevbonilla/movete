import { useTranslations } from 'next-intl';
import { Dela_Gothic_One } from "@next/font/google";
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ExampleProfiles } from '@/components/cards-profiles/ExampleProfiles';
import { Fqas } from '@/components/Fqas';
import { ClaimLink } from '@/components/ClaimLink';
import { ExampleSportProfiles } from '@/components/cards-profiles/ExampleSportProfiles';

const delaGothic = Dela_Gothic_One({
    weight: ["400"], // bold de la fuente
    style: ["normal"],
    subsets: ["latin"]
});

export default function Index() {

    // 1. #001429
    // 2. #00FF8F

    const t = useTranslations('Index');
    const navbarTranstalate = useTranslations('Navbar');

    return (
        <>
            <Navbar />
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
                        <ClaimLink />
                    </div>

                    <div className='overflow-hidden mb-10 lg:w-1/2 sm:px-[2%] lg:px-0 xl:px-[2%]'>
                        <ExampleProfiles />
                    </div>

                </section>


                {/* second seccion */}
                <section className="lg:flex-row lg:items-center lg:justify-center lg:flex sm:px-[20%] flex-col w-full px-[10%] mt-32">

                    <div className='lg:w-1/2 lg:mb-0 w-full mb-32'>
                        <h2 className={`text-2xl ${delaGothic.className}`}>
                            Not only show off your stats in the gym but also in the sports you are good at.
                        </h2>
                        <p className='mt-3 mb-8'>Add beautiful cards that show how good you are at one or more sports of your choice.</p>
                        <a
                            href={`${process.env.DASHBOARD_LINK}/register/claim-your-link`}
                            className={`lg:w-auto bg-[#00FF8F] py-3 px-5 text-center rounded font-extrabold text-lg mb-14`}
                        >
                            Get starter
                        </a>
                    </div>

                    <div className='lg:w-1/2 overflow-hidden w-full sm:px-[2%] lg:px-0 xl:px-[2%]'>
                        <ExampleSportProfiles />
                    </div>

                </section>

                {/* third seccion */}
                <section className="lg:flex-row lg:items-center lg:justify-center lg:flex sm:px-[20%] flex-col w-full px-[10%] mt-32">

                    <div className='lg:w-1/2 lg:mb-0 w-full mb-32'>
                        <h2 className={`text-2xl ${delaGothic.className}`}>
                            Create and customize your bio fitness with fitalgo in a short time
                        </h2>
                        <p className='mt-3 mb-8'>Show everyone how much weight you lift, add your links like tiktok, instagram, website, etc. connect with people with the same interest as you and much more.</p>
                        <a
                            href={`${process.env.DASHBOARD_LINK}/register/claim-your-link`}
                            className={`lg:w-auto bg-[#00FF8F] py-3 px-5 text-center rounded font-extrabold text-lg mb-14`}
                        >
                            Get starter
                        </a>
                    </div>

                    <div className='lg:w-1/2 overflow-hidden w-full sm:px-[2%] lg:px-0 xl:px-[2%]'>
                        <ExampleSportProfiles />
                    </div>

                </section>

                {/* fourth seccion */}
                <section className="lg:flex-row lg:items-center lg:justify-center lg:flex sm:px-[20%] flex-col w-full px-[10%] mt-32">

                    <div className='lg:w-1/2 lg:mb-0 w-full mb-32'>
                        <h2 className={`text-2xl ${delaGothic.className}`}>
                            The fitness child between linktree and VSCO
                        </h2>
                        <p className='mt-3 mb-8'>Upload photos of your lifestyle, show what you listen to most when you exercise, add custom buttons like: train with me and meet people with the same interests and much more.</p>
                        <a
                            href={`${process.env.DASHBOARD_LINK}/register/claim-your-link`}
                            className={`lg:w-auto bg-[#00FF8F] py-3 px-5 text-center rounded font-extrabold text-lg mb-14`}
                        >
                            Get starter
                        </a>
                    </div>

                    <div className='lg:w-1/2 overflow-hidden w-full sm:px-[2%] lg:px-0 xl:px-[2%]'>
                        <ExampleSportProfiles />
                    </div>

                </section>

                <section>
                    <Fqas />
                </section>

            </main >
            <Footer />
        </>
    );
}