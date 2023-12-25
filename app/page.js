"use client"
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const[name,setName]=useState('Gayatri Sathawane')

  const apple = ()=>{
    setName("aakansha dahekar")
  }
   
  return (
    <main className="min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>{name}</h1>
        <button onClick={()=>{
         apple()
        }}>Click me </button>
      </div>
    </main>
  )
}
