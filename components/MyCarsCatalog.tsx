'use client'

import React, {useEffect, useState} from 'react';
import {Car} from "@/types";
import {useSession} from "next-auth/react";
import {CarsView, Loader} from "@/components/index";
import {defaultLimit} from "@/constants";

const MyCarsCatalog = () => {
    const [cars, setCars] = useState<Car[]>([])
    const {data: session} = useSession()

    const [limit, setLimit] = useState(defaultLimit)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchMyCars = async () => {
            setLoading(true)
            try {
                const response = await fetch(`/api/users/${session?.user?.id}/cars`)
                const data: Car[] = await response.json()

                setCars(data)
            } catch (e) {
                console.error('An error occurred while fetching data', e)
            } finally {
                setLoading(false)
            }
        }

        if (session?.user?.id) {
            fetchMyCars()
        }
    }, [session]);

    return (
        <div className="padding-x pt-32 pb-16 max-width">
            <h2 className="text-4xl font-semibold">My cars</h2>
            <hr className="h-px my-8"/>
            {loading
                ? (
                    <div className="flex-center w-full py-8">
                        <Loader/>
                    </div>
                ) : (
                    <CarsView collection={cars} setLimit={setLimit} currentLimit={limit} type="profile"
                              setCollection={setCars}/>
                )
            }

        </div>
    );
};

export default MyCarsCatalog;
