import React from 'react';
import { useTranslations } from 'next-intl';

export const Navbar = () => {
    const t = useTranslations('Navbar');
    return (
        <div className='bg-[#001429]'>{t('logo')}</div>
    )
}
