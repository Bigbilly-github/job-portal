import stars from '../svg/testimonial/Stars.svg'
import Quotes from '../svg/testimonial/Quotes.svg'
import image1 from '../img/testimonial/img2.jpeg'
import image2 from '../img/testimonial/img3.jpeg'
import image3 from '../img/testimonial/profileimg.jpeg'

function Testimonial (){
    const Testimonials = [
        {
            image:image1,
            headlinetext:"Amazing services",
            subtext:"This platform made my job search so much easier. I found relevant opportunities within minutes.",
            name:"Marco Ascensio",

        },

        {
            image:image2,
            headlinetext:"Everything simple",
            subtext:"The speed, responsiveness, and modern design of this job portal are impressive. It’s refreshing to see a platform that focuses equally on functionality and user experience.",
            name:"Sam Adebayo",

        },
        {
            image:image3,
            headlinetext:"Awesome, thank you!",
            subtext:"As a fresh graduate, I found it tough navigating job boards—until I landed here. This portal connected me to internships I didn’t even know existed!.",
            name:"Zion Cisneros",

        },

    ]

    return(
        <>
        <section className="w-[100vw] xl:h-[788px] lg:h-[1200px] md:h-[1600px] h-[1500px] bg-[#EBF5F4] justify-center  gap-[30px] lg:gap-[60px] flex flex-col items-center">
            <div className="lg:w-[813px] w-[85vw] h-[88px]   ">
                <h1 className="font-fig font-semibold lg:text-[50px] sm:[35px] md:[40px]  text-[24px] text-center m-0 w-[100%]  lg:w-[813px]  ">
                Testimonials from Our Customers
                </h1>
               

            </div>
            <div className="xl:w-[1296px] lg:w-[900px] xl:h-[400px] lg:h-[900px]  w-[85vw]  grid xl:grid-cols-3 lg:grid-cols-2 gap-[24px]">
              {Testimonials.map((testimony,index) =>   <div key={index} className="lg:w-[416px] w-800vw] h-[400px] bg-white rounded-[20px] mb-[10px] flex flex-col  py-[40px] pl-[40px]">
                    <img src={stars} alt="stars icon" className='w-[151px] h-[24px] mb-0 ' />
                    <h1 className='lg:w-[257px] w-[90%] h-[17px] font-fig font-semibold text-[24px] mt-[24px]'>
                    {testimony.headlinetext}
                    </h1>
                    <p className='lg:w-[331px] w-[90%] h-[94px] font-fig text-[16px] mt-[40px]'>
                   {testimony.subtext}

                    </p>
                    <div className='lg:w-[331px]  w-[90%] flex h-[100px] items-end justify-between mt-[20px]'>
                        <div className='flex w-[172px] h-[64px] items-center gap-[16px]'>
                            <img src={testimony.image} alt="profile image of a testifier" className='w-[50px] h-[50px] rounded-[50%]' />
                            <div className='flex flex-col  w-[98px] h-[50px] gap-[10px]'>
                                <p className='w-[138px] h-[15px] font-fig font-semibold text-[16px] '>
                               {testimony.name}
                                </p>
                                <p className='w-[98px]  h-[15px] text-[#00000060]'>
                                Happy Client
                                </p>
                            </div>
                        </div>
                        <img src={Quotes} alt="Quotes icon"  className='self-start '/>
                    </div>
              


                </div>
                )}


            </div>

        </section>
        </>
    )

}
export default Testimonial