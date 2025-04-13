import Jobs from '../jobs'
import { useValueContext } from "./propscontext";
import { useNavigate } from 'react-router-dom';
import telecommunications from '../svg/categories/telecommunications.svg'
import commerce from '../svg/categories/commerce.svg'
import education from '../svg/categories/education.svg'
import financials from '../svg/categories/financials.svg'
import hotels from '../svg/categories/hotels.svg'
import transport from '../svg/categories/transport.svg'

function Categories (){

    const navigate = useNavigate();
      const {AddSelectedOption,setSelectedOption,selectedOption,setCategory,setValue} = useValueContext();

      function HandleClick (value,category) {
        setCategory(category);
        setValue(value);
        navigate("/jobs");
     
        
      }

      
    const categoryArray = [
        {
            image:telecommunications,
            text:"Telecommunications",
            category:"telecommunications"
           
        },
        {
            image:commerce,
            text:"Commerce",
            category:"commerce"
        },
        {
            image:education,
            text:"Education",
            category:"education"
        },
        {
            image:financials,
            text:"Financials",
            category:"finance"
        },
        {
            image:hotels,
            text:"Hotels",
            category:"hotels"
        },
        {
            image:transport,
            text:"Transport",
            category:"transport"
        }
    ]

    function GetCount (category,Jobs){
        const categoryName= category.category;
       const newJobs=  Jobs.filter((job)=> job.category===categoryName);
        return newJobs.length;


    
    }

    return(
        <>
        <section className="w-full h-auto bg-[#30968910] flex flex-col items-center pt-[60px] gap-[100px]">
            
                <h1 className="font-fig font-bold text-center text-[30px] sm:text-[50px] w-[469px] h-[35px] ">
                     Browse by Category
                </h1>
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] xl:w-[1300px] mb-[120px] h-auto">
                  { categoryArray.map((category,index)=> <div key={index} className="sm:w-[400px] w-[350px] md:w-[300px] lg:w-[400px] xl:w-[400px] h-[280px] bg-white rounded-[20px] flex flex-col justify-evenly items-center">
                        <img src={category.image} alt={`${category} icon`} className='w-[40px] h-[40px]'/>
                        <h1 className='font-fig font-semibold text-[24px] '>
                           {category.text}
                        </h1>
                        <button onClick={()=> HandleClick(category.category, "category")} className='w-[98px] cursor-pointer  bg-[#30968910] px-[12px] pt-[10px]  font-fig font-normal text-[16px] text-[#309689] pb-[10px] '>
                           
                                 {GetCount(category,Jobs)} jobs
                               
                             
                        </button>

                    </div>
)}
                   

                </div>
          

        </section>
        </>
    )
}
export default Categories