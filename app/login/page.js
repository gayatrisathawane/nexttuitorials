"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const login = ()=>{
    const router = useRouter()
    const navigate = (page)=>{
        router.push(`/login/${page}`)
    }
    return(
        <div>
            <h1>Login page</h1>
            <button className='btn'>
            <Link href="/login/loginstudent">login student</Link>
            </button><br/><br/>


            <button className='btn'>
            <Link href="/login/loginstudent">login Teacher</Link>
            </button><br/><br/>


            <button className='btn' onClick={()=>{
                router.push('/login/loginteacher ')
            }}>
              login page for teacher
            </button><br/><br/>

            <button className='btn' onClick={()=>{
               navigate("loginstudent")

            }}>login student page
           
            </button><br/><br/>

           
            <Link href="/">Go to home Page</Link>
        </div>
    )
}
export default login