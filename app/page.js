"use client"
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/navigation'

export default function Home() {
  const router=useRouter()

  const navigate = (name)=>{
    router.push(name)
  }
  const[name,setName]=useState('Gayatri Sathawane')

  const apple = ()=>{
    setName("aakansha dahekar")
  }

  const InnerComponet =()=>{
    return(
     <div>
      <h1>Inner demo</h1>
     </div>
    )
  }
   
  return (
    <main className="min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>{name}</h1>
        <button onClick={()=>{
         apple()
        }}>Click me </button>
        <InnerComponet/>
        {InnerComponet()}
      </div>

      <h1>Home Page</h1>
      <Link href="/about" className='text-4xl'>Go to About page</Link><br/>
      
      <Link href="/login" className='text-4xl'>Go to Login  page</Link><br/>

      <button className='btn' 

      onClick={()=>{
        router.push('/login')
      }}
      >Go to Login page</button><br/><br/>
       <button className='btn' 

onClick={()=>{
  navigate('/about')
}}
>Go to about page</button>
    </main>
  )
}
