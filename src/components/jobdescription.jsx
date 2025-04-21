import briefcase from '../svg/jobsbody/briefcase.svg'
import clock from '../svg/jobsbody/clock.svg'
import wallet from '../svg/jobsbody/wallet.svg'
import user from '../svg/jobdescription/user.svg'
import experience from '../svg/jobdescription/expertise1.svg'


import location from '../svg/jobsbody/location.svg'
function JobDescription ( ) {

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
            image:user,
            text:"Job Title"
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
        <section className=" w-[100%]  h-auto">
            <div className="xl:w-[90%]  mx-auto sm:w-[90%] w-[85%]  flex flex-col sm:flex-row gap-[20px]" >
                <div className="md:w-[76%] sm:w-[60%]   h-auto">
                    <h1 className=" h-[17px] font-fig font-semibold text-[24px]">
                    Job Description
                    </h1>
                    <p className="w-[100%] h-auto mt-[40px]">
                    Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc. 
                    Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augue lorem amet adipiscing cursus fames mauris. Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta eget blandit euismod sem nunc. Tortor gravida amet amet sapien mauris massa.Tortor varius nam maecenas duis blandit elit sit sit. Ante mauris morbi diam habitant donec.
                    </p>
                    <div className="mt-[60px] w-[100%]  ">
                            <h1 className="mt-[60px] h-[17px] font-fig font-semibold text-[24px]">
                                Key Responsibilities
                            </h1>
                            <ul className="mt-[45px] h-auto ">
                                <li className="before:content-['✅'] before:mr-3 w-[100%] font-fig text-[16px]  ">Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augu</li>
                                <li className="before:content-['✅'] before:mr-3 w-[100%] font-fig text-[16px]  ">Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augu</li>
                                <li className="before:content-['✅'] before:mr-3 w-[100%] font-fig text-[16px]  ">Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augu</li>
                                <li className="before:content-['✅'] before:mr-3 w-[100%] font-fig text-[16px]  ">Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augu</li>
                                <li className="before:content-['✅'] before:mr-3 w-[100%] font-fig text-[16px]  ">Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augu</li>
                            </ul>

                    </div>

                    <div className="mt-[60px] w-[100%]  ">
                            <h1 className="mt-[60px] h-[17px] font-fig font-semibold text-[24px]">
                            Professional Skills
                            </h1>
                            <ul className="mt-[45px] h-auto ">
                                <li className="before:content-['✅'] before:mr-3 w-[100%] font-fig text-[16px]  ">Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augu</li>
                                <li className="before:content-['✅'] before:mr-3 w-[100%] font-fig text-[16px]  ">Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augu</li>
                                <li className="before:content-['✅'] before:mr-3 w-[100%] font-fig text-[16px]  ">Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augu</li>
                                <li className="before:content-['✅'] before:mr-3 w-[100%] font-fig text-[16px]  ">Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augu</li>
                                <li className="before:content-['✅'] before:mr-3 w-[100%] font-fig text-[16px]  ">Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augu</li>
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
                            <p className='font-fig text-[16px]'>
                            Corporate Solutions 
                            Executive
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
                                Full Time

                            </p>
                            <p className="py-[12px] px-[10px] rounded-[12px] font-fig   sm:text-[16px] text-[14px]  text-[#309689] bg-[#30968910] w-auto">
                               Commerce

                            </p>
                            <p className="py-[12px] px-[10px] rounded-[12px] font-fig   sm:text-[16px] text-[14px]  text-[#309689] bg-[#30968910] w-auto">
                              New York, USA

                            </p>
                           
                            <p className="py-[12px] px-[10px] rounded-[12px] font-fig  sm:text-[16px] text-[14px]  text-[#309689] bg-[#30968910] w-auto">
                              role

                            </p>

                        </div>
                    </div>
                    <div className="mt-[70px] mb-[40px] h-auto">
                        <h1 className="font-fig xl:w-[92%] sm:w-[90%]  w-[85%] mx-auto  text-[50px] font-semibold mb-[30px]">
                            Related Jobs
                        </h1>

                        <div   className=" w-[100%] mx-auto flex flex-col shadow-md mb-[40px] justify-center  gap-[28px] items-center h-[550px] xl:h-[251px] ">
                                                                   <div className="xl:w-[92%] sm:w-[90%]  w-[85%] md:h-[100px] h-[150px] flex xl:flex-row  flex-col gap-[10px] xl:gap-[20px] xl:items-center xl:mb-0 mb-[12px] ">
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
                                                
                                                                        <button className='xl:w-[121px] w-[98%] sm:w-[320px] xl:h-[50px] hover:bg-slate-200  duration-200 hover:text-[#309689]  sm:h-[60px] h-[50px]  bg-[#309689] rounded-[8px] font-fig font-semibold text-[18px] text-[#FFFFFF]'>
                                                                           Job Details
                                                                        </button>
                                                
                                                                   </div>
                                                
                                    </div>

                         <div   className=" w-[100%] mx-auto flex flex-col shadow-md mb-[40px] justify-center  gap-[28px] items-center h-[550px] xl:h-[251px] ">
                                                                   <div className="xl:w-[92%] sm:w-[90%]  w-[85%] md:h-[100px] h-[150px] flex xl:flex-row  flex-col gap-[10px] xl:gap-[20px] xl:items-center xl:mb-0 mb-[12px] ">
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
                                                
                                                                        <button className='xl:w-[121px] w-[98%] sm:w-[320px] xl:h-[50px] hover:bg-slate-200  duration-200 hover:text-[#309689]  sm:h-[60px] h-[50px]  bg-[#309689] rounded-[8px] font-fig font-semibold text-[18px] text-[#FFFFFF]'>
                                                                           Job Details
                                                                        </button>
                                                
                                                                   </div>
                                                
                                    </div>

                    </div>
            
        </section>
        </>
    )

}
export default JobDescription