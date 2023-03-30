import React from "react"
import { Desktop } from "../src/components/Desktop";
import { Login } from "../src/components/Login";
import { TaskBar } from "../src/components/TaskBar";
import { UpperTaskBar } from "../src/components/UpperTaskBar";
import { TaskBarContextProvider } from "../src/context/TaskBarContext";
import ScrollOut from "scroll-out";

export default function Home() {

  const [loggedIn, setLoggedIn] = React.useState(true);
  return (
    <div className="App min-w-[100vw] min-h-[100vh] bg-black">
      <TaskBarContextProvider>
        {loggedIn ?
          <div className="desktop font-['DM_Sans']">
            <UpperTaskBar setLoggedIn={setLoggedIn} />
            <Desktop />
            <TaskBar />
          </div> :
          <Login setLoggedIn={setLoggedIn} />}
      </TaskBarContextProvider>
    </div>
  )
}
