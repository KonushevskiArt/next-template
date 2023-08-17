"use client"
import React, { useState } from 'react';

type option = {
  value: string,
  label: string,
}

type Props = {
  options: option[],
  label: string,
  onChange: (value: string) => void,
}

export const CustomSelect = ({options, onChange, label}: Props) => {

  const [currentLabel, setCurrentLabel] = useState(label || options[0].label);
  const [isOpen, setOpen] = useState(false);

  const handleOptionClick = (value: string, label: string) => {
    setCurrentLabel(label);
    onChange(value);
  }

  const handleSelectClick = () => {
    setOpen(!isOpen);
  }

  const svgClasses = isOpen ? 'transition duration-150 w-3 h-3 rotate-180' : 'transition duration-150 w-3 h-3 '

  return (
    <div className=' relative mr-5   dark:bg-slate-600 bg-stale-100 rounded-md'>
        <button 
          onClick={handleSelectClick}
          className=' border  border-slate-500 flex m-0 items-center rounded-md px-2 py-1 w-[57px]'
        >
          <span className='mr-2'>{currentLabel}</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={svgClasses}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      {isOpen && (
        <div className='border border-t-0 border-slate-500 absolute flex flex-col pb-2 bg-slate-100 dark:bg-slate-600 w-[57px] z-10  top-[26px]'>
          {options.map(({ label, value }) => 
            (<button className='dark:hover:bg-slate-700 hover:bg-slate-200 my-1 mx-1 rounded-sm'  onClick={() => handleOptionClick(value, label)} key={label}>{label}</button>)
          )}
          <span className='border border-slate-500 border-1 mx-1'></span>
        </div>
      )}
    </div>
  );
};