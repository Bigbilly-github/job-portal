
import logo from '../svg/recentjobs/logo.svg'
import logo1 from '../svg/recentjobs/logo1.svg'
import logo2 from '../svg/recentjobs/logo2.svg'
import logo3 from '../svg/recentjobs/logo3.svg'
import logo4 from '../svg/recentjobs/logo4.svg'
import briefcase from '../svg/recentjobs/briefcase.svg'
import clock from '../svg/recentjobs/clock.svg'
import location from '../svg/recentjobs/location.svg'
import wallet from '../svg/recentjobs/wallet.svg'


function RecentJobs (){

    return(
        <>
        <section className="w-[100vw] h-[1618px] bg-white lg:px-[72px] px-[70px] pt-[60px] ">
            <h1 className="lg:w-[507px] h-[35px] font-fig  text-[28px] text-center lg:text-left lg:text-[50px] font-bold">
            Recent Jobs Available
            </h1>
            <div className="w-full lg:h-[223px] sm:h-[520px] h-[581px] px-[40px] py-[40px] shadow-md mb-[24px] mt-[60px] rounded-[10px]">
                <div className="lg:w-full flex flex-col lg:gap-[30px] justify-between lg:justify-start sm:h-[420px] h-[465px]   lg:h-[171px] ">
                    <div className="flex  flex-col lg:flex-row w-[401px] gap-[20px] h-[51px] lg:items-center">
                        <img src={logo} alt=""  className='w-[40px] h-[40px]'/>
                        <div className="flex flex-col h-[51px] ">
                            <h2 className='sm:w-[331px] w-[273px]  h-auto  font-fig font-semibold text-[28px]'>
                            Forward Security Director 
                            </h2>
                            <p className='w-[331px] h-[11px]] font-fig font-normal text-[18px]'>
                            Bauch, Schuppe and Schulist C
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row h-[248px] lg:h-[70px]  lg:justify-between lg:items-center  '>
                        <div className='flex  flex-col lg:flex-row gap-[24px] h-[230px] lg:h-[40px]  lg:items-center'>
                                <div className='flex gap-[12px]'>
                                    <img src={briefcase} alt="briefcase icon" />
                                    <p className='w-auto h-[15px] font-fig font-semibold  text-[18px] text-[#6C757D]'>
                                    Hotels & Tourism
                                    </p>
                                </div>

                                <div className='flex gap-[12px] '>
                                    <img src={clock} alt="briefcase icon" />
                                    <p className='w-auto h-[15px] font-fig font-semibold text-[18px] text-[#6C757D]'>
                                Full Time
                                    </p>
                                </div>
                                <div className='flex gap-[12px] '>
                                    <img src={wallet} alt="briefcase icon" />
                                    <p className='w-auto h-[15px] font-fig font-semibold text-[18px] text-[#6C757D]'>
                                $40000
                                    </p>
                                </div>
                                <div className='flex gap-[12px] '>
                                    <img src={location} alt="briefcase icon" />
                                    <p className='w-auto h-[15px] font-fig font-semibold text-[18px] text-[#6C757D]'>
                                New York, USA
                                    </p>
                                </div>

                        </div>
                        <button className='lg:w-[121px] w-[273px] sm:w-[320px] lg:h-[50px] hover:bg-slate-200  duration-200 hover:text-[#309689]  sm:h-[60px] h-[50px]  bg-[#309689] rounded-[8px] font-fig font-semibold text-[18px] text-[#FFFFFF]'>
                            Job Details
                        </button>
                       

                    </div>

                </div>



            </div>


            <div className="w-full lg:h-[223px] sm:h-[520px] h-[581px] px-[40px] py-[40px] shadow-md mb-[24px] mt-[60px] rounded-[10px]">
                <div className="lg:w-full flex flex-col lg:gap-[30px] justify-between lg:justify-start sm:h-[420px] h-[465px]   lg:h-[171px] ">
                    <div className="flex  flex-col lg:flex-row w-[401px] gap-[20px] h-[51px] lg:items-center">
                        <img src={logo} alt=""  className='w-[40px] h-[40px]'/>
                        <div className="flex flex-col h-[51px] ">
                            <h2 className='sm:w-[331px] w-[273px]  h-auto  font-fig font-semibold text-[28px]'>
                            Forward Security Director 
                            </h2>
                            <p className='w-[331px] h-[11px]] font-fig font-normal text-[18px]'>
                            Bauch, Schuppe and Schulist C
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row h-[248px] lg:h-[70px]  lg:justify-between lg:items-center  '>
                        <div className='flex  flex-col lg:flex-row gap-[24px] h-[230px] lg:h-[40px]  lg:items-center'>
                                <div className='flex gap-[12px]'>
                                    <img src={briefcase} alt="briefcase icon" />
                                    <p className='w-auto h-[15px] font-fig font-semibold  text-[18px] text-[#6C757D]'>
                                    Hotels & Tourism
                                    </p>
                                </div>

                                <div className='flex gap-[12px] '>
                                    <img src={clock} alt="briefcase icon" />
                                    <p className='w-auto h-[15px] font-fig font-semibold text-[18px] text-[#6C757D]'>
                                Full Time
                                    </p>
                                </div>
                                <div className='flex gap-[12px] '>
                                    <img src={wallet} alt="briefcase icon" />
                                    <p className='w-auto h-[15px] font-fig font-semibold text-[18px] text-[#6C757D]'>
                                $40000
                                    </p>
                                </div>
                                <div className='flex gap-[12px] '>
                                    <img src={location} alt="briefcase icon" />
                                    <p className='w-auto h-[15px] font-fig font-semibold text-[18px] text-[#6C757D]'>
                                New York, USA
                                    </p>
                                </div>

                        </div>
                        <button className='lg:w-[121px] w-[273px] sm:w-[320px] lg:h-[50px] hover:bg-slate-200  duration-200 hover:text-[#309689]  sm:h-[60px] h-[50px]  bg-[#309689] rounded-[8px] font-fig font-semibold text-[18px] text-[#FFFFFF]'>
                            Job Details
                        </button>
                       

                    </div>

                </div>



            </div>

            <div className="w-full lg:h-[223px] sm:h-[520px] h-[581px] px-[40px] py-[40px] shadow-md mb-[24px] mt-[60px] rounded-[10px]">
                <div className="lg:w-full flex flex-col lg:gap-[30px] justify-between lg:justify-start sm:h-[420px] h-[465px]   lg:h-[171px] ">
                    <div className="flex  flex-col lg:flex-row w-[401px] gap-[20px] h-[51px] lg:items-center">
                        <img src={logo} alt=""  className='w-[40px] h-[40px]'/>
                        <div className="flex flex-col h-[51px] ">
                            <h2 className='sm:w-[331px] w-[273px]  h-auto  font-fig font-semibold text-[28px]'>
                            Forward Security Director 
                            </h2>
                            <p className='w-[331px] h-[11px]] font-fig font-normal text-[18px]'>
                            Bauch, Schuppe and Schulist C
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row h-[248px] lg:h-[70px]  lg:justify-between lg:items-center  '>
                        <div className='flex  flex-col lg:flex-row gap-[24px] h-[230px] lg:h-[40px]  lg:items-center'>
                                <div className='flex gap-[12px]'>
                                    <img src={briefcase} alt="briefcase icon" />
                                    <p className='w-auto h-[15px] font-fig font-semibold  text-[18px] text-[#6C757D]'>
                                    Hotels & Tourism
                                    </p>
                                </div>

                                <div className='flex gap-[12px] '>
                                    <img src={clock} alt="briefcase icon" />
                                    <p className='w-auto h-[15px] font-fig font-semibold text-[18px] text-[#6C757D]'>
                                Full Time
                                    </p>
                                </div>
                                <div className='flex gap-[12px] '>
                                    <img src={wallet} alt="briefcase icon" />
                                    <p className='w-auto h-[15px] font-fig font-semibold text-[18px] text-[#6C757D]'>
                                $40000
                                    </p>
                                </div>
                                <div className='flex gap-[12px] '>
                                    <img src={location} alt="briefcase icon" />
                                    <p className='w-auto h-[15px] font-fig font-semibold text-[18px] text-[#6C757D]'>
                                New York, USA
                                    </p>
                                </div>

                        </div>
                        <button className='lg:w-[121px] w-[273px] sm:w-[320px] lg:h-[50px] hover:bg-slate-200  duration-200 hover:text-[#309689]  sm:h-[60px] h-[50px]  bg-[#309689] rounded-[8px] font-fig font-semibold text-[18px] text-[#FFFFFF]'>
                            Job Details
                        </button>
                       

                    </div>

                </div>



            </div>


            

        </section>
        </>
    )

}
export default RecentJobs