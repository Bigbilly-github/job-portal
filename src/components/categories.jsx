
import telecommunications from '../svg/categories/telecommunications.svg'
import commerce from '../svg/categories/commerce.svg'
import education from '../svg/categories/education.svg'
import financials from '../svg/categories/financials.svg'
import hotels from '../svg/categories/hotels.svg'
import transport from '../svg/categories/transport.svg'

function Categories (){

    const categoryArray = [
        {
            image:telecommunications,
            text:"Telecommunications"
           
        },
        {
            image:commerce,
            text:"Commerce"
        },
        {
            image:education,
            text:"Education"
        },
        {
            image:financials,
            text:"Financials"
        },
        {
            image:hotels,
            text:"Hotels"
        },
        {
            image:transport,
            text:"Transport"
        }
    ]

    function GetCount (category){
    
    }

    return(
        <>
        <section className="w-full h-auto bg-[#30968910] flex flex-col items-center pt-[60px] gap-[100px]">
            
                <h1 className="font-fig font-bold text-[50px] w-[469px] h-[35px] ">
                     Browse by Category
                </h1>
                <div className="grid grid-cols-3 gap-[30px] w-[1300px] mb-[120px] h-[684px]">
                  { categoryArray.map((category,index)=> <div key={index} className="w-[400px] h-[280px] bg-white rounded-[20px] flex flex-col justify-evenly items-center">
                        <img src={category.image} alt={`${category} icon`} className='w-[40px] h-[40px]'/>
                        <h1 className='font-fig font-semibold text-[24px] '>
                           {category.text}
                        </h1>
                        <button className='w-[98px] cursor-pointer  bg-[#30968910] px-[12px] pt-[10px]  font-fig font-normal text-[16px] text-[#309689] pb-[10px] '>
                           
                                 1234 jobs
                               
                             
                        </button>

                    </div>
)}
                   

                </div>
          

        </section>
        </>
    )
}
export default Categories