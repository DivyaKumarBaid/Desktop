import React from 'react'
import { BsBatteryHalf, BsFillVolumeMuteFill } from 'react-icons/bs';
import { MdOutlineNetworkWifi3Bar } from 'react-icons/md';

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export const UpperTaskBar = () => {
    var today = new Date();
    return (
        <div className="w-[100%] p-2 tracking-widest h-min flex flex-row-reverse text-xs text-[rgba(256,256,256,0.7)] gap-[42vw] cursor-default">
            <div className="status flex gap-[16px] items-center">
                <MdOutlineNetworkWifi3Bar style={{ fontSize: "16px" }} />
                <BsFillVolumeMuteFill style={{ fontSize: "18px" }} />
                <BsBatteryHalf style={{ fontSize: "18px" }} />
            </div>

            <div className="time">
                <span>{today.getDate()}</span>
                &nbsp;
                <span>{monthNames[today.getMonth()]}</span>
                &nbsp;&nbsp;
                {/* <span>{today.toLocaleTimeString()}</span> */}
            </div>
        </div>
    )
}
