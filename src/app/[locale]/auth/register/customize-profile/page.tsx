"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dela_Gothic_One } from '@next/font/google';
import { faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NoUserSVG } from '@/lib/Svgs';
import { ExampleProfile } from '@/components/ExplampleProfile';
import { NoPhotoBanner } from '@/components/NoPhotoBanner';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PrettySelect } from '@/components/PrettySelect';

const delaGothic = Dela_Gothic_One({
    weight: ["400"], // bold de la fuente
    style: ["normal"],
    subsets: ["latin"]
});

const CustomizePage = () => {

    const notifySuccess = (message: string) => toast.success(message);
    const notifyError = (message: string) => toast.error(message);

    const [showPreviewProfile, setShowPreviewProfile] = useState(false);
    const [nameInput, setNameInput] = useState("");
    const [descInput, setDescInput] = useState("");
    const [colorPalletInput, setColorPalletInput] = useState(0);

    const [exercises, setExercises] = useState<any>([]);

    const [profileImg, setProfileImg] = useState("");
    const [bannerImg, setBannerImg] = useState("");

    const [nameExercise, setNameExercise] = useState("");
    const [metricType, setMetricType] = useState("");
    const [respsExercise, setRepsExercise] = useState("");
    const [weightExercise, setWeightExercise] = useState("");

    const [buttonTrainWithme, setButtonTrainWithme] = useState(false);
    const [showProfileOnSeach, setShowProfileOnSeach] = useState(false);

    const router = useRouter();

    const continueUserInfo = () => {
        router.push("/en/auth/register");
    };

    const openPreview = () => {
        setShowPreviewProfile(true);
    }

    const closePreview = () => {
        setShowPreviewProfile(false);
    }

    const addNewExercise = () => {

        const newExer = {
            name: nameExercise,
            reps: respsExercise,
            weight: weightExercise,
            metric: metricType
        }

        if (newExer.name === "") {
            notifyError("First select an exercise to be added.");
            return;
        }

        if (newExer.reps === "") {
            notifyError("to add an exercise, you must specify how many repetitions you do it with, for example 3.");
            return;
        }

        if (newExer.weight === "") {
            notifyError("To add an exercise you must enter how much weight you lift in that exercise.");
            return;
        }

        if (exercises.length > 5) {
            notifyError("Only a maximum of 6 exercises can be added.");
            return;
        }

        setExercises([...exercises, newExer]);

        setNameExercise("");
        setMetricType("");
        setRepsExercise("0");
        setWeightExercise("0");

        notifySuccess("The exercise was successfully added.");

    }

    const toggleButtonTrainWithMe = () => {
        setButtonTrainWithme(!buttonTrainWithme);
    }

    const toggleButtonShowProfile = () => {
        setShowProfileOnSeach(!showProfileOnSeach)
    }

    const goBackButton = () => {
        router.push("/en/auth/register");
    }

    const previewProfilePicture = (e: any) => {
        const data = new FileReader();
        data.addEventListener("load", () => {
            let result: any = (data.result) ? data.result : "";
            setProfileImg(result);
        })
        data.readAsDataURL(e.target.files[0]);
    }

    const previewBannerPicture = (e: any) => {
        const data = new FileReader();
        data.addEventListener("load", () => {
            let result: any = (data.result) ? data.result : "";
            setBannerImg(result);
        })
        data.readAsDataURL(e.target.files[0]);
    }

    return (
        <>
            <ToastContainer />
            {
                showPreviewProfile && <div className={`fixed top-0 w-full z-[999]`}>
                    <ExampleProfile
                        username={nameInput}
                        desc={descInput}
                        imgUrl={""}
                        bannerUrl={""}
                        colorPalette={colorPalletInput}
                        exercises={exercises}
                    />
                    <button onClick={closePreview} type='button' className='opacity-90 fixed mx-[15%] bottom-0 left-0 right-0 mb-8 bg-red-600 text-white font-bold text-xl rounded-full py-3 px-6'>
                        <FontAwesomeIcon icon={faEye} className='mr-3' />
                        Close Preview
                    </button>
                </div>
            }


            <div className='flex flex-col items-center p-[10%] overflow-y-scroll relative'>

                <button onClick={openPreview} type='button' className='z-[900] flex items-center justify-center opacity-90 fixed mx-[15%] bottom-0 left-0 right-0 mb-8 bg-[#0092F7] text-white font-bold text-xl rounded-full py-3 px-6'>
                    <FontAwesomeIcon icon={faEye} className='mr-3' />
                    Preview Profile
                </button>

                <h1 className={`text-white ${delaGothic.className} text-2xl mt-[3rem]`}>Customization</h1>
                <p className='text-white text-lg text-center mt-4 mb-[3rem]'>All right, now let&apos;s customize your profile.</p>

                <div className='w-full flex flex-col items-start mb-10'>
                    <p className='text-white mb-2 text-lg font-bold'>Tell us your name:</p>
                    <input
                        onChange={(e) => setNameInput(e.currentTarget.value)}
                        value={nameInput}
                        type="text"
                        placeholder='Your Name'
                        className='py-3 px-5 text-black w-full rounded'
                    />
                </div>

                <div className='w-full flex flex-col items-start mb-10'>
                    <p className='text-white mb-2 text-lg font-bold'>Description (optional):</p>
                    <textarea
                        onChange={(e) => setDescInput(e.currentTarget.value)}
                        value={descInput}
                        className='w-full h-20 rounded py-3 px-5'
                        placeholder='Write a short description about yourself'
                    >
                    </textarea>
                </div>

                <div className='w-full flex flex-col items-start mb-10'>
                    <p className='text-white mb-2 text-lg font-bold'>Select the color palette:</p>
                    <div className='flex justify-center items-center w-full mt-4'>

                        <button
                            onClick={() => setColorPalletInput(0)}
                            type='button'
                            className={`${colorPalletInput === 0 ? "border-[.4rem] border-[#00FF8F]" : "border-2 border-white"} flex items-center rotate-45 rounded-full`}>
                            <div className='bg-[#ffffff] w-[1rem] h-[2rem] rounded-l-full'></div>
                            <div className='bg-[#0092F7] w-[1rem] h-[2rem] rounded-r-full'></div>
                        </button>

                        <button
                            onClick={() => setColorPalletInput(1)}
                            type='button'
                            className={`${colorPalletInput === 1 ? "border-[.4rem] border-[#00FF8F]" : "border-2 border-white"} flex items-center rotate-45 ml-10 rounded-full`}>
                            <div className='bg-[#001429] w-[1rem] h-[2rem] rounded-l-full'></div>
                            <div className='bg-[#00FF8F] w-[1rem] h-[2rem] rounded-r-full'></div>
                        </button>

                        <button
                            onClick={() => setColorPalletInput(2)}
                            type='button'
                            className={`${colorPalletInput === 2 ? "border-[.4rem] border-[#00FF8F]" : "border-2 border-white"} flex items-center rotate-45 ml-10 rounded-full`}>
                            <div className='bg-[#ffffff] w-[1rem] h-[2rem] rounded-l-full'></div>
                            <div className='bg-[#FF0303] w-[1rem] h-[2rem] rounded-r-full'></div>
                        </button>

                        <button
                            onClick={() => setColorPalletInput(3)}
                            type='button'
                            className={`${colorPalletInput === 3 ? "border-[.4rem] border-[#00FF8F]" : "border-2 border-white"} flex items-center rotate-45 ml-10 rounded-full`}>
                            <div className='bg-[#ffffff] w-[1rem] h-[2rem] rounded-l-full'></div>
                            <div className='bg-[#7203FF] w-[1rem] h-[2rem] rounded-r-full'></div>
                        </button>

                    </div>
                </div>

                <div className='w-full flex flex-col items-start mb-10'>
                    <p className='text-white mb-2 text-lg font-bold'>Select a profile picture (optional):</p>
                    <div className='text-white w-full relative h-12 rounded bg-[#00FF8F] flex justify-center items-center font-bold'>
                        Select a picture
                        <input
                            type="file"
                            className='absolute top-0 left-0 right-0 h-full opacity-0'
                            onChange={previewProfilePicture}
                        />
                    </div>
                    <div className='mt-8 flex items-center justify-center w-full'>

                        {
                            (profileImg !== "")
                                ? <img
                                    src={profileImg}
                                    alt='profile img preview'
                                    className='rounded-full w-[5rem] h-[5rem]'
                                />
                                : <NoUserSVG classList={"w-20 h-20"} color={"#ffffff"} />
                        }

                    </div>
                </div>

                <div className='w-full flex flex-col items-start mb-10'>
                    <p className='text-white mb-2 text-lg font-bold'>Select a banner picture (optional):</p>
                    <div className='text-white w-full mb-10 relative h-12 rounded bg-[#00FF8F] flex justify-center items-center font-bold'>
                        Select a picture
                        <input
                            type="file"
                            className='absolute top-0 left-0 right-0 h-full opacity-0'
                            onChange={previewBannerPicture}
                        />
                    </div>
                    {
                        (bannerImg !== "")
                            ? <img
                                src={bannerImg}
                                alt='banner img preview'
                                className='w-full h-[8rem]'
                            />
                            : <NoPhotoBanner title={nameInput} />
                    }
                </div>

                {/* ================================= add exercise ================================== */}
                {/* ================================================================================= */}

                <h2 className='text-[#00FF8F] mb-10 text-xl font-bold mt-10'>Add at least one exercise</h2>
                <div className='w-full flex flex-col items-start mb-10'>

                    <div className='w-full flex flex-col items-start mb-10'>

                        <p className='text-white mb-2 text-lg font-bold'>With how many repetitions do you lift this weight?:</p>

                        <PrettySelect
                            listElem={[
                                "Squats",
                                "Bench Press",
                                "Deadlifts",
                                "Pull-ups",
                                "Triceps Dips",
                                "Military Press",
                                "Barbell Rows",
                                "Bicep Curls",
                                "Planks",
                                "Hip Thrusts",
                                "Shoulder Press",
                                "Lunges",
                                "Pull-ups",
                                "Shoulder Press",
                                "Ab Crunches",
                                "Leg Press",
                                "Hamstring Curls",
                                "Calf Raises",
                                "Oblique Crunches",
                                "Burpees",
                                "Push-ups",
                                "Hammer Curls",
                                "Lateral Raises",
                                "Ab Wheel Rollouts",
                                "Mountain Climbers",
                                "Face Pulls",
                                "Hack Squats",
                                "Bird Dogs",
                                "Push-ups",
                            ]}
                            titleSelect={"Select an exercise"}
                            changeStateFunction={setNameExercise}
                        />

                    </div>

                    <div className='w-full flex flex-col items-start mb-10'>
                        <p className='text-white mb-2 text-lg font-bold'>How much weight do you lift in this exercise?:</p>
                        <input
                            value={weightExercise}
                            onChange={(e) => setWeightExercise(e.currentTarget.value)}
                            type="number"
                            placeholder='Example: 200'
                            className='py-3 px-5 text-black w-full rounded-l h-full mb-4'
                        />

                        <PrettySelect
                            listElem={["Kg", "Lb"]}
                            titleSelect={"Kg"}
                            changeStateFunction={setMetricType}
                        />
                    </div>

                    <div className='w-full flex flex-col items-start mb-10'>
                        <p className='text-white mb-2 text-lg font-bold'>With how many repetitions do you lift this weight?:</p>
                        <input value={respsExercise} onChange={(e) => setRepsExercise(e.currentTarget.value)} type="number" placeholder='Example: 4' className='py-3 px-5 text-black w-full rounded' />
                    </div>

                    <div className='flex justify-center items-center'>
                        <button
                            onClick={addNewExercise}
                            type='button'
                            className='text-[#00FF8F] text-lg'
                        ><FontAwesomeIcon icon={faPlus} /> Add Exercise</button>
                    </div>

                </div>

                {/* ================================= optional configs ================================== */}
                {/* ================================================================================= */}
                <div>
                    <h2 className='text-[#00FF8F] mb-10 text-xl font-bold text-center mt-10'>Optional configurations</h2>
                    <div className='flex justify-between w-full items-center mb-10'>
                        <p className='text-white text-lg'>Show button: train with me?</p>
                        <div className='flex items-center'>
                            <button onClick={toggleButtonTrainWithMe} type='button' className={`${!buttonTrainWithme ? "bg-[#00FF8F] py-3 px-4" : "bg-black py-2 px-3"} text-white`}>No</button>
                            <button onClick={toggleButtonTrainWithMe} type='button' className={`${buttonTrainWithme ? "bg-[#00FF8F] py-3 px-4" : "bg-black py-2 px-3"} text-white`}>Yes</button>
                        </div>
                    </div>
                    <div className='flex justify-between w-full items-center mb-10'>
                        <p className='text-white text-lg'>Do you want to appear in the app&apos;s search engine?</p>
                        <div className='flex items-center'>
                            <button onClick={toggleButtonShowProfile} type='button' className={`${!showProfileOnSeach ? "bg-[#00FF8F] py-3 px-4" : "bg-black py-2 px-3"} text-white`}>No</button>
                            <button onClick={toggleButtonShowProfile} type='button' className={`${showProfileOnSeach ? "bg-[#00FF8F] py-3 px-4" : "bg-black py-2 px-3"} text-white`}>Yes</button>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between w-full items-center'>
                    <button onClick={goBackButton} type='button' className={`bg-slate-500 mr-2 text-white mt-4 py-3 px-5 text-center w-full rounded font-extrabold text-lg mb-[5rem]`}>Back</button>
                    <button onClick={continueUserInfo} type='button' className={`bg-[#00FF8F] ml-2 text-white mt-4 py-3 px-5 text-center w-full rounded font-extrabold text-lg mb-[5rem]`}>Continue</button>
                </div>


            </div>
        </>
    )
}

export default CustomizePage;