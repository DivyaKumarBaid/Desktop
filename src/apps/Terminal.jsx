import React from 'react'
const ByDefault = () => {
    return (
        <div>
            Welcome to Ubuntu 20.04 LTS (GNU/Linux 5.10.16.3-microsoft-standard-WSL2 x86_64)
            <br />
            * Documentation:  https://help.ubuntu.com
            <br />
            * Management:     https://landscape.canonical.com
            <br />
            * Support:        https://ubuntu.com/advantage
            <br />
            <br />
        </div>
    )
}

export const Terminal = () => {
    return (
        <div className='w-[100%] h-[100%] p-4 text-xs text-slate-100 tracking-widest font-["Source_Code_Pro"] leading-5'>
            <ByDefault />
            <div className="typeTerminal flex h-[100%] justify-start items-start">
                <span className='!text-[rgb(0,255,0)]'>dkb2001@DivyaKrBaid:~$</span>
                <input type="text" id="terminalInput" className='w-[100%] tracking-widest' />
            </div>
        </div>
    )
}
