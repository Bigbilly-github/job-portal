
import logo from '../svg/header/logo.svg'

function Header (){

    return(
        <>
        <header className='w-full h-[80px] fixed left-0 right-0 top-0 flex z-50 justify-center  items-center bg-black'>
            <div className='  w-[90vw] h-[60px] flex items-center justify-between'>
                <div className='flex gap-[10px]'>
                    <img src={logo} alt="web logo icon" />
                    <p className='font-fig text-[20px] font-semibold text-[#FFFFFF]'>
                        Job Portal
                    </p>

                </div>

                <nav className='lg:w-[386px] w-[300px] h-[27px] hidden md:block'>
                    <ul className=' flex justify-between '>
                        <li className='text-[#FFFFFF] font-fig font-medium text-[16px] hover:opacity-60 '><a href="" >Home</a></li>
                        <li className='text-[#FFFFFF] font-fig font-medium text-[16px] hover:opacity-60 '><a href="">Jobs</a></li>
                        <li className='text-[#FFFFFF] font-fig font-medium text-[16px] hover:opacity-60 '><a href="">About Us</a></li>
                        <li className='text-[#FFFFFF] font-fig font-medium text-[16px] hover:opacity-60 '><a href="">Contact Us</a></li>
                    </ul>
                </nav>

                <div className='flex gap-[20px] w-[161px] items-center h-[40px]'>
                  <a href="" className='w-[40px]  text-[#FFFFFF] font-fig text-[16px] hover:opacity-60 font-medium'>Login</a>
                    <button className='bg-[#309689] cursor-pointer w-[101px] hover:text-[#309689] hover:bg-[#FFFFFF]  h-[40px] rounded-[8px] px-[14px] font-fig text-[16px] font-semibold text-[#FFFFFF]'>
                    Register
                    </button>
                </div>

            </div>
        </header>
        </>
    )

}
export default Header