import { Link } from "react-router-dom";
import logo from '../svg/header/logo.svg'

function Header (){

    return(
        <>
        <header className='w-[100vw] h-[80px] fixed left-0 right-0 top-0 flex z-50 justify-center  items-center bg-black'>
            <div className=' w-[90vw] h-[60px] flex items-center justify-between '>
                <div className='flex gap-[10px]'>
                    <img src={logo} alt="web logo icon"  className="md:w-[28px] md:h-[28px] h-[20px] w-[20px]"/>
                    <Link to="/homepage">    <p className='font-fig md:text-[20px] text-[16px] font-semibold text-[#FFFFFF]'>
                                Job Portal
                            </p>
                    </Link>

                </div>
                <nav className=' w-[90px] h-[20px] block md:hidden'>
                    <ul className=' flex justify-between '>
                        <li className='text-[#FFFFFF] font-fig font-medium md:text-[16px] text-[14px] hover:opacity-60 '><Link to="/homepage" >Home</Link></li>
                        <li className='text-[#FFFFFF] font-fig font-medium md:text-[16px] text-[14px] hover:opacity-60 '><Link to="/jobs">Jobs</Link></li>
                    </ul>
                </nav>

                <nav className='lg:w-[386px] w-[300px] h-[27px]  hidden md:block'>
                    <ul className=' flex justify-between '>
                        <li className='text-[#FFFFFF] font-fig font-medium md:text-[16px] text-[14px] hover:opacity-60 '><Link to="/homepage" >Home</Link></li>
                        <li className='text-[#FFFFFF] font-fig font-medium md:text-[16px] text-[14px] hover:opacity-60 '><Link to="/jobs">Jobs</Link></li>
                        <li className='text-[#FFFFFF] font-fig font-medium md:text-[16px] text-[14px] hover:opacity-60  '><Link to="/about-us">About Us</Link></li>
                        <li className='text-[#FFFFFF] font-fig font-medium md:text-[16px] text-[14px] hover:opacity-60  '><Link to="/contactus">Contact Us</Link></li>
                    </ul>
                </nav>

                <div className='flex sm:gap-[20px]  sm:w-[100px] w-[80px]  justify-between items-center h-[40px]'>

                    <button className='bg-[#309689] cursor-pointer sm:w-[101px] w-[80px]  hover:text-[#309689] hover:bg-[#FFFFFF]  md:h-[40px] h-[35px] rounded-[8px] px-[14px] font-fig text-[13px] md:text-[16px] font-semibold text-[#FFFFFF]'>
                   <Link to="/login">Log out</Link> 
                    </button>
                </div>

            </div>
        </header>
        </>
    )

}
export default Header