import { createContext } from "react";
export const AppContext=createContext();
export default function AppContextProvider({children})
{
const values={}
return(
<AppContext.Provider value={values}>
{children}
</AppContext.Provider>
);

}