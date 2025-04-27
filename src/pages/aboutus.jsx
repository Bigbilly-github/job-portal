import Faq from "../components/faq"
import Footer from "../components/footer"
import Header from "../components/header"
import HowItWorks from "../components/howitworks"
import JobsHero from "../components/jobshero"
import Testimonial from "../components/testimonial"



function AboutUs (){
    return(
        <>
        <Header/>
        <main>
            <JobsHero text="About Us"/>
            <HowItWorks/>
            <Faq/>
            <Testimonial/>

        </main>
        <Footer/>
        
        </>
    )

}
export default AboutUs