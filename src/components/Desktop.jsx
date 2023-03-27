import React from 'react'
import { FolderModal } from './FolderModal';
import { SingleFolder } from './SingleFolder';

const Folders = [
    {
        name: "MySelf",
        icon: "folder.png"
    },
    {
        name: "LinkedIn",
        icon: "linkedin.svg"
    },
    {
        name: "Chrome",
        icon: "chrome.svg"
    },
    {
        name: "Contact",
        icon: "gmail.svg"
    },
    {
        name: "Github",
        icon: "github.svg"
    },

]

export const Desktop = () => {

    const [singleClick, setSingleClick] = React.useState(Folders.map(() => false));
    const [doubleClick, setDoubleClick] = React.useState(Folders.map(() => false));

    // const handleClick = (e, i) => {
    //     switch (e.detail) {
    //         case 1: {
    //             setDoubleClick(old => old.map(item => false));
    //             setSingleClick(old => old.map((item, idx) => idx === i ? true : false));
    //             break;
    //         }
    //         case 2: {
    //             setSingleClick(old => old.map(item => false));
    //             setDoubleClick(old => old.map((item, idx) => idx === i ? true : false));
    //             break;
    //         }
    //         default: {
    //             setDoubleClick(old => old.map(item => true));
    //             break;
    //         }
    //     }
    // }

    const handleOnBlur = () => {
        setDoubleClick(old => old.map(item => false));
        setSingleClick(old => old.map(item => false));
    }

    return (
        <>
            <div className="w-[100%] h-[95%] flex justify-start items-start">
                <div className="homeScreen flex flex-col flex-wrap gap-[16px] max-w-[90%] w-min max-h-[95%] px-3 text-[rgba(256,256,256,0.8)] items-start justify-center">
                    {Folders.map((item, idx) => {
                        return (
                            // <div onClick={(e) => handleClick(e, idx)} key={idx} >
                            <div key={idx} >
                                <SingleFolder {...item} singleClick={singleClick[idx]} doubleClick={doubleClick[idx]} idx={idx} setSingleClick={setSingleClick} setDoubleClick={setDoubleClick} />
                            </div>
                        )
                    })}
                </div>
                <div className="w-[100%] h-[100%]" onClick={() => { handleOnBlur() }}></div>
            </div>
        </>
    )
}
