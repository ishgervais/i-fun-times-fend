import NavLink from "./NavLink";
import {useRouter} from 'next/router'
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/ContextProvider";
import { checkLocalStorage } from "../util/checkLocalStorage";

export default function Navbar(): JSX.Element {


    const router = useRouter()
    const {mode,setMode}:any = useContext(UserContext)
    // setting the theme
  const [dark,setDark] = useState(false)
  useEffect(() => {
   let darkmode:any = checkLocalStorage("darkmode")
   setDark(darkmode)
  },[mode])
 
    return (
        <nav className="p-2 top">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="flex items-center gap-2 md:gap-5 justify-center md:justify-start cursor-pointer"
                onClick={()=>{router.push('/')}}
                >
                    <div className="logo bg-red-500 sm-circle flex items-center justify-center text-white p-1 rounded-full font-bold text-sm">I-Fun</div>
                    <h1 className="font-bold hover:text-red-500">i-Fun Times Magazine</h1>
                    <h1
                     onClick={() => setMode()}
                    >
                    {dark ?
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-6.671-5.575A8 8 0 1 0 16.425 5.328a8.997 8.997 0 0 1-2.304 8.793 8.997 8.997 0 0 1-8.792 2.304z" fill="rgba(255,255,255,1)"/></svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-4.68a8.965 8.965 0 0 0 5.707-2.613A8.965 8.965 0 0 0 15.32 7 6 6 0 1 1 7 15.32z" fill="rgba(149,164,166,1)"/></svg>

}
</h1>
                </div>
                <div className="overflow-x-auto">
                <div className="text-gray-500 flex gap-5 md:gap-0 md:justify-between mt-5 md:mt-0 text-sm w-max md:w-full">
                    <NavLink title="Academics" path="#academics" styles="hover:text-red-500 hover:font-bold"/>
                    <NavLink title="Literature" path="#literature" styles="hover:text-red-500 hover:font-bold"/>
                    <NavLink title="Internal relations" path="#relations" styles="hover:text-red-500 hover:font-bold"/>
                    <NavLink title="Culture week " path="#culture" styles="hover:text-red-500 hover:font-bold"/>
                    <NavLink title="I-Fun Credits " path="#credits" styles="hover:text-red-500 hover:font-bold"/>
                    <NavLink title="Talk to Us " path="#footer" styles="hover:text-red-500 hover:font-bold"/>
                </div>
                </div>
               
            </div>
        </nav>
    )
}