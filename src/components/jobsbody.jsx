import image from '../svg/jobsbody/Logo.svg'
import briefcase from '../svg/jobsbody/briefcase.svg'
import clock from '../svg/jobsbody/clock.svg'
import wallet from '../svg/jobsbody/wallet.svg'
import location from '../svg/jobsbody/location.svg'



function JobsBody (){

    const categoryOptions=["commerce", "hotels", "telecommunications", "education", "finance", "transport"];
    const jobType =["part-time", "full-time"];
    const experienceLevel = [];
    
 

    function ToUp (option){
        const firstLetter = option.slice(0,1).toUpperCase();
        const restOfLetters = option.slice(1,option.length)
        const newOption= `${firstLetter}${restOfLetters}`

        return newOption;
        
    }


    return(
        <>
        <section className="w-[100vw] h-auto bg-[#FFFFFF] xl:px-[72px] md:px-[40px] sm:px-[30px]  pt-[60px] pb-[60px] gap-[24px] flex sm:flex-row flex-col sm:items-start items-center ">
            <div className="md:w-[314px] sm:w-[250px] w-[90%] h-auto pb-[80px] bg-[#EBF5F4] px-[20px] pt-[20px] rounded-[12px]">
                <h1 className=" font-fig font-semibold text-[20px] ">
                Search Job By
                </h1>
                <p className="mt-[20px] font-fig font-semibold text-[20px]">
                    Location
                </p>
                <select name="location" id="location" className="px-[12px] py-[10px] border-0 mt-[12px] bg-[#FFFFFF]  w-[98%] block sm:w-[180px]  md:w-[265px] rounded-[12px] font-fig font-normal text-[16px] text-[#6C757D]">
                    <option value="" >Choose City</option>
                    <option value="California, USA">California, USA</option>
                    <option value="Colorado, USA">Colorado, USA</option>
                    <option value="Georgia, USA">Georgia, USA</option>
                    <option value="Florida, USA">Florida, USA</option>
                    <option value="Illinois, USA">Illinois, USA</option>
                    <option value="Manchester, UK">California, USA</option>
                    <option value="New York, USA">New York, USA</option>
                    <option value="Texas, USA">Texas, USA</option>
                    <option value="Lagos, Nigeria">Lagos, Nigeria</option>
                    <option value="Toronto, Canada">Toronto, Canada</option>
                </select>

                <button className="bg-[#309689] hover:bg-[#424747] duration-150 w-[98%] sm:w-[180px] md:w-[266px] h-[40px] rounded-[8px] mt-[20px] font-fig font-semibold text-[16px] text-white">
                    Show Jobs
                </button>

                <div className="mt-[25px] ">
                    <p className="font-fig font-semibold text-[20px]">
                    Category
                    </p>
                   {categoryOptions.map((option,index)=> <div key={index} className="flex gap-[10px] font-fig text-[16px] mt-[4px] items-center">
                        <input type="radio" value={option}  id={option} name="category" />
                        <label htmlFor={option}>{ToUp(option)}</label>
                    </div>
                    )}

                    <button className="bg-[#309689] hover:bg-[#424747] duration-150  w-[98%] sm:w-[180px] md:w-[266px] h-[40px] rounded-[8px] mt-[20px] font-fig font-semibold text-[16px] text-white">
                        Show Jobs
                    </button>
                  
                </div>

                <div className="mt-[25px] ">
                    <p className="font-fig font-semibold text-[20px]">
                   Job Type
                    </p>
                   {jobType.map((type,index)=> <div key={index} className="flex gap-[10px] font-fig text-[16px] mt-[4px] items-center">
                        <input type="radio" value={type}  id={type} name="jobtype" />
                        <label htmlFor={type}>{ToUp(type)}</label>


                    </div>
                    )}
                    <button className="bg-[#309689] hover:bg-[#424747] duration-150 w-[98%] sm:w-[180px]  md:w-[266px] h-[40px] rounded-[8px] mt-[20px] font-fig font-semibold text-[16px] text-white">
                        Show Jobs
                    </button>


                  
                </div>


            </div>
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

                        <button className='xl:w-[121px] w-[273px] sm:w-[320px] xl:h-[50px] hover:bg-slate-200  duration-200 hover:text-[#309689]  sm:h-[60px] h-[50px]  bg-[#309689] rounded-[8px] font-fig font-semibold text-[18px] text-[#FFFFFF]'>
                            Job Details
                        </button>

                   </div>

                </div>

              

            </div>

        </section>
        </>
    )
}
export default JobsBody