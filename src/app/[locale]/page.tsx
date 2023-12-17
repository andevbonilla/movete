import { Navbar } from '@/components/Navbar';
import { useTranslations } from 'next-intl';
import { Dela_Gothic_One } from "@next/font/google";
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Stat } from '@/components/Stat';

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
                    <div className='bg-white flex flex-col items-center justify-center text-center text-black'>
                        <Image
                            src={require('@/assets/profile-img-example.jpg')}
                            alt='background image example'
                            className='rounded-full -translate-y-12'
                            width={100}
                            height={100}
                        />
                        <h3 className='-translate-y-12 mt-3 font-bold px-[12%] text-lg'>Alexa</h3>
                        <div className='flex justify-between px-[20%] -translate-y-12 my-3'>
                            <FontAwesomeIcon icon={faGlobe} size='2x' width={22} height={22} className='text-black' />
                            <Image
                                src={require('@/assets/svgs/instagram-svgrepo-com.svg')}
                                alt='intagram svg'
                                className='ml-5'
                                width={22}
                                height={22}
                            />
                            <Image
                                src={require('@/assets/svgs/twitter-boxed-svgrepo-com.svg')}
                                alt='twitter svg'
                                className='ml-5'
                                width={22}
                                height={22}
                            />
                        </div>
                        <p className='-translate-y-12 mt-1 px-[12%]'>{t('alexa-example-desc')}</p>
                    </div>
                    <div className='bg-white text-black'>

                        <Stat />
                        <Stat />
                        <Stat />
                        <Stat />

                    </div>

                </section>
            </main>
        </>
    );
}