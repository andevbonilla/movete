"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { ExampleProfile } from './ExplampleProfile';

export const ExampleProfiles = () => {


    return (
        <div className='mx-[12%]'>

            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
                initialSlide={1}
            >
                <SwiperSlide>

                    <ExampleProfile
                        username={"Alexa"}
                        desc='Professional powerlifter & proud mother of three.'
                        imgUrl='profile-img-1-example.jpg'
                        bannerUrl='background-img-example.jpg'
                        colorPalette={0}
                    />


                </SwiperSlide>

                <SwiperSlide>

                    <ExampleProfile
                        username={"Jose"}
                        desc='Medical student and passionate about the world.'
                        imgUrl='profile-img-2-example.jpg'
                        bannerUrl='background-img-2-example.jpg'
                        colorPalette={0}
                    />


                </SwiperSlide>

                <SwiperSlide>

                    <ExampleProfile
                        username={"Mohamed"}
                        desc='Professor of Mathematics, Phd in Physics'
                        imgUrl='profile-img-3-example.jpg'
                        bannerUrl='background-img-3-example.jpg'
                        colorPalette={0}
                    />


                </SwiperSlide>

            </Swiper>
        </div >
    )
}
