"use client"
import {useRouter} from 'next/navigation'
import Link from 'next/link'
const About = ()=>{
    const router= useRouter()
    return(
        <div>
            <h1 className="text-3xl">About page</h1>
            <button  className="btn" onClick={()=>{
                router.push('/')
            }} >Go to Home page</button>
            <Link href="/about/aboutstudent">Go to about student page</Link>
            <Link href="/about/aboutteacher">Go to teacher page</Link>
        </div>
    )
}
export default About