import {Car, Filters} from "@/types";

export const fetchCars = async (filters: Filters): Promise<Car[]> => {
    if (!process.env.API_KEY) {
        throw new Error('Api key is not defined. Please check it in env vars')
    }

    if(!filters.make) {
        return []
    }

    const headers = {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const url = new URL(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars`)

    Object.entries(filters).forEach(([key, value]) => {
        if (value) {
            url.searchParams.append(key, value.toString())
        }
    })

    try {
        const response = await fetch(url, { headers });

        if (!response.ok) {
            throw new Error(`Failed to fetch data from API: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error while fetching cars data:', error);
        throw error;
    }
}

export const generateNumbers = (from: number, to: number) => {
    return Array.from({length: to - from + 1}, (x, i) => i + from)
}


