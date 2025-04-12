import image from '../svg/jobsbody/Logo.svg'
import logo from '../svg/recentjobs/Logo.svg'
import logo1 from '../svg/recentjobs/Logo1.svg'
import logo2 from '../svg/recentjobs/Logo2.svg'
import logo3 from '../svg/recentjobs/Logo3.svg'
import logo4 from '../svg/recentjobs/Logo4.svg'
import briefcase from '../svg/recentjobs/briefcase.svg'
import clock from '../svg/recentjobs/clock.svg'
import location from '../svg/recentjobs/location.svg'
import wallet from '../svg/recentjobs/wallet.svg'


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
        <section className="w-[100vw] h-auto bg-[#FFFFFF] px-[72px]  pt-[60px] gap-[24px] flex ">
            <div className="w-[314px] h-[1400px] bg-[#EBF5F4] px-[20px] pt-[20px] rounded-[12px]">
                <h1 className=" font-fig font-semibold text-[20px] ">
                Search Job By
                </h1>
                <p className="mt-[20px] font-fig font-semibold text-[20px]">
                    Location
                </p>
                <select name="location" id="location" className="px-[12px] py-[10px] border-0 mt-[12px] bg-[#FFFFFF] w-[265px] rounded-[12px] font-fig font-normal text-[16px] text-[#6C757D]">
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

                <button className="bg-[#309689] hover:bg-[#424747] duration-150  w-[266px] h-[40px] rounded-[8px] mt-[20px] font-fig font-semibold text-[16px] text-white">
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

                    <button className="bg-[#309689] hover:bg-[#424747] duration-150  w-[266px] h-[40px] rounded-[8px] mt-[20px] font-fig font-semibold text-[16px] text-white">
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
                    <button className="bg-[#309689] hover:bg-[#424747] duration-150  w-[266px] h-[40px] rounded-[8px] mt-[20px] font-fig font-semibold text-[16px] text-white">
                        Show Jobs
                    </button>


                  
                </div>


            </div>
            <div className="w-[100%] h-[1400px] border   pt-[40px]"> 
                <div className=" w-[100%] flex flex-col justify-center gap-[28px] items-center h-[251px] bg-[red]">
                   <div className="w-[90%] h-[100px] bg-[green]  flex  gap-[20px] items-center ">
                        <img src={image} alt="logo icon"  />
                        <div className='flex flex-col '>
                            <p className='font-fig font-semibold text-[28px]'>
                            Forward Security Director
                            </p>
                            <p className='font-fig text-[16px]'>
                            Bauch, Schuppe and Schulist Co
                            </p>

                        </div>

                   </div>
                   <div className="w-[90%] h-[40px] bg-[brown]">

                   </div>

                </div>

            </div>

        </section>
        </>
    )
}
export default JobsBody