import React from 'react'
import { Terminal } from '../apps/Terminal';

const taskContext = React.createContext();

export const useTask = () => React.useContext(taskContext);

const initialTasks = [
    {
        opened: false,
        containerRef: null,
        name: "VS Code",
        icon: "code.svg",
    },
    {
        opened: false,
        containerRef: null,
        name: "postman",
        icon: "postman.svg",
    },
    {
        opened: false,
        containerRef: null,
        name: "sublime",
        icon: "sublime.svg",
    },
    {
        opened: false,
        containerRef: null,
        name: "chrome",
        icon: "chrome.svg",
    },
]

export const Folders = [
    {
        windowsElement: <Terminal />,
        name: "MySelf",
        icon: "folder.png"
    },
    {
        windowsElement: <Terminal />,
        name: "Terminal",
        icon: "terminal.png",
    },
    {
        windowsElement: <Terminal />,
        name: "LinkedIn",
        icon: "linkedin.svg"
    },
    {
        windowsElement: <Terminal />,
        name: "Contact",
        icon: "gmail.svg"
    },
    {
        windowsElement: <Terminal />,
        name: "Github",
        icon: "github.svg"
    },

]

export const TaskBarContextProvider = ({ children }) => {

    const [tasks, setTasks] = React.useState(initialTasks);
    const [folderOpen, setFolderOpen] = React.useState(Folders.map(item => false));

    return (
        <taskContext.Provider value={{ tasks, setTasks, folderOpen, setFolderOpen }}>
            {children}
        </taskContext.Provider>
    )
}
