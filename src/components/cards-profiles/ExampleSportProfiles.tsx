"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { ProfileExample } from '../profiles/ProfileExample';

export const ExampleSportProfiles = () => {


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
                                Weight: "100",
                                ExerciseType: "Press",
                                NumReps: "7",
                                metric: "kg"
                            },
                            {
                                Weight: "110",
                                ExerciseType: "Pull Ups",
                                NumReps: "15",
                                metric: "kg"
                            },
                            {
                                Weight: "60",
                                ExerciseType: "Military Press",
                                NumReps: "7",
                                metric: "kg"
                            },
                            {
                                Weight: "90",
                                ExerciseType: "Curl Biceps",
                                NumReps: "6",
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
                        buttonCardio={true}

                    />

                </SwiperSlide>

                <SwiperSlide>

                    <ProfileExample
                        exercises={[]}
                        sportList={{
                            basketball: {
                                teamLogo: "",
                                teamName: "Lakers",
                                position: "Power Forward",
                                points: 3200,
                                triples: 403,
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
                        buttonCardio={true}

                    />

                </SwiperSlide>

                <SwiperSlide>

                    <ProfileExample
                        exercises={[
                            {
                                Weight: "70",
                                ExerciseType: "Diamond push ups",
                                NumReps: "40",
                                metric: "Lb"
                            }
                        ]}
                        sportList={{
                            swimming: {
                                distance: "100",
                                distanceMetric: "KM",
                                time: "25",
                                timeMetric: "Minutes",
                                totalAchivements: "12",
                                bestAchivement: "Medal of my school",
                                bestVideo: ""
                            },
                            athelic: {
                                maxSpeed: "17",
                                maxSpeedMetric: "Mi/h",
                                maxDistance: "12",
                                maxDistanceMetric: "Mi",
                                medals: "3",
                                marathons: "6",
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
                        buttonCardio={true}

                    />

                </SwiperSlide>

            </Swiper>
        </div >
    )
}
