'use client'

import React, {Fragment} from 'react';
import {Car, CarDetailsProps} from "@/types";
import {Dialog, Transition} from "@headlessui/react";
import Image from "next/image";
import {carParams} from "@/constants";

const CarDetails = ({isOpen, onClose, car}: CarDetailsProps) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-30" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25"/>
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex-center min-h-full p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel
                                className="flex flex-col max-h-[90vh] w-full max-w-md transform overflow-hidden rounded-xl bg-white shadow-xl transition-all p-6">
                                <button type="button"
                                        className="outline-none transition duration-300 absolute top-1 right-1 z-10 w-fit p-2 bg-white hover:bg-light-grey rounded-full"
                                        onClick={onClose}>
                                    <Image src="/close.svg"
                                           alt="Close"
                                           width={20}
                                           height={20}
                                           className="object-contain"/>
                                </button>

                                <div className="relative w-full object-contain h-40">
                                    <Image src="/cars/dodge.png" alt="car image" fill priority
                                           className="object-contain"/>
                                </div>

                                <h3 className="text-[22px] font-medium leading-6 text-gray-900 capitalize my-6">{car.make} {car.model}</h3>

                                <div className="flex flex-col gap-1">
                                    {carParams.map(param => (
                                        <div className="flex-between gap-10" key={param}>
                                            <p className="text-[14px] text-medium-grey capitalize">{param.replace('_', ' ')}</p>
                                            <p className="text-[16px] font-semibold capitalize">{car[param as keyof Car] || 'N/A'}</p>
                                        </div>
                                    ))}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default CarDetails;
