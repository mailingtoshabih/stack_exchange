import { Footer } from '../components/Footer'
import { Leftbar } from '../components/Leftbar'
import { Navbar } from '../components/Navbar'
import { Questions } from '../components/Questions'
import { Rightbar } from '../components/Rightbar'




export const Home = () => {
    return (
        <>


            <>
                <Navbar/>
            </>



            {/* Section */}
            <div className='flex'>

                <Leftbar/>


                <Questions/>


                <Rightbar/>


            </div>


            <>
                <Footer/>
            </>


           




            




        </>
    )
}
