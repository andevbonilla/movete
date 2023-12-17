import { Navbar } from '@/components/Navbar';
import { useTranslations } from 'next-intl';
import { Dela_Gothic_One } from "@next/font/google";
import Image from 'next/image';

const robotoFuente = Dela_Gothic_One({
    weight: ["400"], // bold de la fuente
    style: ["normal"],
    subsets: ["latin"]
})

export default function Index() {

    // 1. #001429
    // 2. #00FF8F


    const t = useTranslations('Index');

    return (
        <>
            <Navbar />
            <main className='bg-[#001429] text-white p-[10%]'>
                <section className='mt-[4rem] mb-[5rem]'>
                    <h2 className={`text-4xl ${robotoFuente.className}`}>
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

                <section className='bg-white rounded-2xl'>
                    <Image
                        src={require('@/assets/background-img-example.jpg')}
                        alt='background image example'
                        className='w-full h-32 rounded-t-2xl'
                        width={200}
                        height={50}
                    />
                    <div className='bg-white flex items-center justify-center'>
                        <Image
                            src={require('@/assets/profile-img-example.jpg')}
                            alt='background image example'
                            className='rounded-full -translate-y-12'
                            width={100}
                            height={100}
                        />
                    </div>
                </section>
            </main>
        </>
    );
}