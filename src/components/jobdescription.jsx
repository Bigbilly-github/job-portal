import briefcase from '../svg/jobsbody/briefcase.svg'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import clock from '../svg/jobsbody/clock.svg'
import wallet from '../svg/jobsbody/wallet.svg'
import user from '../svg/jobdescription/user.svg'
import experience from '../svg/jobdescription/expertise1.svg'
import Jobs from '../jobs'
import { useValueContext } from "./propscontext";
import location from '../svg/jobsbody/location.svg'


function JobDescription ({job} ) {
     const {getLogo} = useValueContext();
     const navigate = useNavigate();
     const handleJobClick = (id) => {
        navigate(`/jobs/${id}`);
      };

    const relatedJobs= Jobs.filter((newjob)=>  newjob.category === job.category  );

    const options = [
        {
            image:user,
            text:"Job Title"
        },
        {
            image:clock,
            text:"Job Type"
        },
        {
            image:briefcase,
            text:"Category"
        },
  
        {
            image:experience,
            text:"Experience"
        },
        {
            image:wallet,
            text:"Salary"
        },
        {
            image:location,
            text:"Location"
        },
        
        
        
    ]


    return(
        <>
        <section className=" w-[100%]  h-auto flex flex-col items-center">
            <div className="xl:w-[90%]  mx-auto sm:w-[90%] w-[85%]  flex flex-col sm:flex-row gap-[20px]" >
                <div className="md:w-[76%] sm:w-[60%]   h-auto">
                    <h1 className=" h-[17px] font-fig font-semibold text-[24px]">
                    Job Description
                    </h1>
                    <p className="w-[100%] h-auto mt-[40px]">
                  {job.description}
                    </p>
                    <div className="mt-[60px] w-[100%]  ">
                            <h1 className="mt-[60px] h-[17px] font-fig font-semibold text-[24px]">
                                Key Responsibilities
                            </h1>
                            <ul className="mt-[45px] h-auto ">
                                {job.responsibilities.map((responsibility,index)=>  <li key={index}  className="before:content-['✅'] before:mr-3 w-[100%] font-fig text-[16px]  ">{responsibility}</li>
                                 )}                     
                            </ul>

                    </div>

                    <div className="mt-[60px] w-[100%]  ">
                            <h1 className="mt-[60px] h-[17px] font-fig font-semibold text-[24px]">
                            Professional Skills
                            </h1>
                            <ul className="mt-[45px] h-auto ">
                            {job.requirements.map((requirement,index)=> <li key={index} className="before:content-['✅'] before:mr-3 w-[100%] font-fig text-[16px]  ">{requirement}</li>
                            )}
                               
                            </ul>

                    </div>
                   
                    

                     

                   



                </div>
                <div className="md:w-[24%] sm:w-[40%] bg-[#EBF5F4] h-auto  pb-[70px] rounded-[20px] pl-[20px] pt-[28px]">
                    <h1 className='font-fig font-bold text-[18px] w-[100%]'>
                    Job Overview
                    </h1>
                  { options.map((option, index) => <div key={index} className='flex  w-[80%] items-start  mt-[32px] gap-[20px]'>
                        <img src={option.image} alt="profile image icon" />
                        <div className='flex flex-col'>
                            <p className='font-fig font-semibold text-[16px]'>
                           {option.text}
                            </p>
                            <p className='font-fig text-[16px] text-[#6C757D]'>
                                {option.text === "Job Title" ? job.role :
                                option.text === "Job Type" ? job.type :
                                option.text === "Category" ? job.category :
                                option.text === "Experience" ? `${job.experience} years` :
                                option.text === "Salary" ? `$${job.salary}` :
                                job.location

                             }
                            </p>

                        </div>
                    </div>
)}

                </div>
           

            </div>
            <div className="mt-[60px] xl:w-[92%] sm:w-[90%]  w-[85%]  mx-auto  flex flex-col gap-[30px]  h-auto ">
                        <h1 className="font-fig font-semibold text-[24px]">
                            Tags
                        </h1>
                        <div className="flex  gap-[24px] ">
                            <p className="py-[12px] px-[10px] rounded-[12px] font-fig  sm:text-[16px] text-[14px] text-[#309689] bg-[#30968910] w-auto">
                               {job.type}

                            </p>
                            <p className="py-[12px] px-[10px] rounded-[12px] font-fig   sm:text-[16px] text-[14px]  text-[#309689] bg-[#30968910] w-auto">
                              {job.category}

                            </p>
                            <p className="py-[12px] px-[10px] rounded-[12px] font-fig   sm:text-[16px] text-[14px]  text-[#309689] bg-[#30968910] w-auto">
                             {job.location}

                            </p>
                           


                        </div>
                    </div>
                    <div className="w-[95%] mt-[70px] mb-[40px] h-auto">
                        <h1 className="font-fig xl:w-[92%] sm:w-[90%]  w-[85%] mx-auto  text-[50px] font-semibold mb-[30px]">
                            Related Jobs
                        </h1>

                    { relatedJobs.slice(0,3).map((relatedJob,index)=>   <div   className=" w-[100%] mx-auto flex flex-col shadow-md mb-[40px] justify-center  gap-[28px] items-center h-[550px] xl:h-[251px] ">
                                                                   <div className="xl:w-[92%] sm:w-[90%]  w-[85%] md:h-[100px] h-[150px] flex xl:flex-row  flex-col gap-[10px] xl:gap-[20px] xl:items-center xl:mb-0 mb-[12px] ">
                                                                        <img src={getLogo(relatedJob.category)}  alt="logo icon"  className='w-[40px] h-[40px]' />
                                                                        <div className='flex flex-col'>
                                                                            <p className='font-fig font-semibold text-[28px]'>
                                                                            {relatedJob.role}
                                                                            </p>
                                                                            <p className='font-fig text-[16px] h-[40px] mt-[10px] '>
                                                                           {relatedJob.company}
                                                                            </p>
                                                
                                                                        </div>
                                                
                                                                   </div>
                                                                   <div className="xl:w-[92%] sm:w-[90%]  w-[85%] xl:h-[50px]  flex gap-[30px]  xl:flex-row flex-col xl:justify-between xl:items-center   ">
                                                                        <div className='flex gap-[24px] xl:flex-row flex-col '>
                                                                            <div className='flex gap-[12px] items-center'>
                                                                                <img src={briefcase} alt="" />
                                                                                <p className='font-fig font-semibold text-[16px] text-[#6C757D] '>
                                                                               {relatedJob.category}
                                                                                </p>
                                                                            </div>
                                                
                                                                            <div className='flex gap-[12px]  items-center'>
                                                                                <img src={clock} alt="" />
                                                                                <p className='font-fig font-semibold text-[16px] text-[#6C757D] '>
                                                                               {relatedJob.type}
                                                                                </p>
                                                                            </div>
                                        
                                                                            <div className='flex gap-[12px]  items-center'>
                                                                                <img src={clock} alt="" />
                                                                                <p className='font-fig font-semibold text-[16px] text-[#6C757D] '>
                                                                             {relatedJob.employment}
                                                                                </p>
                                                                            </div>
                                                
                                                                            <div className='flex gap-[12px]  items-center'>
                                                                                <img src={wallet} alt="" />
                                                                                <p className='font-fig font-semibold text-[16px] text-[#6C757D] '>
                                                                              ${relatedJob.salary}
                                                                                </p>
                                                                            </div>
                                                                            <div className='flex gap-[12px]  items-center'>
                                                                                <img src={location} alt="" />
                                                                                <p className='font-fig font-semibold text-[16px] text-[#6C757D] '>
                                                                                {relatedJob.location}
                                                                                </p>
                                                                            </div>
                                                
                                                
                                                                        </div>
                                                
                                                                        <button onClick={()=> handleJobClick(relatedJob.id)} className='xl:w-[121px] w-[98%] sm:w-[320px] xl:h-[50px] hover:bg-slate-200  duration-200 hover:text-[#309689]  sm:h-[60px] h-[50px]  bg-[#309689] rounded-[8px] font-fig font-semibold text-[18px] text-[#FFFFFF]'>
                                                                           Job Details
                                                                        </button>
                                                
                                                                   </div>
                                                
                                    </div>
                   ) }

                       

                    </div>

                    <button className=' w-[171px]  hover:bg-slate-200  duration-200 hover:text-[#309689]  sm:h-[60px] h-[50px]  bg-[#309689] rounded-[8px] font-fig font-semibold text-[18px] text-[#FFFFFF]'>
                       <Link to="/jobs">Back to Jobs</Link>
                    </button>
            
        </section>
        </>
    )

}
export default JobDescription