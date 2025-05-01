import { createContext,useContext,useEffect, useState } from "react";


import logo from '../svg/recentjobs/Logo.svg'
import logo1 from '../svg/recentjobs/Logo1.svg'
import logo2 from '../svg/recentjobs/Logo2.svg'
import logo3 from '../svg/recentjobs/Logo3.svg'
import logo4 from '../svg/recentjobs/Logo4.svg'
const valueContext = createContext();



function ContextProvider ({ children }){

  const [newsemail, setNewsEmail] = useState("");

  function HandleNewsEmail (e) {
    setNewsEmail(e.target.value);
  }
 



  const [signedupusers,setSignedUpUsers] = useState(()=>{
    try {
    const stored = localStorage.getItem('signedupusers');
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error("Invalid localStorage data:", e);
    return [];
  }
});

  function addSignUpDetails (signupdetails){
    
    setSignedUpUsers(u => ([...u, signupdetails]));
   

  }

  const [logindetails,setLogInDetails] = useState({
    
    email:"",
    pword:""
  });

  

  function HandleLoginEmail (e){
    if (e.target.value.trim() !=="" ){
    
      setLogInDetails(l=> ({...l, email:e.target.value}));

  }

  }
  function HandleLoginPword (e){
    if (e.target.value.trim() !=="" ){
    
      setLogInDetails(l=> ({...l, pword:e.target.value}));

  }
}

  const [signupdetails,setSignUpDetails] = useState({
                                                      name:"",
                                                      email:"",
                                                      pword:""
                                                    });

  function HandleSignupName (e){
    if (e.target.value.trim() !=="" ){
    
      setSignUpDetails(s=> ({...s, name:e.target.value}));

  }
}

  function HandleSignupEmail (e){
    if (e.target.value.trim() !=="" ){
    
      setSignUpDetails(s=> ({...s, email:e.target.value}));

  }

  }
  function HandleSignupPword (e){
    if (e.target.value.trim() !=="" ){
    
      setSignUpDetails(s=> ({...s, pword:e.target.value}));

  }
}



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
      if (screenWidth < 600 ){
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
      if  (screenWidth < 600 ){
        scrollToTop()
       

    }
}



    useEffect (()=> {
      localStorage.setItem("signedupusers", JSON.stringify(signedupusers));
    }, [signedupusers]);

    return(
        <>
         <valueContext.Provider value={{HandleNewsEmail,setNewsEmail,newsemail,HandleLoginEmail,HandleLoginPword,logindetails,setLogInDetails,signedupusers,setSignedUpUsers,addSignUpDetails,HandleSignupName,HandleSignupEmail,HandleSignupPword,signupdetails,setSignUpDetails,AddSelectedOption,categoryOptions, selectedOption, setSelectedOption, HandleChange,  ChangeValue, limit, setLimit,getLogo, value, setValue, category, setCategory, ToUp}}>
                 {children}
        </valueContext.Provider>
        </>
    )

}
export default ContextProvider

export const useValueContext = () => {
    return useContext(valueContext);
  };