import { Children } from "react"
import { Inter } from "next/font/google"
import { clerkProvider } from "@clerk/nextjs";
import "../globals.css"

export const metadata = {
    title:"Threads",
    description : 'A Next.js Meta Threads Application'
}

const inter = Inter({subsets:["latin"]})

export default function RootLayout({
    children
}:{
    children : React.ReactNode
}) {
    children : React.ReactNode
}) {
    return (
        <clerkProvider>
            <html lang='en'>
                <body className={`${inter.className} bg-dark-1`}>
                    {Children}
                </body>
            </html>
        </clerkProvider>
    )
}