
import signup from '../svg/howitworks/signup.svg'
import login from '../svg/howitworks/login.svg'
import tick from '../svg/howitworks/tick.svg'
import wallet from '../svg/howitworks/wallet.svg'

function HowItWorks (){


    const details = [
        {
            image:signup,
            headlinetext:"Create Account",
            subtext:"Sign up to save jobs, set alerts, and track your applications. "
        },
        {
            image:login,
            headlinetext:"Login",
            subtext:"Log in to access your dashboard and manage your profile. "
        },
        {
            image:wallet,
            headlinetext:"Find Jobs",
            subtext:"	Discover job opportunities that match your skills. "
        },
        {
            image:tick,
            headlinetext:"Apply to Jobs",
            subtext:"Apply quickly and easily to your preferred jobs. "
        },
    ]
    return(
        <>
        <section className="w-full h-auto flex flex-col gap-[60px] mb-[100px] items-center pt-[60px]">
            <div className="w-[646px] h-auto">
                <h1 className="font-fig font-bold md:text-[40px] lg:text-[50px] text-[30px]  text-center">
                How it works
                </h1>

            </div>
            <div className="xl:w-[95%] w-[80%]  xl:h-[280px] h-auto bg-[#FFFFFF] xl:flex xl:justify-evenly grid sm:grid-cols-2 grid-cols-1 xl:gap-0  gap-[30px]">
               { details.map((detail,index)=>  <div className="xl:w-[306px] w-[100%] rounded-[20px] border-slate-300 shadow h-[280px] border flex flex-col items-center justify-center gap-[14px] ">
                    <img src={detail.image} alt="signup icon" />
                    <p className='font-fig font-bold text-[20px]'>
                    {detail.headlinetext}
                    </p>
                    <p className=' w-[240px] text-center font-fig text-[16px]'>
                  {detail.subtext}
                    </p>

                </div>
            )}


            </div>



        </section>
        </>
    )

}
export default HowItWorks