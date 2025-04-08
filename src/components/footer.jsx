
import image from '../svg/footer/check.svg'

function Footer (){

    return(
        <>
        <footer className="w-[100vw] md:h-[350px] h-[220px] bg-black flex justify-center items-end md:items-center">
            <div className="md:w-[85%] w-[85%]  h-[198px] flex justify-between md:items-start items-center">
                <div className='flex gap-[10px] items-center'>
                         <img src={image} alt="envelope icon" />
                         <p className='font-fig font-semibold text-[20px] text-[#FFFFFF]'>
                            Job Portal
                         </p>

                </div>
                <div className='flex flex-col '>
                    <p className='font-fig font-semibold text-[20px] text-white mb-0'>
                        Company
                    </p>
                    <p className='mt-[14px] font-fig text-[16px] text-white  hover:opacity-70 cursor-pointer' > 
                        About Us
                    </p>
                    <p className=' font-fig text-[16px] text-white   hover:opacity-70 cursor-pointer'> 
                        Contact Us
                    </p>
                    <p className=' font-fig text-[16px] text-white   hover:opacity-70 cursor-pointer'> 
                       Jobs
                    </p>
                </div>

                <div className='w-[306px] h-[198px] hidden md:block'>
                        <p className='font-fig font-semibold text-[20px] text-white mb-0'>
                          Newsletter
                        </p>
                        <p className=' mt-[14px] font-fig text-[14px] text-white'> 
                        Eu nunc pretium vitae platea. Non netus elementum vulputate 
                        </p>
                        <input type="email" value=""  className='bg-transparent text-[16px] text-[#FFFFFF80] w-[306px] h-[50px] border border-[#FFFFFF60] px-[12px] mt-[16px]  rounded-[12px]' placeholder='Enter Email Address'/>
                        <button className='w-[306px] h-[50px] hover:bg-[#30968970] duration-150 bg-[#309689] rounded-[12px] font-bold font-fig text-[16px] text-white mt-[16px] '>
                            Subscribe Now
                        </button>

                </div>
              

            </div>

        </footer>
        </>
    )

}
export default Footer