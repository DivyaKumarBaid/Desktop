import React from 'react'
import { AiOutlinePoweroff } from 'react-icons/ai'

export const Login = (props) => {
    return (
        <div className="w-[100%] h-[100%] fixed z-[99] bg-black text-white flex flex-col justify-center items-center gap-12 font-['Montserrat'] font-[800] text-3xl">
            <img src="/assets/logo.svg" alt="" width={120} />
            <div className='flex flex-col items-center gap-4 tracking-widest'>
                <h1>Welcome</h1>
                <AiOutlinePoweroff className='cursor-pointer' onClick={() => props.setLoggedIn(true)} />
            </div>
        </div>
    )
}
