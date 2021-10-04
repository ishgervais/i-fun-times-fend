import { createContext, useState } from "react"
import { checkLocalStorage } from "../../util/checkLocalStorage"
const UserContext = createContext({})
export function ContextProvider({ children }: any): JSX.Element {
    let darkmode:any = checkLocalStorage("darkmode")
    const [mode,setDarkMode] = useState<boolean>(darkmode)
    const setMode = ()=>{
     
      if(mode){
        localStorage.setItem("darkmode", "false");
        setDarkMode(false)
      }
       else{
       localStorage.setItem("darkmode", "true");  setDarkMode(true)
       }
  
       darkmode = checkLocalStorage("darkmode")
      
    }
  

    return (
        <UserContext.Provider
            value={{
                setMode,mode
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
export { UserContext }