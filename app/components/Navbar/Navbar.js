import Link from "next/link"
export default function Navbar(){
    return(
        <div>
            <ul className="sm:flex hidden flex-row justify-around text-[12px] border p-3 bg-white cursor-pointer">
                <li>
                    <Link href={'/'} >HOME</Link>
                </li>
                <li>
                    <details>
                        <summary>ABOUT US</summary>
                        <ul>
                            <li>Company profile</li>
                            <li>Our Infrastructure</li>
                            <li>Career</li>
                        </ul>
                    </details>
                </li>
                <li>
                <details>
                        <summary>E BOOKS</summary>
                        <ul>
                            <li>Little wings E-books</li>
                            <li>Rising stars E-books</li>
                            <li>Bluebells E-books</li>
                        </ul>
                    </details>
                </li>
                <li>
                <details>
                        <summary>Admin</summary>
                        <ul>
                            <li><Link href={'/adminlogin'}>Login</Link></li>
                            <li><Link href={'/'}>Logout</Link></li>
                        </ul>
                </details>
                </li>
                <li>
                <details>
                        <summary>NCERT REFERENCE BOOKS</summary>
                        <ul>
                            <li>English Medium Books</li>
                            <li>Hindi Medium Books</li>
                        </ul>
                </details>
                </li>
                <li>
                <details>
                        <summary>SCHOOL BOOKS</summary>
                        <ul>
                            <li>Little books</li>
                            <li>Rising stars</li>
                            <li>Lab manuals</li>
                        </ul>
                    </details>
                </li>
                <li>CONTACT US</li>
            </ul>
        </div>
    )
}