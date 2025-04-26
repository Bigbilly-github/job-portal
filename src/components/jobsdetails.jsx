import briefcase from '../svg/jobsbody/briefcase.svg'
import clock from '../svg/jobsbody/clock.svg'
import wallet from '../svg/jobsbody/wallet.svg'
import location from '../svg/jobsbody/location.svg'
import { useValueContext } from "./propscontext";
import Jobs from '../jobs'
import { useState } from "react";
import JobDescription from './jobdescription';
;



function JobsDetails ({jobId}){
    const selectedJob = Jobs.filter(job => job.id === jobId);
    if (!selectedJob) return <p>Job not found.</p>;

    const {getLogo} = useValueContext();

    return(
        <>
       {selectedJob.map((job,index)=> <section className='h-auto w-[100vw] mb-[100px]'>
             <div  key={index}  className=" xl:w-[98%] w-[100%] mx-auto flex flex-col mb-[40px] justify-center  gap-[28px] items-center h-[550px] xl:h-[251px] ">
                                               <div className="xl:w-[92%] sm:w-[90%] w-[85%] md:h-[100px] h-[150px] flex xl:flex-row  flex-col gap-[10px] xl:gap-[20px] xl:items-center xl:mb-0 mb-[12px] ">
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
                                               <div className="xl:w-[92%] sm:w-[90%]  w-[85%] xl:h-[50px]  flex gap-[30px]  xl:flex-row flex-col xl:justify-between xl:items-center   ">
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
                                                           {job.employment}
                                                            </p>
                                                        </div>
                    
                                                        <div className='flex gap-[12px]  items-center'>
                                                            <img src={clock} alt="" />
                                                            <p className='font-fig font-semibold text-[16px] text-[#6C757D] '>
                                                        {job.type}
                                                            </p>
                                                        </div>
                            
                                                        <div className='flex gap-[12px]  items-center'>
                                                            <img src={wallet} alt="" />
                                                            <p className='font-fig font-semibold text-[16px] text-[#6C757D] '>
                                                          ${job.salary}
                                                            </p>
                                                        </div>
                                                        <div className='flex gap-[12px]  items-center'>
                                                            <img src={location} alt="" />
                                                            <p className='font-fig font-semibold text-[16px] text-[#6C757D] '>
                                                           {job.location}
                                                            </p>
                                                        </div>
                            
                            
                                                    </div>
                            
                                                    <button className='xl:w-[306px] w-[98%] sm:w-[320px] xl:h-[50px] hover:bg-slate-200  duration-200   sm:h-[60px] h-[50px]  bg-[#309689] rounded-[8px] '>
                                                       <a className='font-fig font-semibold text-[18px] text-[#FFFFFF] hover:text-[#309689]' href="https://www.linkedin.com" target="_blank">Apply Job</a>
                                                    </button>
                            
                                               </div>
                            
                </div>

                <JobDescription job={job}/>

             
        </section>
)}
        </>
    )

}
export default JobsDetails