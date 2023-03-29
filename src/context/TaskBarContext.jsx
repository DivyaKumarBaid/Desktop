import React from 'react'
import { FolderStructure } from '../apps/FolderStructure';
import { MySelf } from '../apps/MySelf';
import { SongPlayer } from '../apps/SongPlayer';
import { Terminal } from '../apps/Terminal';
import { project } from '../components/Projects';
import { WorkCard } from '../components/WorkCard';

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

const projectsSubFolders = project.map((item, idx) => {
    return ({
        name: `${item.name}.exe`,
        icon: "chrome.svg",
        windowsElement: <WorkCard {...item} key={"work" + idx} />,
        onDesktop: false,
        link: "/"
    })
});

// const projectsSubFolders = [
//     {
//         name: "Well-Being.exe",
//         icon: "chrome.svg",
//         windowsElement: <MySelf />,
//         onDesktop: false,
//         link: "/"
//     },
//     {
//         name: "Well-Being.exe",
//         icon: "chrome.svg",
//         windowsElement: <MySelf />,
//         onDesktop: false,
//         link: "/"
//     },
//     {
//         name: "Well-Being.exe",
//         icon: "chrome.svg",
//         windowsElement: <MySelf />,
//         onDesktop: false,
//         link: "/"
//     },
// ]

export const Folders = [
    {
        link: "/",
        onDesktop: true,
        windowsElement: <FolderStructure subFolders={projectsSubFolders} />,
        name: "Projects",
        icon: "folder.png"
    },
    {
        link: "/",
        onDesktop: true,
        windowsElement: <SongPlayer />,
        name: "Spotify",
        icon: "spotify.png"
    },
    {
        link: "/",
        subFolder: [{}],
        onDesktop: true,
        windowsElement: <MySelf />,
        name: "MySelf.txt",
        icon: "notebook.png"
    },
    {
        link: "/resume.pdf",
        onDesktop: true,
        windowsElement: <MySelf />,
        name: "Resume",
        icon: "resume.png"
    },
    {
        link: "/",
        subFolder: [{}],
        onDesktop: true,
        windowsElement: <Terminal />,
        name: "Terminal",
        icon: "terminal.png",
    },
    {
        link: "https://www.linkedin.com/in/divyakumarbaid",
        onDesktop: true,
        windowsElement: <Terminal />,
        name: "LinkedIn",
        icon: "linkedin.svg"
    },
    {
        link: "/",
        subFolder: [{}],
        onDesktop: true,
        windowsElement: <Terminal />,
        name: "Contact",
        icon: "gmail.svg"
    },
    {
        link: "https://github.com/DivyaKumarBaid",
        onDesktop: true,
        windowsElement: <Terminal />,
        name: "Github",
        icon: "github.svg"
    },
    , ...projectsSubFolders,
]


export const TaskBarContextProvider = ({ children }) => {

    const [tasks, setTasks] = React.useState(initialTasks);
    const [folderOpen, setFolderOpen] = React.useState(Folders.map(item => false));
    const [loggedIn, setLoggedIn] = React.useState(false);

    return (
        <taskContext.Provider value={{ loggedIn, setLoggedIn, tasks, setTasks, folderOpen, setFolderOpen }}>
            {children}
        </taskContext.Provider>
    )
}
