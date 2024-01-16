"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { ProfileExample } from '../profiles/ProfileExample';

export const ExampleSportProfiles2 = () => {


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
                            {
                                Weight: "90",
                                ExerciseType: "Curl Biceps",
                                NumReps: "6",
                                metric: "kg"
                            },
                        ]}
                        sportList={{}}
                        actualBackColor={0}
                        actualBannerPic={"background-img-2-example.jpg"}
                        actualProfPic={"profile-img-2-example.jpg"}
                        actualName={"Ana"}
                        socialMediaList={["youtube", "instagram", "vsco"]}
                        actualDescription={`"A única maneira de fazer um ótimo trabalho é amar o que você faz." - Steve Jobs`}
                        buttonTrain={true}
                        buttonCardio={true}

                    />

                </SwiperSlide>

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
                            },]}
                        sportList={{}}
                        actualBackColor={0}
                        actualBannerPic={"background-img-2-example.jpg"}
                        actualProfPic={"profile-img-2-example.jpg"}
                        actualName={"James Jones"}
                        socialMediaList={["youtube", "instagram", "vsco"]}
                        actualDescription={"Photographer and Audiovisual Producer"}
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
                            football: {
                                teamLogo: "",
                                teamName: "The north wolves",
                                position: "Wide Receiver",
                                yards: "106",
                                touchdownsPasses: "4007",
                                bestVideo: ""
                            }
                        }}
                        actualBackColor={0}
                        actualBannerPic={"background-img-2-example.jpg"}
                        actualProfPic={"profile-img-2-example.jpg"}
                        actualName={"Sophie Dubois Martin"}
                        socialMediaList={["youtube", "instagram", "vsco"]}
                        actualDescription={"Étudiant au lycée et passionné de football."}
                        buttonTrain={true}
                        buttonCardio={true}

                    />

                </SwiperSlide>

            </Swiper>
        </div >
    )
}
