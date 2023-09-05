'use client'

import React, {useState} from 'react';
import {CarCardProps, Fuel} from "@/types";
import Image from "next/image";
import {CarDetails} from "@/components";
import {useSession} from "next-auth/react";

const getFuelIconName = (fuelType: Fuel) => {
    switch (fuelType) {
        case "diesel":
            return 'diesel.svg'
        case "gas":
            return 'gas.svg'
        case "electricity":
            return 'electricity.svg'
        default:
            return 'diesel.svg'
    }
}

const CarCard = ({car, type, onRemove, onAdd}: CarCardProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const {data: session} = useSession()

    const handleAdd = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        onAdd(car)
    }

    const handleRemove = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        onRemove(car)
    }

    return (
        <>
            <div className="car-card relative" onClick={() => setIsOpen(true)}>
                {session?.user && (type === 'home'
                    ? (
                        <div className="absolute right-3 top-3 bg-yellow hover:shadow-xl p-2 rounded-full z-10"
                             onClick={handleAdd}>
                            <Image src="/add.svg" alt="add" height={25} width={25} className="transition duration-200 hover:scale-125"/>
                        </div>
                    )
                    : (
                        <div className="absolute right-3 top-3 bg-yellow hover:shadow-xl p-2 rounded-full z-10"
                             onClick={handleRemove}>
                            <Image src="/remove.svg" alt="remove" width={25} height={25} className="transition duration-200 hover:scale-125"/>
                        </div>
                    ))}

                <div className="car-card__image-container">
                    <Image src="/cars/dodge.png" alt="car image" fill priority className="object-contain"/>
                </div>

                <div className="car-card__text-container">
                    <h4 className="car-card__title">{car.make} {car.model}</h4>
                    <p className="car-card__subtitle">{car.class} {car.year}</p>
                </div>

                <div className="car-card__icons">
                    <Image src={`/fuel/${getFuelIconName(car.fuel_type)}`} alt="fuel" width={26} height={26}
                           title="Fuel type"/>
                    <p className="car-card__icons-text" title="Drive">{car.drive?.toUpperCase() || 'N/A'}</p>
                    <Image src="/transmission/manual.svg" alt="transmission" width={26} height={26}
                           title="Transmission"/>
                    <p className="car-card__icons-text" title="Cylinders">{car.cylinders}</p>
                </div>

            </div>

            <CarDetails isOpen={isOpen} onClose={() => setIsOpen(false)} car={car}/>
        </>
    );
};

export default CarCard;
