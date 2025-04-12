import { createContext,useContext } from "react";
import logo from '../svg/recentjobs/Logo.svg'
import logo1 from '../svg/recentjobs/Logo1.svg'
import logo2 from '../svg/recentjobs/Logo2.svg'
import logo3 from '../svg/recentjobs/Logo3.svg'
import logo4 from '../svg/recentjobs/Logo4.svg'
const valueContext = createContext();



function ContextProvider ({ children }){

    function getLogo(category) {
        switch (category) {
          case 'hotels': return logo;
          case 'education': return logo1;
          case 'financials': return logo2;
          case 'commerce': return logo3;
          default: return logo4;
        }
      };
   
    

    return(
        <>
         <valueContext.Provider value={{getLogo}}>
                 {children}
        </valueContext.Provider>
        </>
    )

}
export default ContextProvider

export const useValueContext = () => {
    return useContext(valueContext);
  };