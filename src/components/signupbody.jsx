import { Link } from "react-router-dom"
import { useValueContext } from "./propscontext";
import { useNavigate } from 'react-router-dom';


function SignUpBody (){

    const navigate = useNavigate();
     const {HandleSignupName,HandleSignupEmail,HandleSignupPword,signupdetails,setSignUpDetails,signedupusers,setSignedUpUsers,addSignUpDetails} = useValueContext();
     console.log(signedupusers);
     function isSignUpDetailsValid (signupdetails){
        return Object.values(signupdetails).every(value => value.trim() !== "");
  
      }

      function SignUp (addSignUpDetails,signupdetails,signedupusers) {
        if (isSignUpDetailsValid(signupdetails)) {
          
            const check = signedupusers.filter(user => user.email===signupdetails.email);
      
            if(check.length < 1){
                addSignUpDetails(signupdetails);
                setSignUpDetails(u => ({...u, name:"",email:"",pword:""}));
                navigate(`/homepage`);
              }

            else{
                alert(`This user details exist, kindly login`);
                setSignUpDetails(u => ({...u, name:"",email:"",pword:""}))
              

            }     
        }
        else {
            alert("Please fill out all fields before clicking signup.");
        }
    }
    

    return(
        <>
        <section className="bg-[#30968980] w-full lg:h-[90vh] sm:h-[80vh] h-[80vh]   flex justify-center items-center">
            <div className="xl:h-[87vh] xl:pb-0 sm:pb-[40px] pb-[30px] h-auto xl:w-[40%]  sm:w-[70%] w-[80%] border rounded-[20px] flex flex-col items-center sm:pt-[30px] pt-[20px] bg-slate-900">
                <h1 className=" w-[90%] text-center font-fig font-bold  lg:text-[40px] md:text-[35px]  sm:text-[30px] text-[18px] text-white">
                    Welcome to Job Portal
                </h1>
                <p className=" w-[90%] font-fig  text-center  md:text-[16px] sm:text-[14px] text-[12px] text-white">
                    Sign up to acess our latest Job Offers

                </p>
                <form className="w-[80%] ">
                        <div className="flex flex-col gap-[12px] mt-[30px]  overflow-hidden w-[100%] ">
                            <label htmlFor="name" className="text-white font-fig lg:text-[20px] md:text-[18px] sm:text-[16px] text-[12px]">Your Name:</label>
                            <input type="text" name="name" value={signupdetails.name} id="name" onChange={HandleSignupName}  className="sm:py-[12px] py-[6px] px-[12px] w-[100%] text-[12px]  rounded-[6px] bg-slate-100" placeholder="James Harden" required/>

                        </div>

                        <div className="flex flex-col gap-[12px] mt-[30px]  w-[100%] ">
                            <label htmlFor="email" className="text-white font-fig lg:text-[20px] md:text-[18px] sm:text-[16px] text-[12px]">Your Email:</label>
                            <input type="email" name="email" id="email" value={signupdetails.email}   onChange={HandleSignupEmail} className="sm:py-[12px] py-[6px] text-[12px] px-[12px] w-[100%] rounded-[6px] bg-slate-100" placeholder="email@gmail.com" required/>

                        </div>

                        <div className="flex flex-col gap-[12px] mt-[30px]  w-[100%] ">
                            <label htmlFor="pword" className="text-white font-fig lg:text-[20px] md:text-[18px] sm:text-[16px] text-[12px]">Enter Password:</label>
                            <input type="password" name="pword" id="pword" value={signupdetails.pword} onChange={HandleSignupPword}  className="sm:py-[12px] py-[6px] text-[12px] px-[12px] w-[100%] rounded-[6px] bg-slate-100" placeholder="***************" required/>

                        </div>

                </form>


                <button onClick={()=>SignUp(addSignUpDetails,signupdetails,signedupusers)} className="w-[80%]  sm:mt-[45px] mt-[25px] hover:bg-[#30968980] h-[40px]  sm:h-[50px] duration-200 bg-[#309689] rounded-[8px] font-fig font-semibold text-[14px] sm:text-[18px]  hover:text-[#309689]   ">
                    Sign Up
                </button>

                <p className="font-fig md:text-[18px] sm:text-[16px]  text-[12px] text-white mt-[20px] sm:mt-[40px] text-center">
                Already have an account?? &nbsp; <Link to="/login"> <span className="font-fig sm:text-[18px] text-[14px] hover:underline hover:text-slate-200  cursor-pointer text-[#a0a0c5]">Log in </span> </Link>
                </p>


            </div>

        </section>
        </>
    )

    
}
export default SignUpBody