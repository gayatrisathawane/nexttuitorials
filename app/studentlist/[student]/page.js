"use client"
export default function StudentDetails({params}) {
    console.log(params)
    return (
        <div>
            
            <h1> Student list {params.student} </h1>

        </div>
    )
}