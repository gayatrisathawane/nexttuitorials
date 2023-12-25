"use client"
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
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
    </main>
  )
}
