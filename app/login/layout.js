
"use client"
import Link from "next/link"
import "./login.css"
import { usePathname } from "next/navigation"
export default function Layout ({children}){
    const pathname =usePathname();
    console.log(pathname)
    return(
        <div>

            {pathname!='/login/loginteacher'?(
                <ul className="menu">
               <lin>
                Login Menu
               </lin>
                <li>
                        <Link href="/login">Login </Link>
                    </li>
                    <li>
                        <Link href="/login/loginstudent">Login for student </Link>
                    </li>
                    <li>
                        <Link href="/login/loginteacher">Login for Teacher </Link>
                    </li>
                   
                </ul>):null}
           

            {children}

        </div>
    )



}