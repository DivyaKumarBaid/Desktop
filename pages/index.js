import React from "react"
import { Desktop } from "../src/components/Desktop";
import { TaskBar } from "../src/components/TaskBar";
import { UpperTaskBar } from "../src/components/UpperTaskBar";
import { TaskBarContextProvider } from "../src/context/TaskBarContext";

export default function Home() {
  return (
    <TaskBarContextProvider>
      <div className="desktop font-['DM_Sans']">
        <UpperTaskBar />
        <Desktop />
        <TaskBar />
      </div>
    </TaskBarContextProvider>
  )
}
