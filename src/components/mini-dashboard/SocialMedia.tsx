import { faDiscord, faInstagram, faTiktok, faTwitch, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faGlobe, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const SocialMedia = () => {
    return (
        <div className='m-3'>
            <div className='flex'>
                <div className='bg-white text-black p-5 rounded m-2'><FontAwesomeIcon className='w-6 h-6' icon={faTiktok} /></div>
                <div className='bg-white text-black p-5 rounded m-2'><FontAwesomeIcon className='w-6 h-6' icon={faInstagram} /></div>
                <div className='bg-white text-black p-5 rounded m-2'><FontAwesomeIcon className='w-6 h-6' icon={faYoutube} /></div>
                <div className='bg-white text-black p-5 rounded m-2'><FontAwesomeIcon className='w-6 h-6' icon={faLink} /></div>
            </div>

            <div className='flex'>
                <div className='bg-white text-black p-5 rounded m-2'><FontAwesomeIcon className='w-6 h-6' icon={faLinkedin} /></div>
                <div className='bg-white text-black p-5 rounded m-2'><FontAwesomeIcon className='w-6 h-6' icon={faXTwitter} /></div>
                <div className='bg-white text-black p-5 rounded m-2'><FontAwesomeIcon className='w-6 h-6' icon={faDiscord} /></div>
                <div className='bg-white text-black p-5 rounded m-2'><FontAwesomeIcon className='w-6 h-6' icon={faTwitch} /></div>
            </div>
        </div>
    )
}
