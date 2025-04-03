

import spotify from '../svg/sponsors/spotify.svg'
import adobe from '../svg/sponsors/adobe.svg'
import linear from '../svg/sponsors/linear.svg'
import logo1 from '../svg/sponsors/logo1.svg'
import logo2 from '../svg/sponsors/logo2.svg'

function Sponsors (){
    return(
        <>
        <section className="w-full h-[128px] bg-black border-t border-slate-700 flex justify-center items-center">
            <div className="w-[90vw] h-[80px]  flex justify-between items-center">
                <img src={spotify} alt="spotify icon"  className='xl:w-[148px] xl:h-[48px] w-[61px] h-[40px] md:w-[104px] md:h-[60px] sm:w-[84px] sm:h-[60px]'/>
                <img src={adobe} alt="adobe icon" className='xl:w-[148px] xl:h-[48px] w-[61px] h-[40px] md:w-[104px] md:h-[60px] sm:w-[84px] sm:h-[60px]' />
                <img src={linear} alt="linear icon" className='xl:w-[148px] xl:h-[48px] w-[61px] h-[40px] md:w-[104px] md:h-[60px] sm:w-[84px] sm:h-[60px]' />
                <img src={logo1} alt="spotify icon" className='xl:w-[148px] xl:h-[48px] w-[61px] h-[40px] md:w-[104px] md:h-[60px] sm:w-[84px] sm:h-[60px]' />
                <img src={logo2} alt="spotify icon" className='xl:w-[148px] xl:h-[48px] w-[61px] h-[40px] md:w-[104px] md:h-[60px] sm:w-[84px] sm:h-[60px]' />

            </div>

        </section>
        </>
    )
}
export default Sponsors