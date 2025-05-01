import { useParams } from "react-router-dom"
import Categories from "../components/categories"
import Footer from "../components/footer"
import Future from "../components/future"
import Header from "../components/header"

import JobsBody from "../components/jobsbody"
import JobsDetails from "../components/jobsdetails"
import JobsHero from "../components/jobshero"
import Testimonial from "../components/testimonial"

function Jobs (){
    const { jobId } = useParams();


    return(
        <>
        <Header/>
        <main >
            <JobsHero  text={jobId ? "Job Details" : "Jobs"}/>
           {jobId ?  <JobsDetails jobId={jobId}/> : <JobsBody/>}
           
            <Future/>
            <Testimonial/>
           
          

        </main>
        <Footer/>
       
        </>
    )

}
export default Jobs