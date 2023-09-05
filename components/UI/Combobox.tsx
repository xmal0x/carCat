'use client'

import React, {Fragment, useMemo, useState} from 'react';
import {Combobox as HeadlessCombo, Transition} from '@headlessui/react'
import Image from "next/image";
import {ComboboxProps} from "@/types";

const Combobox = ({options, placeholder, onSelect, classNames = 'z-20', selectOnInit = false}: ComboboxProps) => {
    const [query, setQuery] = useState('')
    const [selected, setSelected] = useState(selectOnInit ? options[0] : '')

    const filteredOptions: string[] = useMemo(() => (
        query.trim() === ''
            ? options
            : options.filter(option => option.toLowerCase().trim().includes(query.toLowerCase().trim()))
    ), [query, options])

    const handleChange = (e: string) => {
        setSelected(e)
        onSelect(e)
    }

    return (
        <div className={`flex-1`}>
            <HeadlessCombo value={selected} onChange={handleChange}>
                <div className={`relative ${classNames}`}>
                    <div
                        className="relative w-full cursor-default overflow-hidden bg-white text-left focus:outline-none sm:text-sm">
                        <HeadlessCombo.Input
                            className="w-full border text-[16px] font-light p-4 text-black outline-none placeholder:text-medium-grey"
                            displayValue={(option: string) => option}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder={placeholder}
                        />
                        <HeadlessCombo.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <Image src="/chevron-up-down.svg" alt="chevron" height={20} width={20}/>
                        </HeadlessCombo.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-in duration-100"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition easy-out duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <HeadlessCombo.Options
                            className="absolute mt-0.5 max-h-60 w-full overflow-auto bg-white ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
                            {filteredOptions.length === 0 && query !== '' ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-medium-grey">
                                    Nothing found.
                                </div>
                            ) : (
                                filteredOptions.map((option, index) => (
                                    <HeadlessCombo.Option
                                        key={`${option}-${index}`}
                                        className={({active}) =>
                                            `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                                                active ? 'bg-black-100 text-white' : 'text-medium-grey'
                                            }`
                                        }
                                        value={option}
                                    >
                                        {({selected, active}) => (
                                            <>
                                                <span
                                                    className={`block truncate ${selected ? 'font-extrabold' : 'font-normal'}`}>
                                                    {option}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-black-100'}`}
                                                    ></span>
                                                ) : null}
                                            </>
                                        )}
                                    </HeadlessCombo.Option>
                                ))
                            )}
                        </HeadlessCombo.Options>
                    </Transition>
                </div>
            </HeadlessCombo>
        </div>
    );
};

export default Combobox;
