import Navbar from "@/components/Navbar";
import "./globals.css";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Features from "@/components/Features";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <About/>
      <Features/>
      <Contacts/>
      <Footer/>
    </div>



  );
}
