import {connectToDB} from "@/utils/database";
import Car from "@/models/car";

export const DELETE = async (request: Request, {params}: {
    params: {
        id: string
    }
}) => {
    try {
        await connectToDB()

        await Car.findByIdAndRemove(params.id)

        return new Response('Car deleted successfully', {status: 200})
    } catch (e) {
        console.error('Error deleting car:', e);
        return new Response('Internal Server Error', { status: 500 });
    }
}
