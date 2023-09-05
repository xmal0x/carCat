import './globals.css'
import type {Metadata} from 'next'
import {Footer, Navbar} from "@/components";
import Provider from "@/components/Provider";
import React from "react";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export const metadata: Metadata = {
    title: 'CarCat',
    description: 'Thousands of vehicle models',
}
export default async function RootLayout({children,}: { children: React.ReactNode }) {
    const session = await getServerSession(authOptions)

    return (
        <html lang="en">
        <body className="relative">
        <Provider session={session}>
            <Navbar/>
            {children}
            <Footer/>
        </Provider>
        </body>
        </html>
    )
}
