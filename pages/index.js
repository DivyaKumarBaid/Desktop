import React from "react"
import { Desktop } from "../src/components/Desktop";
import { Login } from "../src/components/Login";
import { TaskBar } from "../src/components/TaskBar";
import { UpperTaskBar } from "../src/components/UpperTaskBar";
import { TaskBarContextProvider } from "../src/context/TaskBarContext";
import ScrollOut from "scroll-out";
import Head from "next/head";

export default function Home() {

  const [loggedIn, setLoggedIn] = React.useState(true);
  return (

    <>
      <Head>
        <title>Divyakr Baid - Developer</title>
        <meta name="description" content="Personal portfolio of Divyakr Baid, a developer specializing in web and mobile technologies." />
        <meta name="keywords" content="developer, portfolio, web development, mobile development, programming" />
        <meta name="author" content="Divyakr Baid" />
        <link rel="canonical" href="https://divyakrbaid.tech" />
        <meta property="og:title" content="Divyakr Baid - Developer" />
        <meta property="og:description" content="Personal portfolio of Divyakr Baid, a developer specializing in web and mobile technologies." />
        <meta property="og:image" content="https://i.postimg.cc/ZqcP1LJQ/divyakrbaid.png" />
        <meta property="og:url" content="https://divyakrbaid.tech" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Divyakr Baid - Developer" />
        <meta name="twitter:description" content="Personal portfolio of Divyakr Baid, a developer specializing in web and mobile technologies." />
        <meta name="twitter:image" content="https://i.postimg.cc/ZqcP1LJQ/divyakrbaid.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/assets/Logo.png" />
      </Head>
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
    </>
  )
}
