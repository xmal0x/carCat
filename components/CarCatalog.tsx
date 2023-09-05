'use client'

import React, {useEffect, useRef, useState} from 'react';
import {fetchCars} from "@/utils";
import {CarsView, Loader, SearchBar} from "@/components";
import {Car, CarCatalogProps} from "@/types";
import {defaultLimit} from "@/constants";

const CarCatalog = ({catalogRef}: CarCatalogProps) => {
    const [carsCollection, setCarsCollection] = useState<Car[]>([])
    const [loading, setLoading] = useState(false)

    const [limit, setLimit] = useState(defaultLimit)
    const [make, setMake] = useState('')
    const [year, setYear] = useState('')

    useEffect(() => {
        const getCars = async () => {
            setLoading(true)

            try {
                const allCars = await fetchCars({limit, make, year}) || []
                setCarsCollection(allCars)
            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false)
            }

        }

        getCars()
    }, [limit, make, year]);

    return (
        <div className="padding-x py-12 max-width" ref={catalogRef}>
            <h2 className="text-4xl font-semibold">Car catalog</h2>
            <hr className="h-px my-8"/>
            <SearchBar
                setManufacturer={setMake}
                setYear={setYear}
                setLimit={setLimit}
            />
            <hr className="h-px my-8"/>

            {loading
                ? (
                    <div className="flex-center w-full py-8">
                        <Loader/>
                    </div>
                ) : (
                    <CarsView collection={carsCollection} setLimit={setLimit} currentLimit={limit}/>
                )
            }
        </div>
    );
};

export default CarCatalog;
