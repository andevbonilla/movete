"use client"
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

export const PrettySelect = ({ listElem, titleSelect }: any) => {

    const [openSelect, setOpenSelect] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");

    const changeSelectedValue = (name: string) => {
        setOpenSelect(false);
        setSelectedValue(name)
    }

    return (
        <div className='bg-white rounded w-full'>
            <div onClick={() => setOpenSelect(!openSelect)} className='flex justify-between items-center px-4 py-3 w-full'>
                <h3>{(selectedValue === "") ? titleSelect : selectedValue}</h3>
                <FontAwesomeIcon icon={faChevronDown} size='1x' />
            </div>
            {
                openSelect && <ul className='max-h-[14rem] overflow-y-scroll'>
                    {
                        listElem.map((elem: any, index: number) => (
                            <li key={index}
                                onClick={() => changeSelectedValue(elem)}
                                className='text-black text-opacity-80 py-3 px-4 hover:bg-slate-300 cursor-pointer transition-all'>
                                {elem}
                            </li>
                        ))
                    }

                </ul>
            }

        </div>
    )
}
