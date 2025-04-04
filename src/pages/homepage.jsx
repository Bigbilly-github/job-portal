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
        </main>
        </>
    )

}
export default Homepage