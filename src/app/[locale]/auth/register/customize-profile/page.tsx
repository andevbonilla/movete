"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dela_Gothic_One } from '@next/font/google';
import { faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NoUserSVG } from '@/lib/Svgs';
import { ExampleProfile } from '@/components/ExplampleProfile';

const delaGothic = Dela_Gothic_One({
    weight: ["400"], // bold de la fuente
    style: ["normal"],
    subsets: ["latin"]
});

const CustomizePage = () => {

    const [showPreviewProfile, setShowPreviewProfile] = useState(false);
    const [nameInput, setNameInput] = useState("");
    const [descInput, setDescInput] = useState("");
    const [colorPalletInput, setColorPalletInput] = useState(0);

    const [exercises, setExercises] = useState<any>([]);

    const [nameExercise, setNameExercise] = useState("");
    const [respsExercise, setRepsExercise] = useState("");
    const [weightExercise, setWeightExercise] = useState("");

    const router = useRouter();

    const continueUserInfo = () => {
        return;
        // router.push("/en/auth/register");
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
            weight: weightExercise
        }

        if (newExer.name === "" || newExer.reps === "" || newExer.weight === "") {
            return;
        }

        if (exercises.length > 5) {
            return;
        }

        setExercises([...exercises, newExer]);

    }


    return (
        <>
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

                <button onClick={openPreview} type='button' className='z-[900] opacity-90 fixed mx-[15%] bottom-0 left-0 right-0 mb-8 bg-[#0092F7] text-white font-bold text-xl rounded-full py-3 px-6'>
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
                        <input type="file" className='absolute top-0 left-0 right-0 h-full opacity-0' />
                    </div>
                    <div className='mt-8 flex items-center justify-center w-full'>
                        <NoUserSVG classList={"w-20 h-20"} color={"#000000"} />
                    </div>
                </div>

                <div className='w-full flex flex-col items-start mb-10'>
                    <p className='text-white mb-2 text-lg font-bold'>Select a banner picture (optional):</p>
                    <div className='text-white w-full relative h-12 rounded bg-[#00FF8F] flex justify-center items-center font-bold'>
                        Select a picture
                        <input type="file" className='absolute top-0 left-0 right-0 h-full opacity-0' />
                    </div>
                    <div className='mt-8 h-24 rounded-t-lg w-full bg-slate-500'></div>
                </div>

                {/* ================================= add exercise ================================== */}
                {/* ================================================================================= */}

                <h2 className='text-[#00FF8F] mb-10 text-xl font-bold mt-10'>Add at least one exercise</h2>
                <div className='w-full flex flex-col items-start mb-10'>

                    <div className='w-full flex flex-col items-start mb-10'>
                        <p className='text-white mb-2 text-lg font-bold'>With how many repetitions do you lift this weight?:</p>
                        <select defaultValue={"squats"} value={nameExercise} onChange={(e) => setNameExercise(e.currentTarget.value)} id="exerciseList" name="exerciseList" className='py-3 px-5 text-black w-full rounded'>
                            <option value="squats">Squats</option>
                            <option value="deadlifts">Deadlifts</option>
                            <option value="bench-press">Bench Press</option>
                            <option value="pull-ups">Pull-ups</option>
                            <option value="lunges">Lunges</option>
                            <option value="push-ups">Push-ups</option>
                            <option value="plank">Plank</option>
                            <option value="burpees">Burpees</option>
                            <option value="rows">Rows</option>
                            <option value="bicep-curls">Bicep Curls</option>
                            <option value="tricep-dips">Tricep Dips</option>
                            <option value="sit-ups">Sit-ups</option>
                            <option value="leg-press">Leg Press</option>
                            <option value="shoulder-press">Shoulder Press</option>
                            <option value="box-jumps">Box Jumps</option>
                        </select>
                    </div>

                    <div className='w-full flex flex-col items-start mb-10'>
                        <p className='text-white mb-2 text-lg font-bold'>How much weight do you lift in this exercise?:</p>
                        <div className='flex items-center w-full'>
                            <input value={weightExercise} onChange={(e) => setWeightExercise(e.currentTarget.value)} type="number" placeholder='Example: 200' className='py-3 px-5 text-black w-2/3 rounded-l h-full' />
                            <select name="measure" className='py-[.7rem] px-5 text-black w-1/3 h-full rounded-r font-bold'>
                                <option value="kg">Kg</option>
                                <option value="lb">Lb</option>
                            </select>
                        </div>

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
                            <button type='button' className='bg-[#00FF8F] text-white py-3 px-4 '>No</button>
                            <button type='button' className='bg-black text-white py-2 px-3 '>Yes</button>
                        </div>
                    </div>
                    <div className='flex justify-between w-full items-center mb-10'>
                        <p className='text-white text-lg'>Do you want to appear in the app&apos;s search engine?</p>
                        <div className='flex items-center'>
                            <button type='button' className='bg-[#00FF8F] text-white py-3 px-4 '>No</button>
                            <button type='button' className='bg-black text-white py-2 px-3 '>Yes</button>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between w-full items-center'>
                    <button onClick={continueUserInfo} type='button' className={`bg-slate-500 mr-2 text-white mt-4 py-3 px-5 text-center w-full rounded font-extrabold text-lg mb-[5rem]`}>Back</button>
                    <button onClick={continueUserInfo} type='button' className={`bg-[#00FF8F] ml-2 text-white mt-4 py-3 px-5 text-center w-full rounded font-extrabold text-lg mb-[5rem]`}>Continue</button>
                </div>


            </div>
        </>
    )
}

export default CustomizePage;