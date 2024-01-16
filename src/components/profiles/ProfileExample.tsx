import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faFacebook, faInstagram, faLinkedin, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { ProfileInterface } from '@/interfaces/ProfileInterface';
import { VscoSVG } from '@/lib/Svgs';
import { GymStat } from '../stats/GymStat';
import { SoccerCard } from '../sport-cards/SoccerCard';
import { BasketCard } from '../sport-cards/BasketCard';
import { AthleticCard } from '../sport-cards/AthelticCard';
import { SwimmingCard } from '../sport-cards/SwimmingCard';
import { FootballCard } from '../sport-cards/FootballCard';
import Image from 'next/image';

export const ProfileExample = ({ exercises, sportList, actualBackColor, actualBannerPic, actualProfPic, actualName, socialMediaList, actualDescription, buttonTrain, buttonCardio }: ProfileInterface) => {

    return (

        <div className={`um:h-[25rem] sm:h-[35rem] rounded-t-2xl overflow-y-scroll text-black pb-[12rem] ${(actualBackColor === 0) ? "bg-white text-black" : "bg-[#001429] text-white"}`}>
            <Image
                src={require(`@/assets/${actualBannerPic}`)}
                alt='profile banner picture'
                className='w-full h-[8rem] rounded-t-2xl'
            />
            <div className={`flex flex-col items-center justify-center text-center`}>

                <Image
                    src={require(`@/assets/${actualProfPic}`)}
                    alt='background image example'
                    className='rounded-full -translate-y-12 w-[6rem] h-[6rem] p-1 bg-white'
                />

                <h3 className={`-translate-y-12 mt-3 font-bold px-[12%] text-lg`}>{actualName}</h3>

                {/* icons of social media */}
                <div className='flex justify-center items-center px-[20%] -translate-y-12 my-3'>

                    {
                        (socialMediaList.includes("instagram")) && <FontAwesomeIcon className='mx-2' icon={faInstagram} size='2x' width={22} height={22} />

                    }

                    {
                        (socialMediaList.includes("website")) && <FontAwesomeIcon className='mx-2' icon={faGlobe} size='2x' width={22} height={22} />
                    }

                    {
                        (socialMediaList.includes("facebook")) && <FontAwesomeIcon className='mx-2' icon={faFacebook} size='2x' width={22} height={22} />
                    }

                    {
                        (socialMediaList.includes("twich")) && <FontAwesomeIcon className='mx-2' icon={faTwitch} size='2x' width={22} height={22} />
                    }

                    {
                        (socialMediaList.includes("youtube")) && <FontAwesomeIcon className='mx-2' icon={faYoutube} size='2x' width={22} height={22} />
                    }

                    {
                        (socialMediaList.includes("twitter")) && <FontAwesomeIcon className='mx-2' icon={faTwitter} size='2x' width={22} height={22} />
                    }

                    {
                        (socialMediaList.includes("linkedin")) && <FontAwesomeIcon className='mx-2' icon={faLinkedin} size='2x' width={22} height={22} />
                    }

                    {
                        (socialMediaList.includes("discord")) && <FontAwesomeIcon className='mx-2' icon={faDiscord} size='2x' width={22} height={22} />
                    }

                    {
                        (socialMediaList.includes("vsco")) && <VscoSVG classList={"w-5 h-5 mx-2"} color="#000000" />
                    }

                </div>

                <p className={`-translate-y-12 mt-1 px-[12%]`}>{actualDescription}</p>
            </div>

            {
                (buttonTrain || buttonCardio) && <div className='mx-[10%] mb-10'>
                    {
                        buttonTrain && <button type='button' className={`w-full py-3 px-4 text-white cursor-pointer font-bold bg-blue-400 rounded`}>💪 Let&apos;s train together</button>
                    }
                    {
                        buttonCardio && <button type='button' className={`w-full py-3 px-4 text-white cursor-pointer mt-5 font-bold bg-red-600 rounded`}>😉 Let&apos;s do cardio</button>
                    }
                </div>
            }



            {
                sportList.hasOwnProperty("soccer") && <SoccerCard sportInfo={sportList.soccer} />
            }

            {
                sportList.hasOwnProperty("basketball") && <BasketCard sportInfo={sportList.basketball} />
            }

            {
                sportList.hasOwnProperty("football") && <FootballCard sportInfo={sportList.football} />
            }

            {
                sportList.hasOwnProperty("swimming") && <SwimmingCard sportInfo={sportList.swimming} />
            }

            {
                sportList.hasOwnProperty("athelic") && <AthleticCard sportInfo={sportList.athelic} />
            }

            <div>

                {
                    exercises.map((exer: any, index: any) => (
                        <GymStat
                            Weight={exer.Weight}
                            ExerciseType={exer.ExerciseType}
                            NumReps={exer.NumReps}
                            metric={exer.metric}
                            key={index}
                        />
                    ))
                }

            </div>
        </div>
    )
}