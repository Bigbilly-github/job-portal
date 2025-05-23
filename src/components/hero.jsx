import { useValueContext } from "./propscontext";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import image1 from '../svg/hero/icon1.svg'
import image2 from '../svg/hero/icon2.svg'
import image3 from '../svg/hero/icon3.svg'


function Hero (){
    const {value, category, categoryOptions, ToUp, ChangeValue} = useValueContext();
    const navigate = useNavigate();


    function HandleClick (){
        ChangeValue("category"); 
        navigate("/jobs");
           
    
        
      
             

    }

    const details = [
        {
            image:image1,
            number: "25,850",
            text:"jobs"
        },
        {
            image:image3,
            number: "10,250",
            text:"Users"
        },
        {
            image:image2,
            number: "18,400",
            text:"Firms"
        }

    ]


    return(
        <>
        <section className="w-full animate-fadeIn lg:h-[604px] h-[550px] bg-black flex pt-[140px] justify-center">
            <div className="lg:w-[905px] lg:h-[394px] sm:w-[553px] md:w-[653px] w-[453px] h-[621px]  flex flex-col items-center ">
                <h1 className="lg:w-[903px] lg:h-[80px] sm:w-[553px]  md:w-[653px]  w-[453px] h-[60px] text-center font-fig  md:text-[50px] sm:text-[40px] text-[25px] lg:text-[70px] text-white font-bold mb-0 ">
                Find Your Dream Job Today!
                </h1> 
                <p className="lg:w-[903px] lg:h-[22px] sm:w-[553px]   md:w-[653px]  min-w-[300px] w-[353px] h-[44px] mb-0 font-fig sm:text-[18px] text-[16px]  font-medium text-center lg:mt-[24px]  md:mt-[15px] text-white ">
                Connecting Talent with Opportunity: Your Gateway to Career Success
                </p>
                <div className="mt-[40px] mb-0 flex  lg:flex-row">
                        <select name="category" id="category" defaultValue="" className="lg:w-[600px] md:w-[400px] sm:w-[300px] w-[150px] border-0 lg:px-[20px] px-[15px] text-center font-fig lg:text-[20px] text-[16px] font-medium text-slate-500 lg:h-[80px] h-[60px] rounded-r-none rounded-[16px] bg-white">
                            <option value="" disabled selected hidden>Select Job Category</option>
                           {categoryOptions.map((cat,index)=> <option  key={index} value={cat}>{ToUp(cat)}</option>

                           )}
                        </select>
                        <button  onClick={HandleClick} className="w-[174px] lg:h-[81px] h-[60px] font-fig border-0 bg-[#309689] hover:text-white  hover:bg-slate-600 text-white  lg:text-[20px] text-[16px] rounded-[16px] rounded-l-none">
                         Search Job
                        </button>


                </div>
                <div className='flex md:gap-[60px] gap-[20px] md:w-[600px] sm:w-[500px]  w-[350px] h-[60px] mt-[70px] pl-[10px]'>
                    {details.map((detail,index)=>    <div key={index} className='flex items-center gap-[12px] sm:w-[160px] w-[100px] h-[60px] '>
                            <img src={detail.image} alt="job icon" className='md:w-[60px] md:h-[60px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]'/>
                            <div className='flex flex-col md:gap-[12px] gap-[3px] '>
                                <p className='font-fig text-white text-[12px] md:text-[20px] font-bold w-[66px] h-[14px] '>
                                    {detail.number}
                                </p>
                                <p className='w-[35px]   font-fig md:text-[16px] text-[14px] text-white opacity-80  '>
                                   {detail.text}
                                </p>
                            </div>
                        </div>
                    )}


                </div>
               
                
            </div>

        </section>
        </>
    )

}
export default Hero