import Header from "../components/header"
import JobsBody from "../components/jobsbody"
import JobsHero from "../components/jobshero"

function Jobs (){


    return(
        <>
        <Header/>
        <main>
            <JobsHero text="Jobs"/>
            <JobsBody/>

        </main>
       
        </>
    )

}
export default Jobs