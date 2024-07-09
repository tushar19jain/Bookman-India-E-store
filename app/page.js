import { FaReadme } from "react-icons/fa";
import Navbar from "./components/Navbar/Navbar";
import SubBar from "./components/SubBar/SubBar";
import TopHeader from "./components/TopHeader/TopHeader";
import Image from "next/image";
import FeedPage from "./components/FeedPage/FeedPage";
import Footer from "./components/Footer/Footer";
import Link from "next/link";
export default function page(){
  return(
    <div className="flex flex-col">
      <TopHeader />
      <SubBar />
      <Navbar />
      <div className="flex sm:flex-row flex-col items-center justify-around my-20">
          <Image
            className="border-2" 
            src={'/hero.png'}
            height={300}
            width={300}
            alt="hero image"
          />
          <div className="sm:w-2/4 w-5/5 px-5 sm:px-0 my-5">
            <h1 className="font-bold text-2xl my-3">WELCOME TO BOOKMAN INDIA !</h1>
            <p className="text-grey-200">Founded in 1995, “Bookman India” is a prominent and widely renowned publishing house of children educational books in India successfully entering in its golden era. With each passing year, we have achieved new milestones and have now been positioned as pioneers in terms of techno-managerial acumen and quality of content in the school books publishing domain.</p>
            <br></br>
            <p className="text-grey-200">Though a span of fifteen years is not so long period in a children’s books publication’s life but our relentless endeavour to prove ourselves trusts worthy in producing quality educational material, textbooks & activity worksheets which has made us synonymous with modern education in the country.</p>
            <button className="flex items-center  p-3 my-3 border-2 border-blue-500 text-blue-500 gap-3"> <FaReadme  className="text-xl" /> <a href="https://www.bookmanindia.com/company-profile/"> Read more</a></button>
          </div>
      </div>
      <div className="px-36">
      <h1 className="text-2xl font-semibold">Explore our ebooks collection</h1>
      <ul className=" flex flex-col gap-5 my-20 text-blue-500 text-lg">
        <li><Link href = 'https://www.bookmanindia.com/little-wings-kindergarten-ebooks/'>Little Wings Kindergarten eBooks</Link></li>
        <li><Link href = 'https://www.bookmanindia.com/rising-stars-nursery-ebooks/'>Rising Stars Nursery eBooks</Link></li>
        <li><Link href = 'https://www.bookmanindia.com/bluebells-nursery-ebooks/'>Bluebells Nursery eBooks</Link></li>
      </ul>
      </div>
      <h1 className="text-2xl font-semibold px-36">New arrivals</h1>
      <FeedPage />
      <footer>
      <Footer />
      </footer>
    </div>
  )
}