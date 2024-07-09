import Image from "next/image"
import { FaMailBulk, FaPhone, FaStopwatch, FaTimes } from "react-icons/fa"
import { FaHouse } from "react-icons/fa6"
export default function Footer(){
    return(
        <div className="flex flex-col text-white bg-[#172337] p-10">
            <div className="flex flex-row text-sm justify-around">
            <section>
                <ul className="flex flex-col gap-5">
                    <li><h1 className="text-xl font-semibold my-4">CONTACT US</h1></li>
                    <li><Image src={'/bmi.jpg'} height={200} width={200} alt="logo"/></li>
                    <li className="flex items-center w-4/5 gap-2"><FaHouse /> <p>C - 4, D.I.C. Campus, Industrial Area, Muzaffarnagar (U.P.), Pin – 251002</p></li>
                    <li className="flex items-center"><FaPhone /> <p>+91- 7534857000</p></li>
                    <li className="flex items-center"><FaMailBulk /> <p>
                    bookmanindia@gmail.com</p></li>
                    <li className="flex items-center"><FaStopwatch/> <p>Mon - Sat / 10:00 AM - 6:00 PM</p></li>
                </ul>
            </section>
            <section>
            <ul className="flex flex-col gap-5">
                    <li><h1 className="text-xl font-semibold my-4">OUICK MENU</h1></li>
                    <li>Home</li>
                    <li>Campany profile</li>
                    <li>Carrer</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </section>
            <section>
            <ul className="flex flex-col gap-5">
                    <li><h1 className="text-xl font-semibold my-4">USEFUL LINKS</h1></li>
                    <li>Little Wings Books</li>
                    <li>Rising Stars Books</li>
                    <li>Blue Bells English Medium Books</li>
                    <li><p>Blue Bells Hindi Medium Books</p></li>
                    <li>
                    Lab Manuals
                    </li>
                </ul>
            </section>
            <section>
            <ul className="flex flex-col gap-5">
                    <li><h1 className="text-xl font-semibold my-4">OUR EBOOKS</h1></li>
                    <li>Little Wings Kindergarten eBooks</li>
                    <li><p> Little Wings Primary eBooks</p></li>
                    <li><p>Little Wings Junior eBooks</p></li>
                    <li><p>Little Wings Secondary eBooks</p></li>
                    <li><p>Smart Scholar eBooks</p></li>
                </ul>
            </section>
            <section>
            <ul className="flex flex-col gap-5" >
                    <li><h1 className="text-xl font-semibold my-4">OUR EBOOKS</h1></li>
                    <li>Rising Stars Nursery eBooks
</li>
                    <li> <p>
                    Rising Stars LKG eBooks

                    </p></li>
                    <li><p>Rising Stars UKG eBooks
</p></li>
                    <li><p>Rising Stars Primary eBooks
</p></li>
                    <li><p>
                    Rising Stars Junior eBooks

                    </p></li>
                </ul>
            </section>   
            </div>
            <hr className="my-3"></hr>
            <div className="flex items-center justify-between">
                <p className="text-sm w-3/5">Copyright © 2024 by Bookman India. All Rights Reserved.
                Website Developed by Tushar jain and Vansh Deshwal</p>
                <Image 
                    src={'/stripe.webp'}
                    alt="stripe"
                    height={30}
                    width={200}
                />
            </div>
        </div>
    )
}