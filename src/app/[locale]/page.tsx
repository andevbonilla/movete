import { useTranslations } from 'next-intl';
import { Dela_Gothic_One } from "@next/font/google";

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ExampleProfiles } from '@/components/ExampleProfiles';
import Link from 'next/link';
import { Fqas } from '@/components/Fqas';
import { ClaimLink } from '@/components/ClaimLink';

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

                <section className='p-[10%] w-full flex flex-col'>
                    <h2 className={`text-2xl ${delaGothic.className}`}>
                        Create and customize your bio fitness with fitalgo in a short time
                    </h2>
                    <p className='mt-3'>Show everyone how much weight you lift, add your links like tiktok, instagram, website, etc. connect with people with the same interest as you and much more.</p>
                    <Link href={'/en/auth/register/link'}
                        className={`bg-[#00FF8F] mt-4 py-3 px-5 text-center w-full rounded font-extrabold text-lg`}>Get starter</Link>
                </section>

                <section className='p-[10%] w-full flex flex-col'>
                    <h2 className={`text-2xl ${delaGothic.className}`}>
                        The fitness child between linktree and VSCO
                    </h2>
                    <p className='mt-3'>Upload photos of your lifestyle, show what you listen to most when you exercise, add custom buttons like: train with me and meet people with the same interests and much more.</p>
                    <Link href={'/en/auth/register/link'}
                        className={`bg-[#00FF8F] mt-4 py-3 px-5 text-center w-full rounded font-extrabold text-lg`}>Get starter</Link>
                </section>

                <section>
                    <Fqas />
                </section>

            </main>
            <Footer />
        </>
    );
}