import { useValueContext } from "./propscontext";

function JobsBodySidebar (){

   
    const jobType =["on-site", "remote"];
    const catOptions = ["Colorado, USA", "California, USA", "Georgia, USA", "Illinois, USA", "Manchester, UK", "New York, USA", "Texas, USA", "Lagos, Nigeria", "Toronto, Canada"]
   
    
    const {ToUp,ChangeValue,selectedOption, categoryOptions, setSelectedOption, HandleChange, AddSelectedOption} = useValueContext();


    return(

        <>
             <div className="md:w-[314px] sm:w-[250px] w-[90%] h-auto pb-[80px] bg-[#EBF5F4] px-[20px] pt-[20px] rounded-[12px]">
                <h1 className=" font-fig font-semibold text-[20px] ">
                Search Job By
                </h1>
                <p className="mt-[20px] font-fig font-semibold text-[20px]">
                    Location
                </p>
                <select name="location" id="location"   className="px-[12px] py-[10px] border-0 mt-[12px] bg-[#FFFFFF]  w-[98%] block sm:w-[180px]  md:w-[265px] rounded-[12px] font-fig font-normal text-[16px] text-[#6C757D]">
                    <option value="" >Choose City</option>
                    {catOptions.map((cat)=>
                    <option value={cat}>{cat}</option>
                    
                    )}
                </select>

                <button onClick={()=>ChangeValue("location")} className="bg-[#309689] hover:bg-[#424747] duration-150 w-[98%] sm:w-[180px] md:w-[266px] h-[40px] rounded-[8px] mt-[20px] font-fig font-semibold text-[16px] text-white">
                    Show Jobs
                </button>

                <div className="mt-[25px] ">
                    <p className="font-fig font-semibold text-[20px]">
                    Category
                    </p>
                   {categoryOptions.map((option,index)=> <div key={index} className="flex gap-[10px] font-fig text-[16px] mt-[4px] items-center">
                        <input type="radio" value={option}  id={option} name="category" onChange={HandleChange} />
                        <label htmlFor={option}>{ToUp(option)}</label>
                    </div>
                    )}

                    <button onClick={()=>AddSelectedOption(selectedOption,"category")} className="bg-[#309689] hover:bg-[#424747] duration-150  w-[98%] sm:w-[180px] md:w-[266px] h-[40px] rounded-[8px] mt-[20px] font-fig font-semibold text-[16px] text-white">
                        Show Jobs
                    </button>
                  
                </div>

                <div className="mt-[25px] ">
                    <p className="font-fig font-semibold text-[20px]">
                   Job Type
                    </p>
                   {jobType.map((type,index)=> <div key={index} className="flex gap-[10px] font-fig text-[16px] mt-[4px] items-center">
                        <input type="radio" value={type}  id={type} name="type" onChange={HandleChange} />
                        <label htmlFor={type}>{ToUp(type)}</label>


                    </div>
                    )}
                    <button onClick={()=>AddSelectedOption(selectedOption,"type")} className="bg-[#309689] hover:bg-[#424747] duration-150 w-[98%] sm:w-[180px]  md:w-[266px] h-[40px] rounded-[8px] mt-[20px] font-fig font-semibold text-[16px] text-white">
                        Show Jobs
                    </button>


                  
                </div>


            </div>
        </>
    )
}
export default JobsBodySidebar