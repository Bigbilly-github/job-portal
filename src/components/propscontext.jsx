import { createContext,useContext, useState } from "react";


import logo from '../svg/recentjobs/Logo.svg'
import logo1 from '../svg/recentjobs/Logo1.svg'
import logo2 from '../svg/recentjobs/Logo2.svg'
import logo3 from '../svg/recentjobs/Logo3.svg'
import logo4 from '../svg/recentjobs/Logo4.svg'
const valueContext = createContext();



function ContextProvider ({ children }){

  const scrollToTop = () => {
    window.scrollTo({
      top: 1100, 
      behavior: "smooth",
    });
  };
  const categoryOptions=["commerce", "hotels", "telecommunications", "education", "finance", "transport"];

    const [value , setValue] = useState("commerce");
    const [category, setCategory] = useState("category");
    const [limit, setLimit]= useState(5);
    const [selectedOption, setSelectedOption] = useState('');

    function getLogo(category) {
        switch (category) {
          case 'hotels': return logo;
          case 'education': return logo1;
          case 'financials': return logo2;
          case 'commerce': return logo3;
          default: return logo4;
        }
      };

      function ToUp (option){
        const firstLetter = option.slice(0,1).toUpperCase();
        const restOfLetters = option.slice(1,option.length)
        const newOption= `${firstLetter}${restOfLetters}`

        return newOption;
        
    }

    function ChangeValue(id) {

      const screenWidth = window.innerWidth;
     

      const newCategory = id;
      const newValue = document.querySelector(`#${id}`).value;
      setCategory(newCategory);
      setValue(newValue);
      if (screenWidth < 500 ){
        scrollToTop()
       

    }
   ;
}

    function HandleChange (e) {
      if (e.target.value.trim() !=="" ){
    
        setSelectedOption(e.target.value);

    }
   
    };

    function AddSelectedOption (selectedOption,category){
      const screenWidth = window.innerWidth;
      const newCategory= category;
      const newValue = selectedOption;
      setValue(newValue);
      setCategory(newCategory);
      if  (screenWidth < 500 ){
        scrollToTop()
       

    }

    

    }
    return(
        <>
         <valueContext.Provider value={{AddSelectedOption,categoryOptions, selectedOption, setSelectedOption, HandleChange,  ChangeValue, limit, setLimit,getLogo, value, setValue, category, setCategory, ToUp}}>
                 {children}
        </valueContext.Provider>
        </>
    )

}
export default ContextProvider

export const useValueContext = () => {
    return useContext(valueContext);
  };