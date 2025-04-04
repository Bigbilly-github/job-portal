import Categories from "../components/categories"
import Future from "../components/future"
import Header from "../components/header"
import Hero from "../components/hero"
import RecentJobs from "../components/recentjobs"
import Sponsors from "../components/sponsors"



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
       
        </main>
        </>
    )

}
export default Homepage