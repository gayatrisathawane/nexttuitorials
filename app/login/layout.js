import Link from "next/link"
import "./login.css"
export default function Layout ({children}){
    return(
        <div>
           
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
                   
                </ul>

            {children}

        </div>
    )



}