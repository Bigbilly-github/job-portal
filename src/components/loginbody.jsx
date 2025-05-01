
import { Link } from "react-router-dom"
import { useValueContext } from "./propscontext";
import { useNavigate } from 'react-router-dom';

function LoginBody (){
  

    const navigate = useNavigate();
    const {HandleLoginEmail,HandleLoginPword,logindetails,setLogInDetails,HandleSignupName,HandleSignupEmail,HandleSignupPword,signupdetails,setSignUpDetails,signedupusers,setSignedUpUsers,addSignUpDetails} = useValueContext();
    
    
    function isSignUpDetailsValid (signupdetails){
        return Object.values(signupdetails).every(value => value.trim() !== "");
  
      }

      function Login (isSignUpDetailsValid,logindetails,signedupusers){
        if (isSignUpDetailsValid(logindetails)) {
            const check = signedupusers.filter(user => user.email===logindetails.email && user.pword===logindetails.pword);
            if(check.length > 0){
                navigate("/homepage");
                navigate(0);


                setLogInDetails(l => ({...l, email:"",pword:""}))

            }

            else{
                alert(`This user details doesnt exist, kindly try again or sign in`);
                setLogInDetails(l => ({...l, email:"",pword:""}))
              

            }
        }
        else {
            alert("Please fill out all fields before you login");
        }
    }
    return(
        <>
        <section className="bg-[#30968980] lg:h-[90vh] sm:h-[80vh] h-[80vh] w-[full]  flex justify-center items-center">
            <div className="xl:h-[77vh] xl:pb-0 sm:pb-[40px] pb-[30px] h-auto xl:w-[40%]  sm:w-[70%] w-[80%] border rounded-[20px] flex flex-col items-center sm:pt-[30px] pt-[20px] bg-slate-900">
                <h1 className=" w-[90%] text-center font-fig font-bold  lg:text-[40px] md:text-[35px]  sm:text-[30px] text-[18px] text-white">
                    Welcome to Job Portal
                </h1>
                <p className=" w-[90%] font-fig  text-center  md:text-[16px] sm:text-[14px] text-[12px] text-white">
                    Log in to acess our latest Job Offers

                </p>


                <div className="flex flex-col gap-[12px] mt-[30px]  w-[80%] ">
                    <label htmlFor="loginemail" className="text-white font-fig lg:text-[20px] md:text-[18px] sm:text-[16px] text-[12px]">Your Email:</label>
                    <input type="email" name="loginemail" id="loginemail" value={logindetails.email}  onChange={HandleLoginEmail} className="sm:py-[12px] py-[6px] text-[12px] px-[12px] w-[100%] rounded-[6px] bg-slate-100" placeholder="email@gmail.com" required/>

                </div>

                <div className="flex flex-col gap-[12px] mt-[30px]  w-[80%] ">
                    <label htmlFor="loginpword" className="text-white font-fig lg:text-[20px] md:text-[18px] sm:text-[16px] text-[12px]">Enter Password:</label>
                    <input type="password" name="loginpword" id="loginpword" value={logindetails.pword} onChange={HandleLoginPword}  className="sm:py-[12px] py-[6px] text-[12px] px-[12px] w-[100%] rounded-[6px] bg-slate-100" placeholder="***************" required/>

                </div>

                <button onClick={()=>Login(isSignUpDetailsValid,logindetails,signedupusers)} className="w-[80%]  sm:mt-[45px] mt-[25px] hover:bg-[#30968980] h-[40px]  sm:h-[50px] duration-200 bg-[#309689] rounded-[8px] font-fig font-semibold text-[14px] sm:text-[18px]  hover:text-[#309689]   ">
                    Log in
                </button>

                <p className="font-fig md:text-[18px] sm:text-[16px]  text-[12px] text-white mt-[20px] sm:mt-[40px] text-center">
                Create A new account? &nbsp; <Link to="/"> <span className="font-fig sm:text-[18px] text-[14px] hover:underline hover:text-slate-200  cursor-pointer text-[#a0a0c5]">Sign up</span> </Link>
                </p>


            </div>

        </section>
        </>
    )

}
export default LoginBody