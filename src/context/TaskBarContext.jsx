import React from 'react'
import { FolderStructure } from '../apps/FolderStructure';
import { MySelf } from '../apps/MySelf';
import { SongPlayer } from '../apps/SongPlayer';
import { Terminal } from '../apps/Terminal';
import { project } from '../components/Projects';
import { WorkCard } from '../components/WorkCard';
import { Gallery } from '../apps/Gallery';

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
    }
]

const techSubFolders = [
    {
        name: `Next.jsx`,
        icon: "next-js.svg",
        windowsElement: <Gallery icon={"next-js.svg"} />,
        onDesktop: false,
        link: "/"
    },
    {
        name: `React.js`,
        icon: "react.png",
        windowsElement: <Gallery icon={"react.png"} />,
        onDesktop: false,
        link: "/"
    },
    {
        name: `Redux.js`,
        icon: "redux.svg",
        windowsElement: <Gallery icon={"redux.svg"} />,
        onDesktop: false,
        link: "/"
    },
    {
        name: `fastApi.py`,
        icon: "fastapi.svg",
        windowsElement: <Gallery icon={"fastapi.svg"} />,
        onDesktop: false,
        link: "/"
    },
    {
        name: `Node.js`,
        icon: "node.png",
        windowsElement: <Gallery icon={"node.png"} />,
        onDesktop: false,
        link: "/"
    },
    {
        name: `MySQL.png`,
        icon: "mysql.svg",
        windowsElement: <Gallery icon={"mysql.svg"} />,
        onDesktop: false,
        link: "/"
    },
    {
        name: `main.py`,
        icon: "python.svg",
        windowsElement: <Gallery icon={"python.svg"} />,
        onDesktop: false,
        link: "/"
    },
    {
        name: `index.js`,
        icon: "js.png",
        windowsElement: <Gallery icon={"js.png"} />,
        onDesktop: false,
        link: "/"
    },
    {
        name: `styles.css`,
        icon: "css.png",
        windowsElement: <Gallery icon={"css.png"} />,
        onDesktop: false,
        link: "/"
    },
    {
        name: `Java.class`,
        icon: "java-4.svg",
        windowsElement: <Gallery icon={"java-4.svg"} />,
        onDesktop: false,
        link: "/"
    },
    {
        name: `main.cpp`,
        icon: "cpp.png",
        windowsElement: <Gallery icon={"cpp.png"} />,
        onDesktop: false,
        link: "/"
    },
    {
        name: `.gitignore`,
        icon: "git.svg",
        windowsElement: <Gallery icon={"git.svg"} />,
        onDesktop: false,
        link: "/"
    },
    {
        name: `adobe.ai`,
        icon: "ai.svg",
        windowsElement: <Gallery icon={"ai.svg"} />,
        onDesktop: false,
        link: "/"
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
        windowsElement: <FolderStructure subFolders={techSubFolders} />,
        name: "TechStack",
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
    ...techSubFolders
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
