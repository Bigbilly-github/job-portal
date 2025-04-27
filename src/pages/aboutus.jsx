import Faq from "../components/faq"
import Header from "../components/header"
import HowItWorks from "../components/howitworks"
import JobsHero from "../components/jobshero"



function AboutUs (){
    return(
        <>
        <Header/>
        <main>
            <JobsHero text="About Us"/>
            <HowItWorks/>
            <Faq/>

        </main>
        
        </>
    )

}
export default AboutUs