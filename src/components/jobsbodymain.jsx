import { useValueContext } from "./propscontext";
import Jobs from '../jobs'
import image from '../svg/jobsbody/Logo.svg'
import briefcase from '../svg/jobsbody/briefcase.svg'
import clock from '../svg/jobsbody/clock.svg'
import wallet from '../svg/jobsbody/wallet.svg'
import location from '../svg/jobsbody/location.svg'

function JobsBodyMain (){
    const {value, category} = useValueContext();

    const newJobs = Jobs.filter((job => job[category] === value));
    console.log(newJobs);

    return(
        <>
            <div className="xl:w-[100%] sm:w-[80%] w-[90%]  h-auto   "> 
                        <div className=" w-[100%]  flex flex-col shadow-md mb-[40px] justify-center  gap-[28px] items-center h-[500px] xl:h-[251px] ">
                           <div className="w-[90%] h-[100px] flex xl:flex-row  flex-col gap-[10px] xl:gap-[20px] xl:items-center xl:mb-0 mb-[12px] ">
                                <img src={image} alt="logo icon"  className='w-[40px] h-[40px]' />
                                <div className='flex flex-col'>
                                    <p className='font-fig font-semibold text-[28px]'>
                                    Forward Security Director
                                    </p>
                                    <p className='font-fig text-[16px]'>
                                    Bauch, Schuppe and Schulist Co
                                    </p>
        
                                </div>
        
                           </div>
                           <div className="w-[90%] xl:h-[50px]  flex gap-[30px]  xl:flex-row flex-col xl:justify-between xl:items-center   ">
                                <div className='flex gap-[24px] xl:flex-row flex-col '>
                                    <div className='flex gap-[12px] items-center'>
                                        <img src={briefcase} alt="" />
                                        <p className='font-fig font-semibold text-[16px] text-[#6C757D] '>
                                            Hotels & Tourism
                                        </p>
                                    </div>
        
                                    <div className='flex gap-[12px]  items-center'>
                                        <img src={clock} alt="" />
                                        <p className='font-fig font-semibold text-[16px] text-[#6C757D] '>
                                         Full-Time
                                        </p>
                                    </div>
        
                                    <div className='flex gap-[12px]  items-center'>
                                        <img src={wallet} alt="" />
                                        <p className='font-fig font-semibold text-[16px] text-[#6C757D] '>
                                         $40000
                                        </p>
                                    </div>
                                    <div className='flex gap-[12px]  items-center'>
                                        <img src={location} alt="" />
                                        <p className='font-fig font-semibold text-[16px] text-[#6C757D] '>
                                         New York, USA
                                        </p>
                                    </div>
        
        
                                </div>
        
                                <button className='xl:w-[121px] w-[98%] sm:w-[320px] xl:h-[50px] hover:bg-slate-200  duration-200 hover:text-[#309689]  sm:h-[60px] h-[50px]  bg-[#309689] rounded-[8px] font-fig font-semibold text-[18px] text-[#FFFFFF]'>
                                    Job Details
                                </button>
        
                           </div>
        
                        </div>
        

        
                      
        
            </div>
        </>
    )

}
export default JobsBodyMain