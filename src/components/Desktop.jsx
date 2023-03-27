import React from 'react'
import { FolderModal } from './FolderModal';
import { SingleFolder } from './SingleFolder';
import { Folders } from '../context/TaskBarContext';

export const Desktop = () => {

    const [singleClick, setSingleClick] = React.useState(Folders.map(() => false));
    const [doubleClick, setDoubleClick] = React.useState(Folders.map(() => false));

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
                            <div key={idx} >
                                <SingleFolder {...item} singleClick={singleClick[idx]} doubleClick={doubleClick[idx]} idx={idx} setSingleClick={setSingleClick} setDoubleClick={setDoubleClick} windowsElement={item.windowsElement} />
                            </div>
                        )
                    })}
                </div>
                <div className="w-[100%] h-[100%]" onClick={() => { handleOnBlur() }}></div>
            </div>
        </>
    )
}
