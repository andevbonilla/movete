"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { ProfileExample } from '../profiles/ProfileExample';

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

                    <ProfileExample
                        exercises={[
                            {
                                Weight: "200",
                                ExerciseType: "Squad",
                                NumReps: "12",
                                metric: "kg"
                            },
                            {
                                Weight: "220",
                                ExerciseType: "Powerlift",
                                NumReps: "2",
                                metric: "kg"
                            },
                        ]}
                        sportList={{}}
                        actualBackColor={0}
                        actualBannerPic={"background-img-2-example.webp"}
                        actualProfPic={"profile-img-2-example.webp"}
                        actualName={"John"}
                        socialMediaList={["youtube", "instagram"]}
                        actualDescription={"Big data engineer and travel lover"}
                        buttonTrain={false}
                        buttonCardio={false}

                    />

                </SwiperSlide>

                <SwiperSlide>

                    <ProfileExample
                        exercises={[
                            {
                                Weight: "200",
                                ExerciseType: "Squad",
                                NumReps: "12",
                                metric: "kg"
                            },
                            {
                                Weight: "220",
                                ExerciseType: "Powerlift",
                                NumReps: "2",
                                metric: "kg"
                            },
                        ]}
                        sportList={{
                            soccer: {
                                teamLogo: "",
                                teamName: "Real Madrid",
                                position: "Striker",
                                goals: "200",
                                attendances: "117",
                                bestVideo: ""
                            }
                        }}
                        actualBackColor={0}
                        actualBannerPic={"background-img-3-example.webp"}
                        actualProfPic={"pedro.webp"}
                        actualName={"Miguel"}
                        socialMediaList={["instagram", "tiktok", "twitter"]}
                        actualDescription={"futuro sr. olimpia, estava a brincar"}
                        buttonTrain={true}
                        buttonCardio={true}

                    />

                </SwiperSlide>

                <SwiperSlide>

                    <ProfileExample
                        exercises={[
                            {
                                Weight: "200",
                                ExerciseType: "Squad",
                                NumReps: "12",
                                metric: "kg"
                            },
                            {
                                Weight: "220",
                                ExerciseType: "Powerlift",
                                NumReps: "2",
                                metric: "kg"
                            },
                        ]}
                        sportList={{}}
                        actualBackColor={0}
                        actualBannerPic={"background-img-example.webp"}
                        actualProfPic={"profile-img-3-example.webp"}
                        actualName={"Sofia Agudelo"}
                        socialMediaList={["youtube", "instagram", "vsco"]}
                        actualDescription={"Abogada y Mama"}
                        buttonTrain={true}
                        buttonCardio={false}

                    />

                </SwiperSlide>

            </Swiper>
        </div >
    )
}
