import {connectToDB} from "@/utils/database";
import Car from "@/models/car";

export const GET = async (request: Request, {params}: {
    params: {
        id: string
    }
}) => {
    try {
        await connectToDB()
        const cars = await Car.find({
            user: params.id
        })

        return new Response(JSON.stringify(cars), {status: 201})
    } catch (e) {
        console.error("Failed to fetch cars: ", e)
        return new Response("Server error", {status: 500})
    }
}
