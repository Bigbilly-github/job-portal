import ContactBody from "../components/contactbody"
import Footer from "../components/footer"
import Header from "../components/header"
import JobsHero from "../components/jobshero"
import Sponsors from "../components/sponsors"



function ContactUs () {

    return(
        <>
        <Header/>
        <main>
            <JobsHero text="Contact Us"/>
            <ContactBody/>
            <Sponsors/>
        </main>
        <Footer/>
        </>
    )

}
export default ContactUs