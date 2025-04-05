
import image from '../img/future/future.jpg'

function Future (){
    return(
        <>
        <section className="w-[100vw] h-[600px] bg-[#FFFFFF80] flex justify-center items-center">
            <div className="w-[90vw] sm:h-[480px] h-[400px] bg-[#000000] rounded-[20px]  flex justify-between  items-center pl-[30px] sm:pl-[65px]">
                <div className='w-[45vw] md:h-[480px] h-[400px] mt-[85px]'>
                    <h1 className='sm:w-[438px] w-[300px] md:h-[145px] h-[120px] font-fig font-bold text-[30px] md:text-[50px] text-[#FFFFFF]'>
                    Create A Better Future For Yourself
                    </h1>
                    <p className='md:w-[600px] lg:w-[400px] sm:w-[400px] w-[300px] h-[34px] text-[#FFFFFF] md:mt-[40px] font-fig text-[16px]'>
                    At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. 
                    Blandit a massa elementum id scelerisque rhoncus
                    </p>

                    <button className='mt-[62px] w-[122px] h-[40px] bg-[#309689] text-white  font-fig font-semibold text-[16px] rounded-[8px]'>
                        Search Job
                    </button>

                </div>
                <div className='hidden lg:block w-[40vw]'>
                    <img src={image} alt=""  className='w-[600px] h-[480px]  rounded-[20px] rounded-l-none'/>
                </div>

            </div>

        </section>
        </>
    )
}
export default Future