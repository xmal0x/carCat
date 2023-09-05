'use client'

import React, {useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import {footerMenu, socialMedia} from "@/constants";
import Button from "@/components/UI/Button";

const Footer = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        //TODO send Email logic
        console.log(email)
    }

    return (
        <footer className="footer">
            <div className="flex flex-col gap-14 justify-between padding-x md:py-16 py-12 max-width w-full">

                <div className="footer__menu">
                    <Link href="/" className="flex-center">
                        <Image src="/logo.svg" alt="logo" className="object-contain" width={40} height={40}/>
                        <p className="text-white text-[30px] ml-2">CarCat</p>
                    </Link>
                    <div className="footer__links">
                        {footerMenu.map(item => (
                            <Link href={item.link} className="footer__link" key={item.title}>
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="footer__contact">
                    <div className="flex-between lg:flex-row flex-col w-full lg:gap-0 gap-6">
                        <h4 className="footer__form-text flex-1">Just leave your email and we will contact you</h4>

                        <form
                            className="flex-1 flex-center md:flex-row flex-col w-full md:gap-0 gap-6"
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Your Email"
                                className="footer__form-input flex-1 md:mr-5 w-full"
                            />
                            
                            <Button text="Contact me" type="submit" styles="bg-yellow md:w-auto w-full" />

                        </form>
                    </div>
                </div>

                <div className="flex justify-between items-start md:flex-row flex-col-reverse md:gap-0 gap-6">
                    <div className="footer__address">
                        <p>CarStreet 111 2345 Cartown</p>
                        <p>admin@carcat.com  010 5668 2431</p>
                    </div>

                    <div className="flex-between gap-10 md:w-auto w-full">
                        {socialMedia.map(social => (
                            <Link href={social.link} target="_blank" key={social.link}>
                                <Image src={social.imageSrc} alt={social.link} width={20} height={20}/>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
