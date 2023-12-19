import { useTranslations } from 'next-intl';
import { Dela_Gothic_One } from "@next/font/google";

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ExampleProfiles } from '@/components/ExampleProfiles';

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
            <main className='text-white mt-10'>
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
                    <div>
                        <div className='w-full flex items-center justify-start bg-white py-3 px-4 text-black rounded mt-4 text-lg'>
                            <span className='font-bold'>fitalgo.com/</span>
                            <input className='w-full' type="text" placeholder={`${t('yourname-placeholder')}`} />
                        </div>
                        <button className={`bg-[#00FF8F] mt-4 py-3 px-5 text-center w-full rounded font-extrabold text-lg`}>{t('get-url')}</button>
                    </div>
                </section>

                <div className='overflow-hidden mb-10'>
                    <ExampleProfiles />
                </div>

            </main>
            <Footer />
        </>
    );
}