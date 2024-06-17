import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { useTranslations } from 'next-intl';
import React from 'react'

const PrivacyPage = () => {

    const navarI18n = useTranslations('Navbar');
    const footerI18n = useTranslations('Footer');

    return (
        <>
            <Navbar
                aboutText={navarI18n('about')}
                searchText={navarI18n('search')}
                dashboardText={navarI18n('dashboard')}
            />
            <main className="md:px-[20%] px-[10%] text-white"><h1 className="font-bold text-3xl mt-4 text-[#00FF8F]">Privacy Policy</h1><p className="py-4">This Privacy Policy establishes the terms in which Movete uses and protects the information that is provided by its users when using its website. This company is committed to the security of its users' data. When we ask you to fill in the fields of personal information with which you can be identified, we do so ensuring that it will only be used in accordance with the terms of this document. However, this Privacy Policy may change. over time or be updated so we recommend and emphasize continually reviewing this page to ensure that you agree with such changes.</p><h2 className="font-bold text-2xl text-[#00FF8F]">Information that is collected</h2><p className="py-4">Our website may collect personal information such as: Name, contact information such as your email address and demographic information. Likewise, when necessary, specific information may be required. to process an order or make a delivery or billing.</p><h2 className="font-bold text-2xl text-[#00FF8F]">Use of collected information</h2><p className="py-4">Our website uses the information in order to provide the best possible service, particularly to maintain a register of users, orders if applicable, and improve our products and services. They may be periodically sent emails through our site with special offers, new products and other advertising information that we consider relevant to you or that may provide you with some benefit, these emails They will be sent to the address you provide and can be canceled at any time. Movete is highly committed to fulfilling its commitment to keep your information secure. We use the most advanced systems and constantly update them to ensure that there is no unauthorized access.</p><h2 className="font-bold text-2xl text-[#00FF8F]">Cookies Policy</h2><p className="py-4">A cookie refers to a file that is sent in order to request permission to be stored on your computer, by accepting said file it is created and the cookie then serves to have information regarding web traffic, and also facilitates future recurring. Another function that cookies have is that with them the web can recognize you individually and therefore provide you with the best personalized service on its web. Our website uses cookies to be able to identify the pages that are visited and their frequency. This information is used only for statistical analysis and then the information is permanently deleted. You can delete cookies at any time from your computer. However cookies help to provide a better service on websites, you do not give access to information from your computer or from you, unless you want it and provide it. directly. You can accept or deny the use of cookies, however most browsers automatically accept cookies as it serves to have a better web service. Also you can change your computer settings to decline the cookies. If they are declined, you may not be able to use some of our services</p><h2 className="font-bold text-2xl text-[#00FF8F]">Links to Third Parties</h2><p className="py-4">This website may contain links to other sites that may be of interest to you. Once you click on these links and leave our page, we no longer have control over the site to which you are redirected and therefore we are not responsible. of the terms or privacy nor of the protection of your data in those other third-party sites. These sites are subject to their own privacy policies, so it is recommended that you consult them to confirm that you agree. with these.</p><h2 className="font-bold text-2xl text-[#00FF8F]">Control of your personal information</h2><p className="py-4">At any time you can restrict the collection or use of personal information that is provided to our website.   Every time you are asked to fill in a form, such as user registration, you can mark or unmark the option to receive information by email.   In case you have marked the option to receive our newsletter or advertising, you can cancel it at any time. This company will not sell, transfer or distribute the personal information that is collected without your consent, unless required by a judge with a court order. Movete reserves the right to change the terms of this Privacy Policy at any time.</p></main>
            <Footer
                title={footerI18n('title')}
                header1={footerI18n("header1")}
                linkAbout={footerI18n("linkAbout")}
                linkContact={footerI18n("linkContact")}
                linkSupport={footerI18n("linkSupport")}
                linkTerms={footerI18n("linkTerms")}
                linkPrivacy={footerI18n("linkPrivacy")}
                header2={footerI18n("header2")}
                copyright={footerI18n("copyright")}
            />
        </>
    )
};

export default PrivacyPage;
