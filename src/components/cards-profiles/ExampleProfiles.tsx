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
                        actualBannerPic={"background-img-2-example.jpg"}
                        actualProfPic={"profile-img-2-example.jpg"}
                        actualName={"John"}
                        socialMediaList={["youtube", "instagram", "vsco"]}
                        actualDescription={"Happy person"}
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
                        actualBannerPic={"background-img-2-example.jpg"}
                        actualProfPic={"profile-img-2-example.jpg"}
                        actualName={"John"}
                        socialMediaList={["youtube", "instagram", "vsco"]}
                        actualDescription={"Happy person"}
                        buttonTrain={true}
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
                        sportList={{}}
                        actualBackColor={0}
                        actualBannerPic={"background-img-2-example.jpg"}
                        actualProfPic={"profile-img-2-example.jpg"}
                        actualName={"John"}
                        socialMediaList={["youtube", "instagram", "vsco"]}
                        actualDescription={"Happy person"}
                        buttonTrain={false}
                        buttonCardio={false}

                    />

                </SwiperSlide>

            </Swiper>
        </div >
    )
}
