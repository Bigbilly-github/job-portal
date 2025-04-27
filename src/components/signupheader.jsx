import logo from '../svg/header/logo.svg'

function SignUpHeader (){

    return(
        <>
        <header className='bg-black h-[80px] xl:pl-[70px] pl-[30px] sm:bg-[red] md:bg-[blue] lg:bg-[green] xl:bg-[orange] flex items-center'>
            <div className='flex gap-[10px]'>
                <img src={logo} alt="job portal icon" />
                <p className='font-fig text-[20px] font-semibold text-[#FFFFFF]'>
                                    Job Portal
                </p>

            </div>

            


        </header>
        </>
    )

}
export default SignUpHeader