import { CircularProgress } from '@mui/material';
import { height } from '@mui/system';
import React from 'react'
import { AiOutlinePoweroff } from 'react-icons/ai'

export const Login = (props) => {
    const [onceClicked, setClicked] = React.useState(false);
    const loginHandle = () => {
        setClicked(true);
        setTimeout(() => {
            props.setLoggedIn(true)
        }, 1500);
    }
    return (
        <div className="w-[100%] h-[100%] fixed z-[99] bg-black text-white flex flex-col justify-center items-center gap-12 font-['Montserrat'] font-[800] text-3xl loadingScreen">
            <img src="/assets/logo.svg" alt="" width={120} />
            <div className='flex flex-col items-center gap-4 tracking-widest'>
                {/* <h1>Welcome</h1> */}
                <div className={`border bg-transparent p-2 flex justify-center items-center px-6 w-[10vw] text-center h-[6vh] rounded-md hover:bg-white cursor-pointer transition-all hover:text-black ${onceClicked && "border-none"} `} onClick={() => {
                    loginHandle()
                }}>
                    {onceClicked ? <CircularProgress color="inherit" style={{ width: "25px", height: "25px" }} /> : <div className='text-sm font-["DM_Sans"]' >Login</div>}
                </div>
            </div>
        </div>
    )
}
