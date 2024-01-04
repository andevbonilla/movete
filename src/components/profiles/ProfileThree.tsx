"use client"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { ProfileInterface } from '@/interfaces/ProfileInterface';
import { NoUserSVG } from '@/lib/Svgs';
import Image from 'next/image';
import { NoPhotoBanner } from '../NoPhotoBanner';
import { PinkStat } from '../stats/PinkStat';
import { SoccerCard } from '../sport-cards/SoccerCard';

export const ExampleProfileThree = ({ username, desc, imgUrl, bannerUrl, exercises, socialMedia }: ProfileInterface) => {

    return (
        <div className={`h-[34rem] overflow-y-scroll rounded-t-2xl bg-white text-black`}>
            {
                (bannerUrl === "")
                    ? <NoPhotoBanner title={username} />
                    : <Image
                        src={require(`@/assets/${bannerUrl}`)}
                        alt='background image example'
                        className='w-full h-[8rem] rounded-t-2xl'
                    />
            }
            <div className={`flex flex-col items-center justify-center text-center`}>
                {
                    (imgUrl === "")
                        ? <NoUserSVG classList={"rounded-full -translate-y-12 w-24 h-24"} color="#ffffff" />
                        : <Image
                            src={require(`@/assets/${imgUrl}`)}
                            alt='background image example'
                            className='rounded-full -translate-y-12 w-[6rem] h-[6rem] p-1 bg-white'
                        />
                }
                <h3 className={`-translate-y-12 mt-3 font-bold px-[12%] text-lg`}>{username}</h3>

                {/* icons of social media */}
                <div className='flex justify-center items-center px-[20%] -translate-y-12 my-3'>

                    {
                        socialMedia.includes("instagram") && <FontAwesomeIcon icon={faInstagram} size='2x' width={22} height={22} className={`px-2`} />
                    }

                    {
                        socialMedia.includes("website") && <FontAwesomeIcon icon={faGlobe} size='2x' width={22} height={22} className={`px-2`} />
                    }

                    {
                        socialMedia.includes("facebook") && <FontAwesomeIcon icon={faFacebook} size='2x' width={22} height={22} className={`px-2`} />
                    }

                    {
                        socialMedia.includes("twich") && <FontAwesomeIcon icon={faTwitch} size='2x' width={22} height={22} className={`px-2`} />
                    }

                    {
                        socialMedia.includes("youtube") && <FontAwesomeIcon icon={faYoutube} size='2x' width={22} height={22} className={`px-2`} />
                    }

                    {
                        socialMedia.includes("twitter") && <FontAwesomeIcon icon={faTwitter} size='2x' width={22} height={22} className={`px-2`} />
                    }

                    {
                        socialMedia.includes("linkedin") && <FontAwesomeIcon icon={faLinkedin} size='2x' width={22} height={22} className={`px-2`} />
                    }

                </div>

                <p className={`-translate-y-12 mt-1 px-[12%]`}>{desc}</p>
            </div>

            <SoccerCard />
            <div>

                {
                    exercises.map((exer, index) => (
                        <PinkStat
                            Weight={exer.weight}
                            ExerciseType={exer.name}
                            NumReps={exer.reps}
                            metric={exer.metric}
                            key={index}
                        />
                    ))
                }

            </div>
        </div>
    )
}