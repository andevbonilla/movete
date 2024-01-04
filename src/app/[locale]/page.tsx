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

    // palletes
    // 1. bg-white stat-red
    // 1. bg-default stat-green
    // 1. bg-white stat-pink
    // 1. bg-white stat-blue
    // 1. bg-image stat-green
    // 1. bg-image stat-blue

    // 1. #001429
    // 2. #00FF8F

    const t = useTranslations('Index');
    const navbarTranstalate = useTranslations('Navbar');

    return (
        <>
            <Navbar />
            <main className='text-white mt-18'>
                <section className='mt-[4rem] mb-[3rem] p-[10%]'>
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
                </section>

                <section className='overflow-hidden mb-10'>
                    <ExampleProfiles />
                </section>

                {/* second seccion */}
                <section className='p-[10%] w-full flex flex-col'>
                    <h2 className={`text-2xl ${delaGothic.className}`}>
                        Not only show off your stats in the gym but also in the sports you are good at.
                    </h2>
                    <p className='mt-3'>Add beautiful cards that show how good you are at one or more sports of your choice.</p>
                    <a
                        href={`${process.env.DASHBOARD_LINK}/register/claim-your-link`}
                        className={`bg-[#00FF8F] mt-4 py-3 px-5 text-center w-full rounded font-extrabold text-lg mb-14`}
                    >
                        Get starter
                    </a>
                </section>

                <section className='overflow-hidden mb-10'>
                    <ExampleSportProfiles />
                </section>


                <section className='p-[10%] w-full flex flex-col'>
                    <h2 className={`text-2xl ${delaGothic.className}`}>
                        Create and customize your bio fitness with fitalgo in a short time
                    </h2>
                    <p className='mt-3'>Show everyone how much weight you lift, add your links like tiktok, instagram, website, etc. connect with people with the same interest as you and much more.</p>
                    <a
                        href={`${process.env.DASHBOARD_LINK}/register/claim-your-link`}
                        className={`bg-[#00FF8F] mt-4 py-3 px-5 text-center w-full rounded font-extrabold text-lg mb-14`}
                    >
                        Get starter
                    </a>
                </section>

                <section className='p-[10%] w-full flex flex-col'>
                    <h2 className={`text-2xl ${delaGothic.className}`}>
                        The fitness child between linktree and VSCO
                    </h2>
                    <p className='mt-3'>Upload photos of your lifestyle, show what you listen to most when you exercise, add custom buttons like: train with me and meet people with the same interests and much more.</p>
                    <a
                        href={`${process.env.DASHBOARD_LINK}/register/claim-your-link`}
                        className={`bg-[#00FF8F] mt-4 py-3 px-5 text-center w-full rounded font-extrabold text-lg`}
                    >
                        Get starter
                    </a>
                </section>

                <section>
                    <Fqas />
                </section>

            </main>
            <Footer />
        </>
    );
}