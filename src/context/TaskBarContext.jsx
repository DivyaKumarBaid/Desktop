import React from 'react'

const taskContext = React.createContext();

export const useTask = () => React.useContext(taskContext);

const initialTasks = [
    {
        opened: false,
        containerRef: null,
        name: "terminal",
        icon: "terminal.png",
    },
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

export const TaskBarContextProvider = ({ children }) => {

    const [tasks, setTasks] = React.useState(initialTasks);
    const [folderOpen, setFolderOpen] = React.useState(Folders.map(item => false));

    return (
        <taskContext.Provider value={{ tasks, setTasks, folderOpen, setFolderOpen }}>
            {children}
        </taskContext.Provider>
    )
}
