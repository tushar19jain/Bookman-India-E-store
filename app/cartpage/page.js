import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import SubBar from "../components/SubBar/SubBar";
import TopHeader from "../components/TopHeader/TopHeader";

export default function page(){
    return(
        <div>
            <TopHeader />
            <SubBar />
            <Navbar />
            <div>
            <h1 className="text-2xl px-16  py-3 font-semibold ">Items in your cart</h1>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}