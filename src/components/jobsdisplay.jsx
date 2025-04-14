

import image from '../svg/jobsbody/Logo.svg'
import briefcase from '../svg/jobsbody/briefcase.svg'
import clock from '../svg/jobsbody/clock.svg'
import wallet from '../svg/jobsbody/wallet.svg'
import location from '../svg/jobsbody/location.svg'



function JobsDisplay ({getLogo,job, index}){

    return(
        <>
          <div key={index}  className=" w-[100%]  flex flex-col shadow-md mb-[40px] justify-center  gap-[28px] items-center h-[550px] xl:h-[251px] ">
                                   <div className="w-[90%] md:h-[100px] h-[150px] flex xl:flex-row  flex-col gap-[10px] xl:gap-[20px] xl:items-center xl:mb-0 mb-[12px] ">
                                        <img src={getLogo(job.category)}  alt="logo icon"  className='w-[40px] h-[40px]' />
                                        <div className='flex flex-col'>
                                            <p className='font-fig font-semibold text-[28px]'>
                                           {job.role}
                                            </p>
                                            <p className='font-fig text-[16px] h-[40px] mt-[10px] '>
                                            {job.company}
                                            </p>
                
                                        </div>
                
                                   </div>
                                   <div className="w-[90%] xl:h-[50px]  flex gap-[30px]  xl:flex-row flex-col xl:justify-between xl:items-center   ">
                                        <div className='flex gap-[24px] xl:flex-row flex-col '>
                                            <div className='flex gap-[12px] items-center'>
                                                <img src={briefcase} alt="" />
                                                <p className='font-fig font-semibold text-[16px] text-[#6C757D] '>
                                                   {job.category}
                                                </p>
                                            </div>
                
                                            <div className='flex gap-[12px]  items-center'>
                                                <img src={clock} alt="" />
                                                <p className='font-fig font-semibold text-[16px] text-[#6C757D] '>
                                               {job.type}
                                                </p>
                                            </div>
        
                                            <div className='flex gap-[12px]  items-center'>
                                                <img src={clock} alt="" />
                                                <p className='font-fig font-semibold text-[16px] text-[#6C757D] '>
                                               {job.employment}
                                                </p>
                                            </div>
                
                                            <div className='flex gap-[12px]  items-center'>
                                                <img src={wallet} alt="" />
                                                <p className='font-fig font-semibold text-[16px] text-[#6C757D] '>
                                               {`$${job.salary}`}
                                                </p>
                                            </div>
                                            <div className='flex gap-[12px]  items-center'>
                                                <img src={location} alt="" />
                                                <p className='font-fig font-semibold text-[16px] text-[#6C757D] '>
                                                {job.location}
                                                </p>
                                            </div>
                
                
                                        </div>
                
                                        <button className='xl:w-[121px] w-[98%] sm:w-[320px] xl:h-[50px] hover:bg-slate-200  duration-200 hover:text-[#309689]  sm:h-[60px] h-[50px]  bg-[#309689] rounded-[8px] font-fig font-semibold text-[18px] text-[#FFFFFF]'>
                                            Job Details
                                        </button>
                
                                   </div>
                
                                </div>
        </>
    )

}
export default JobsDisplay