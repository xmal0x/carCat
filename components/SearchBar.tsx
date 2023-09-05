'use client'

import React, {useEffect, useState} from 'react';
import {Button, Combobox} from "@/components";
import {carManufacturers, defaultLimit} from "@/constants";
import {SearchBarProps} from "@/types";
import {generateNumbers} from "@/utils";

const years = generateNumbers(1984, 2023)

const SearchBar = ({setManufacturer, setLimit, setYear}: SearchBarProps) => {

    const [searchManufacturer, setSearchManufacturer] = useState(carManufacturers[0])
    const [searchYear, setSearchYear] = useState('')

    useEffect(() => {
        //Api wants this values
        setManufacturer(searchManufacturer)
        setLimit(defaultLimit)
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setManufacturer(searchManufacturer)
        setYear(searchYear)
        setLimit(defaultLimit)
    }

    return (
        <form
            className="flex justify-between md:items-center md:flex-row flex-col gap-5"
            onSubmit={handleSubmit}
        >
            <Combobox
                options={carManufacturers}
                placeholder="Manufacturer..."
                onSelect={setSearchManufacturer}
                selectOnInit={true}
                classNames="z-30"
            />
            <Combobox
                options={years.map(y => `${y}`)}
                placeholder="Year..."
                onSelect={setSearchYear}
            />

            <Button text="Search" type="submit" styles="bg-yellow md:w-auto w-full" />
        </form>
    );
};

export default SearchBar;
