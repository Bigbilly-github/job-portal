import phoneimg from '../svg/contactbody/phone.svg'
import clockimg from '../svg/contactbody/clock.svg'
import locationimg from '../svg/contactbody/location.svg'
import mailimg from '../svg/contactbody/mail.svg'



function ContactBody () {

    const contactdetails = [
        {
            image:mailimg,
            headlinetext:"Email",
            subtext:"yusufabiola555@gmail.com"
        },
        {
        image:phoneimg,
        headlinetext:"Call",
        subtext:"+2348135691043"
    },
   
    {
        image:clockimg,
        headlinetext:"Opening hours",
        subtext:"Mon - Fri: 10AM - 10PM"
    },
    {
        image:locationimg,
        headlinetext:"Office",
        subtext:"Lagos, Nigeria"
    },
    
]

    return(
        <>
        <section className="w-full h-auto  animate-fadeIn flex justify-center ">
            <div className="w-[90%] lg:h-[400px] sm:h-[600px] h-[450px] sm:pt-0 lg:pt-[120px]   pt-[50px] flex  items-center gap-[58px]">
                <div className="w-[100%] h-[459px] flex flex-col items-center ">
                    <h1 className="font-fig font-bold md:text-[50px] sm:text-[40px]  text-[30px] mb-0">
                   Get in touch with us 
                    </h1>
                   

                    <div className="mt-[40px] h-auto pb-[50px] lg:w-[100%] w-[98%]  lg:flex flg:lex-row lg:justify-between grid grid-cols-2 sm:gap-[60px] gap-[40px] lg:pl-0 pl-[15%]  ">
                      { contactdetails.map((contact,index)=>  <div className='flex  w-[221px]  flex-col justify-between h-[98px] sm:h-[108px]'> 
                            <img src={contact.image} alt="phone icon"  className='h-[28px] w-[28px]'/>
                            <p className='font-fig font-bold sm:text-[24px] text-[18px]'>
                            {contact.headlinetext}
                            </p>
                            <p className='font-fig text-wrap  font-medium md:text-[20px] sm:text-[18px] text-[12px]'>
                          {contact.subtext}
                            </p>

                        </div>
)}

                    </div>

                </div>

                



            </div>

        </section>
        </>
    )

}
export default ContactBody