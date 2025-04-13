
import JobsBodyMain from './jobsbodymain'
import JobsBodySidebar from './jobsbodysidebar'



function JobsBody (){

    


    return(
        <>
        <section className="w-[100vw] h-auto bg-[#FFFFFF] xl:px-[72px] md:px-[40px] sm:px-[30px]  pt-[60px] pb-[60px] gap-[24px] flex sm:flex-row flex-col sm:items-start items-center ">
                <JobsBodySidebar/>
                 <JobsBodyMain/>

        </section>
        </>
    )
}
export default JobsBody