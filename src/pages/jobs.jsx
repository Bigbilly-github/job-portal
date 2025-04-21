import Categories from "../components/categories"
import Footer from "../components/footer"
import Future from "../components/future"
import Header from "../components/header"
import JobDescription from "../components/jobdescription"
import JobsBody from "../components/jobsbody"
import JobsDetails from "../components/jobsdetails"
import JobsHero from "../components/jobshero"
import Testimonial from "../components/testimonial"

function Jobs (){


    return(
        <>
        <Header/>
        <main>
            <JobsHero text="Jobs"/>
            <JobsDetails/>
           
            <Future/>
            <Testimonial/>
           
          

        </main>
        <Footer/>
       
        </>
    )

}
export default Jobs