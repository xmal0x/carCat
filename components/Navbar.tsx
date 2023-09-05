'use client'

import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/index";
import React, {useEffect, useState} from "react";
import {ClientSafeProvider, getProviders, LiteralUnion, signIn, signOut, useSession} from 'next-auth/react'
import {usePathname} from 'next/navigation'
import { BuiltInProviderType } from "next-auth/providers/index";

const Navbar = () => {
    const {data: session} = useSession()

    const pathname = usePathname()

    const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null>(null)

    useEffect(() => {
        const setAuthProviders = async () => {
            const response = await getProviders()
            setProviders(response)
        }

        setAuthProviders()
    }, []);

    return (
        <div className="w-full absolute z-10 bg-black-100">
            <nav className="max-width flex-between padding-x py-3 text-white">
                <Link href="/" className="flex-center">
                    <Image src="/logo.svg" alt="logo" className="object-contain" width={40} height={40}/>
                    <p className="text-white md:text-[30px] text-[24px] ml-2 md:block hidden">CarCat</p>
                </Link>

                {session?.user
                    ? (
                        <div className="flex md:gap-6 gap-4">
                            <Image src={session?.user?.image || ''} alt="user image" width={50} height={50}
                                   className="object-contain"/>
                            {pathname === '/'
                                ? (
                                    <Link href="/my-cars">
                                        <Button text="My cars" styles="bg-yellow h-full"/>
                                    </Link>
                                )
                                : (
                                    <Link href="/">
                                        <Button text="Home" styles="bg-yellow h-full"/>
                                    </Link>
                                )}


                            <Button text="Log Out" styles="bg-white" onClick={signOut}/>
                        </div>
                    )
                    : (
                        <>
                            {providers && Object.values(providers).map((provider) => (
                                <Button key={provider.id} text="Log In" styles="bg-white"
                                        onClick={() => signIn(provider.id)}/>
                            ))}
                        </>
                    )
                }

            </nav>
            <hr className="max-width h-px my-2 opacity-10"/>
        </div>
    );
};

export default Navbar;
