import Analytics from "./component/Analytics";
import Cards from "./component/Cards";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Newsletter from "./component/Newsletter";
import Footer from './component/Footer'
export default function App() {
  return (
   <div>
     <Navbar></Navbar>
     <Hero></Hero>
     <Analytics></Analytics>
     <Newsletter/>
     <Cards/>
     <Footer/>
   </div>
  )
}