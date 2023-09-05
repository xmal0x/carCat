import React from "react";
import {MutableRef} from "preact/hooks";

export type Fuel = 'gas' | 'diesel' | 'electricity'
export type ButtonType = 'button' | 'submit'
export type CarsViewType = 'profile' | 'home'

export interface ButtonProps {
    text: string
    styles?: string
    onClick?: () => void
    type?: ButtonType
}

export interface MenuLink {
    title: string
    link: string
}

export interface SocialLink {
    imageSrc: string
    link: string
}

export interface Car {
    city_mpg: number
    class: string
    combination_mpg: number
    cylinders: number
    displacement: number
    drive: string
    fuel_type: Fuel
    highway_mpg: number
    make: string
    model: string
    transmission: string
    year: number
    _id?: string
}

export interface CarCardProps {
    car: Car
    type: CarsViewType
    onRemove: (car: Car) => void
    onAdd: (car: Car) => void
}

export interface Filters {
    limit: number
    make: string
    year: string
}

export interface ShowMoreProps {
    setLimit: (limit: number) => void
    isEnd: boolean
    currentPage: number
}

export interface CarDetailsProps {
    isOpen: boolean
    onClose: () => void
    car: Car
}

export interface ComboboxProps {
    placeholder: string
    options: string[]
    onSelect: (val: string) => void
    selectOnInit?: boolean
    classNames?: string
}

export interface SearchBarProps {
    setManufacturer: (val: string) => void
    setLimit: (val: number) => void
    setYear: (val: string) => void
}

export interface CarsViewProps {
    collection: Car[]
    setLimit: (limit: number) => void
    currentLimit: number
    setCollection?: (value: Car[] | ((prevState: Car[]) => Car[])) => void
    type?: CarsViewType
}

export interface LoaderProps {
    size?: number
    color?: string
    label?: string
}

export interface HeroProps {
    catalogRef: MutableRef<HTMLDivElement | null>
}

export interface CarCatalogProps {
    catalogRef: MutableRef<HTMLDivElement | null>
}
