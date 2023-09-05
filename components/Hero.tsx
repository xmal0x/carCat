'use client'

import React from 'react';
import {Button} from "@/components";
import Image from "next/image";
import {HeroProps} from "@/types";

const Hero = ({catalogRef}: HeroProps) => {

    const handleScroll = () => {
        if (catalogRef.current) {
            catalogRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }

    return (
        <div className="bg-black-100 w-full">
            <div className="hero">
                <div className="flex-1 padding-x">
                    <h1 className="hero__title">
                        Explore vehicle models by various filters
                    </h1>
                    <p className="hero__subtitle">Get detailed data on tens of thousands of vehicle models from dozens
                        of automakers</p>

                    <Button
                        text="Go to catalog >"
                        styles="mt-10 bg-yellow"
                        onClick={handleScroll}
                    />
                </div>
                <div className="hero__image-container">
                    <div className="hero__image">
                        <Image src="/cars/jeep.png" alt="hero image" fill className="object-contain"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
