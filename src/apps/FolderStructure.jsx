import React from 'react'
import { SingleFolder } from '../components/SingleFolder'
import { Folders } from '../context/TaskBarContext';

export const FolderStructure = (props) => {

    const [singleClick, setSingleClick] = React.useState(props.subFolders.map(() => false));
    const [doubleClick, setDoubleClick] = React.useState(props.subFolders.map(() => false));

    const handleOnBlur = () => {
        setDoubleClick(old => old.map(item => false));
        setSingleClick(old => old.map(item => false));
    }


    return (
        <div className='flex h-[100%] '>
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
            <div className="w-[80%] h-[100%] p-4 shadow-lg flex gap-[16px]">
                {props.subFolders.map((item, idx) => {
                    return (
                        <div key={Folders.length - props.subFolders.length + idx} >
                            <SingleFolder {...item} singleClick={singleClick[Folders.length - props.subFolders.length + idx]} doubleClick={doubleClick[Folders.length - props.subFolders.length + idx]} idx={Folders.length - props.subFolders.length + idx} setSingleClick={setSingleClick} setDoubleClick={setDoubleClick} windowsElement={item.windowsElement} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
