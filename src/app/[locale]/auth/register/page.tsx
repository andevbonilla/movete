"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { FormEvent, useState } from 'react';

import { Dela_Gothic_One } from "@next/font/google";
import { useRouter } from 'next/navigation';

const delaGothic = Dela_Gothic_One({
    weight: ["400"], // bold de la fuente
    style: ["normal"],
    subsets: ["latin"]
});

const RegisterPage = () => {

    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const [languageLink, setLanguageLink] = useState("");

    const router = useRouter();

    const [texts, settexts] = useState({
        signIn: "Sign In With",
        googleButton: "Continue With Google",
        emailPlaceholder: "Email",
        passwordPlaceholder: "Password",
        IFmessage: "If you don't have an account yet: ",
        IFbutton: "Create account",
        actionButton: "LOGIN"
    })


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        router.push("/en/auth/register/customize-profile");
        return;

        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const userInfo = {
            email: formData.get('email') || '',
            password: formData.get('password') || ''
        }

        // if (userInfo.email?.length === 0) {
        //     setError('The email is required');
        //     return;
        // }

        let EmailRegexValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
        if (EmailRegexValidator.test(userInfo.email?.toString())) {
            setError('The email is invalid');
            return;
        }

        // if (userInfo.password?.length < 8) {
        //     setError("The password must contain at least 8 characters");
        //     return;
        // }

        setIsLogin(true);
        setError("");


        // try {

        //     const { data: SignUpData } = await axios.post(`${backendUri}/api/auth/login`, {
        //         email: userInfo.email,
        //         password: userInfo.password,
        //     });

        //     if (SignUpData) {
        //         setIsLogin(false);
        //     }

        //     if (SignUpData.status === "success") {
        //         setTimeout(() => {
        //             setIsLogin(false);
        //             window.location.reload();
        //         }, 100);
        //     }

        // } catch (error: any) {
        //     setIsLogin(false);
        //     if (error.response && error.response.data.message) {
        //         setError(error.response.data.message);
        //     } else if (error.request) {
        //         setError("No response from server please try again later");
        //     } else {
        //         setError("There was an error in the server please try again later");
        //     }
        // }
    }

    // const GoogleLogin = useGoogleLogin({
    //     onSuccess: async (tokenResponse) => {
    //         const { data: SignUpData } = await axios.post(`${backendUri}/api/auth/google-login`, {
    //             access_token: tokenResponse.access_token
    //         });
    //         if (SignUpData.status === "success") {

    //             // Cookies.set('x-token', SignUpData.token, {path: '/account'});
    //             Cookies.set('x-token', SignUpData.token, { path: '/' });

    //             // Cookies.set('uid', SignUpData.userDB.uid, {path: '/account'});
    //             Cookies.set('uid', SignUpData.userDB.uid, { path: '/' });

    //             // Cookies.set('username', SignUpData.userDB.username, {path: '/account'});
    //             Cookies.set('username', SignUpData.userDB.username, { path: '/' });

    //             // Cookies.set('email', SignUpData.userDB.email, {path: '/account'});
    //             Cookies.set('email', SignUpData.userDB.email, { path: '/' });

    //             // Cookies.set('email', SignUpData.userDB.email, {path: '/account'});
    //             Cookies.set('plan-type', SignUpData.userDB.planType, { path: '/' });

    //             // Cookies.set('email', SignUpData.userDB.email, {path: '/account'});
    //             Cookies.set('credits', SignUpData.userDB.credits, { path: '/' });

    //             window.location.reload();
    //         }
    //     },
    //     onError: err => setError('There was an error in google authentication, please try again.')
    // });

    if (isLogin) {

        return <></>
        // return <LoadingComponent />

    } else {

        return (
            <main className="flex justify-center items-center w-full h-screen text-center">

                <div className="flex flex-col items-center min-w-[40%]">

                    <div className="flex flex-col items-center">
                        <Link href={`/${languageLink}`} title='logo' className="mb-4">
                            <h2 className={`text-2xl ${delaGothic.className} text-white`}>
                                Fitalgo
                            </h2>
                        </Link>
                        <h1 className="mb-8 font-bold text-xl text-white p-[5%]">let&apos;s finish creating your profile</h1>
                    </div>

                    <form className="flex flex-col items-center mb-4 md:max-w-[60%]" onSubmit={handleSubmit}>


                        <button type="button" className=" text-base text-[#3c4043] transition-all hover:bg-[#F8FAFF] justify-center font-bold w-full flex items-center rounded text-center py-3 px-[2rem] bg-white border-2 border-[#dadce0]">
                            <Image
                                src={require('@/assets/svgs/google-color-svgrepo-com.svg')}
                                alt='google svg icon'
                                width={25}
                                height={25}
                                className="mr-2"
                            />
                            Continue with google
                        </button>

                        <div className="border-t-2 border-solid border-[rgba(256,256,256,.8)] w-full mt-8"></div>

                        <input className="border-black border-solid border-[0.08rem] py-3 px-4 rounded mb-8 mt-8 w-full" type="email" name="email" placeholder={texts.emailPlaceholder} />

                        <input className="border-black border-solid border-[0.08rem] py-3 px-4 rounded mb-8 w-full" type="password" name="password" placeholder={texts.passwordPlaceholder} />

                        <button className="bg-[#00FF8F] text-white text-lg py-3 px-5 rounded w-full" type="submit">Continue</button>

                        {error && <span className="text-red-500 mt-4">{error}</span>}

                    </form>

                    <p className="text-sm text-center opacity-90 px-20 md:max-w-[80%] text-white">
                        If you already have a profile:
                        <Link className="text-[#00FF8F] font-bold pl-2" href={'/en/auth/login'}>Login</Link>
                    </p>

                </div>

            </main>
        )

    }
}

export default RegisterPage;
