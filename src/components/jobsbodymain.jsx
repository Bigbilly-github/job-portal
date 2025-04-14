import { useValueContext } from "./propscontext";
import Jobs from '../jobs'

import { useState } from "react";
import JobsDisplay from "./jobsdisplay";

function JobsBodyMain (){
    const {value, category, getLogo, limit, setLimit} = useValueContext();
    const [plan, setPlan] = useState(false);


    const newJobs = Jobs.filter((job => job[category] === value));
    console.log(newJobs);

    function TurnSwitch (){
        setPlan(!plan);


    }

    return(
        <>
          <div  className="xl:w-[100%] sm:w-[80%] w-[90%]  h-auto   "> 
           { newJobs.slice(0,limit).map((job,index)=> <JobsDisplay job={job} getLogo={getLogo} index={index} />)}

            <div className="w-[100%] flex justify-center mt-[90px] ">
                <a onClick={TurnSwitch} className={` ${plan ? "hidden" :
                                                     newJobs.length < 5 ? "hidden":
                                                                         "block"}  
                                                    hover:underline  font-semibold text-[24px] hover:text-black duration-150 cursor-pointer text-[#768088] `}>
                SEE MORE
                </a>
            </div>

          {  plan ?  newJobs.slice(limit,newJobs.length).map((job,index)=>   <JobsDisplay job={job} getLogo={getLogo} index={index} />) : null
        }


        </div>
        </>
    )

}
export default JobsBodyMain