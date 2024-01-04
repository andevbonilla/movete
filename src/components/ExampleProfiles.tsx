"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { ExampleProfileOne } from './profiles/ProfileOne';

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

                    <ExampleProfileOne
                        username={"Alexa"}
                        desc='Professional powerlifter & proud mother of three beautiful children.'
                        imgUrl='profile-img-1-example.jpg'
                        bannerUrl='background-img-2-example.jpg'
                        exercises={[
                            {
                                name: "Squads",
                                reps: 1,
                                weight: 230,
                                metric: "kg"
                            },
                            {
                                name: "Calf Raises",
                                reps: 7,
                                weight: 150,
                                metric: "kg"
                            },
                            {
                                name: "Hack Squats",
                                reps: 6,
                                weight: 100,
                                metric: "kg"
                            },
                            {
                                name: "Hip Thrusts",
                                reps: 6,
                                weight: 186,
                                metric: "kg"
                            }
                        ]}
                        socialMedia={["youtube", "twich", "instagram", "twitter"]}
                    />


                </SwiperSlide>

                <SwiperSlide>

                    <ExampleProfileOne
                        username={"Jose"}
                        desc='Medical student - Living in Japan 🏯.'
                        imgUrl='profile-img-2-example.jpg'
                        bannerUrl='background-img-example.jpg'
                        exercises={[
                            {
                                name: "Squads",
                                reps: 8,
                                weight: 110,
                                metric: "kg"
                            },
                            {
                                name: "Bicep Curls",
                                reps: 4,
                                weight: 45,
                                metric: "kg"
                            },
                            {
                                name: "Pull-ups",
                                reps: 3,
                                weight: 66,
                                metric: "kg"
                            },
                            {
                                name: "Push-ups",
                                reps: 6,
                                weight: 189,
                                metric: "kg"
                            },
                            {
                                name: "Deadlifts",
                                reps: 9,
                                weight: 103,
                                metric: "kg"
                            },
                            {
                                name: "Military Press",
                                reps: 12,
                                weight: 200,
                                metric: "kg"
                            }
                        ]}
                        socialMedia={["instagram", "twitter", "facebook"]}
                    />


                </SwiperSlide>

                <SwiperSlide>

                    <ExampleProfileOne
                        username={"Mohamed"}
                        desc='Professor of Mathematics, Phd in Physics'
                        imgUrl='profile-img-3-example.jpg'
                        bannerUrl='background-img-3-example.jpg'
                        exercises={[
                            {
                                name: "Bench Press",
                                reps: 10,
                                weight: 67,
                                metric: "Lb"
                            },
                            {
                                name: "Squads",
                                reps: 11,
                                weight: 40,
                                metric: "Lb"
                            },
                            {
                                name: "Hack Squats",
                                reps: 3,
                                weight: 55,
                                metric: "Lb"
                            },
                            {
                                name: "Calf Raises",
                                reps: 7,
                                weight: 120,
                                metric: "Lb"
                            }]}
                        socialMedia={["website", "twitter"]}
                    />


                </SwiperSlide>

            </Swiper>
        </div >
    )
}
