import React from 'react'

export const MySelf = () => {
    return (
        <>
            <div className="w-[20%] h-[100%] bg-[rgb(45,45,45)] py-2 shadow-lg">
                <div className="px-4 mt-5 text-xs tracking-widest">
                    Files
                </div>
                <div className="text-sm py-2 w-[100%] flex flex-col gap-2">
                    <div className="hover:bg-[rgba(90,90,90)] w-[100%] px-4 py-2 cursor-pointer">MySelf</div>
                    <div className="hover:bg-[rgba(90,90,90)] w-[100%] px-4 py-2 cursor-pointer">Projects</div>
                    <div className="hover:bg-[rgba(90,90,90)] w-[100%] px-4 py-2 cursor-pointer">LinkedIn</div>
                    <div className="hover:bg-[rgba(90,90,90)] w-[100%] px-4 py-2 cursor-pointer">Github</div>
                    <div className="hover:bg-[rgba(90,90,90)] w-[100%] px-4 py-2 cursor-pointer">Contact</div>
                </div>
            </div>
        </>
    )
}
