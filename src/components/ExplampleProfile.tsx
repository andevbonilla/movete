"use client"
import Image from 'next/image';
import React from 'react';
import { Stat } from './Stat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Profile } from '@/interfaces/ProfileInterface';

export const ExampleProfile = ({ username, desc, imgUrl, bannerUrl }: Profile) => {

    return (
        <div className='bg-white rounded-2xl'>
            <Image
                src={require(`@/assets/${bannerUrl}`)}
                alt='background image example'
                className='w-full h-32 rounded-t-2xl'
                width={200}
                height={50}
            />
            <div className='bg-white flex flex-col items-center justify-center text-center text-black'>
                <Image
                    src={require(`@/assets/${imgUrl}`)}
                    alt='background image example'
                    className='rounded-full -translate-y-12'
                    width={100}
                    height={100}
                />
                <h3 className='-translate-y-12 mt-3 font-bold px-[12%] text-lg'>{username}</h3>
                <div className='flex justify-between px-[20%] -translate-y-12 my-3'>
                    <FontAwesomeIcon icon={faGlobe} size='2x' width={22} height={22} className='text-black' />
                    <FontAwesomeIcon icon={faInstagram} size='2x' width={22} height={22} className='text-black ml-6' />
                    <FontAwesomeIcon icon={faXTwitter} size='2x' width={22} height={22} className='text-black ml-6' />
                </div>
                <p className='-translate-y-12 mt-1 px-[12%]'>{desc}</p>
            </div>
            <div className='bg-white text-black'>

                <Stat />
                <Stat />
                <Stat />
                <Stat />

            </div>
        </div>
    )
}