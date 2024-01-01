"use client"
import Link from "next/link"
export default function StudentList() {
    return (
        <div>
            <h1> Student list </h1>
            <ul>
                <Link href="/studentlist/anil"><li>Anil</li></Link>
                <Link href="/studentlist/gayatri"><li>Gayatri</li></Link>
                <Link href="/studentlist/neha"><li>Neha</li></Link>
                <Link href="/studentlist/devashish"><li>Devashish</li></Link>

            </ul>
        </div>
    )
}