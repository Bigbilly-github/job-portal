import briefcase from '../svg/jobsbody/briefcase.svg'
import clock from '../svg/jobsbody/clock.svg'
import wallet from '../svg/jobsbody/wallet.svg'
import location from '../svg/jobsbody/location.svg'
import { useValueContext } from "./propscontext";
import Jobs from '../jobs'
import { useState } from "react";
import JobDescription from './jobdescription';
;



function JobsDetails (){
    const {value, category, getLogo, limit, setLimit} = useValueContext();

    return(
        <>
        <section className='h-auto w-[100vw] mb-[100px]'>
             <div   className=" xl:w-[98%] w-[100%] mx-auto flex flex-col mb-[40px] justify-center  gap-[28px] items-center h-[550px] xl:h-[251px] ">
                                               <div className="xl:w-[92%] sm:w-[90%] w-[85%] md:h-[100px] h-[150px] flex xl:flex-row  flex-col gap-[10px] xl:gap-[20px] xl:items-center xl:mb-0 mb-[12px] ">
                                                    <img src={clock}  alt="logo icon"  className='w-[40px] h-[40px]' />
                                                    <div className='flex flex-col'>
                                                        <p className='font-fig font-semibold text-[28px]'>
                                                        Corporate Solutions Executive
                                                        </p>
                                                        <p className='font-fig text-[16px] h-[40px] mt-[10px] '>
                                                        Leffler and Son
                                                        </p>
                            
                                                    </div>
                            
                                               </div>
                                               <div className="xl:w-[92%] sm:w-[90%]  w-[85%] xl:h-[50px]  flex gap-[30px]  xl:flex-row flex-col xl:justify-between xl:items-center   ">
                                                    <div className='flex gap-[24px] xl:flex-row flex-col '>
                                                        <div className='flex gap-[12px] items-center'>
                                                            <img src={briefcase} alt="" />
                                                            <p className='font-fig font-semibold text-[16px] text-[#6C757D] '>
                                                            Commerce
                                                            </p>
                                                        </div>
                            
                                                        <div className='flex gap-[12px]  items-center'>
                                                            <img src={clock} alt="" />
                                                            <p className='font-fig font-semibold text-[16px] text-[#6C757D] '>
                                                            Full time
                                                            </p>
                                                        </div>
                    
                                                        <div className='flex gap-[12px]  items-center'>
                                                            <img src={clock} alt="" />
                                                            <p className='font-fig font-semibold text-[16px] text-[#6C757D] '>
                                                          Remote
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
                                                            New-York, USA
                                                            </p>
                                                        </div>
                            
                            
                                                    </div>
                            
                                                    <button className='xl:w-[306px] w-[98%] sm:w-[320px] xl:h-[50px] hover:bg-slate-200  duration-200 hover:text-[#309689]  sm:h-[60px] h-[50px]  bg-[#309689] rounded-[8px] font-fig font-semibold text-[18px] text-[#FFFFFF]'>
                                                       Apply Job
                                                    </button>
                            
                                               </div>
                            
                </div>

                <JobDescription/>

             

        </section>
        </>
    )

}
export default JobsDetails