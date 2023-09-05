import {MenuLink, SocialLink} from "@/types";

export enum API_METHOD {
    POST = 'POST',
    GET = 'GET',
    DELETE = 'DELETE'
}

export const footerMenu: MenuLink[] = [
    {title: 'Log In', link: '/'},
    {title: 'Sign In', link: '/'},
    {title: 'About Us', link: '/'},
]

export const socialMedia: SocialLink[] = [
    {imageSrc: '/facebook.svg', link: 'https://www.facebook.com'},
    {imageSrc: '/twitter.svg', link: 'https://www.twitter.com'},
    {imageSrc: '/instagram.svg', link: 'https://www.instagram.com'},
    {imageSrc: '/linkedin.svg', link: 'https://www.linkedin.com'}
]

export const defaultLimit = 12

export const carManufacturers = [
    "Toyota",
    "Ford",
    "Chevrolet",
    "Honda",
    "Nissan",
    "BMW",
    "Mercedes-Benz",
    "Volkswagen",
    "Audi",
    "Hyundai",
    "Kia",
    "Subaru",
    "Mazda",
    "Lexus",
    "Porsche",
    "Volvo",
    "Jaguar",
    "Land Rover",
    "Tesla",
    "Fiat",
    "Jeep",
    "Mitsubishi",
    "GMC",
    "Buick",
    "Chrysler",
    "Cadillac",
    "Acura",
    "Mini",
    "Alfa Romeo",
    "Suzuki"
]

export const carParams = [
    "city_mpg",
    "class",
    "combination_mpg",
    "cylinders",
    "displacement",
    "drive",
    "fuel_type",
    "highway_mpg",
    "make",
    "model",
    "transmission",
    "year"
]
