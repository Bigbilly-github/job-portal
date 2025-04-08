import Categories from "../components/categories"
import Footer from "../components/footer"
import Future from "../components/future"
import Header from "../components/header"
import Hero from "../components/hero"
import RecentJobs from "../components/recentjobs"
import Sponsors from "../components/sponsors"
import Testimonial from "../components/testimonial"



function Homepage (){

    return(
        <>
        <Header/>
        <main>
            <Hero/>
            <Sponsors/>
            <RecentJobs/>
            <Categories/>
            <Future/>
            <Testimonial/>
       
        </main>
        <Footer/>
        </>
    )

}
export default Homepage