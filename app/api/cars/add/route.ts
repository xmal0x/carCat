import {connectToDB} from "@/utils/database";
import Car from "@/models/car";

export const POST = async (req: Request, res: Response) => {
    try {
        const data = await req.json()

        await connectToDB()
        const car = new Car(data)
        await car.save()
        return new Response(JSON.stringify(car), {status: 201})
    } catch (e) {
        console.error("Error adding new car:", e)
        return new Response("Failed to add new car", {status: 500})
    }
}
