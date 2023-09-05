import React from 'react';
import {Car, CarsViewProps} from "@/types";
import {CarCard, ShowMore} from "@/components";
import {API_METHOD, defaultLimit} from "@/constants";
import {useSession} from "next-auth/react";

const addToFavorites = async (car: Car, userId: string) => {
    try {
        const response = await fetch('/api/cars/add', {
            method: API_METHOD.POST,
            body: JSON.stringify({
                ...car,
                user: userId
            })
        })

        return response.ok;
    } catch (e) {
        console.error('Error adding car to favorites:', e)
        return false
    }
}

const removeFromFavorites = async (id: string) => {
    try {
        await fetch(`/api/cars/${id}`, {
            method: API_METHOD.DELETE
        })
        return true
    } catch (e) {
        console.error(e)
        return false
    }
}

const CarsView = ({collection, setLimit, currentLimit, type = 'home', setCollection}: CarsViewProps) => {
    const {data: session} = useSession()

    const handleAddToFavorites = async (car: Car) => {
        if (!session?.user) {
            console.error('User is not defined')
            return
        }

        const addedSuccessfully = await addToFavorites(car, session?.user.id)

        if (addedSuccessfully) {
            alert('Car added to favorites')
        }
    }

    const handleRemoveFromFavorites = async ({_id}: Car) => {
        if (!_id) {
            console.error('Id is not defined')
            return
        }

        const removedSuccessfully = await removeFromFavorites(_id)

        if (removedSuccessfully && setCollection) {
            setCollection((prev: Car[]) => prev.filter(item => item._id !== _id))
        }
    }

    return collection.length > 0 ? (
        <section>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-5">
                {collection.map((car, index) => (
                    //Api does not have id
                    <CarCard car={car} key={`${car}-${index}`} type={type} onRemove={handleRemoveFromFavorites}
                             onAdd={handleAddToFavorites}/>
                ))}
            </div>

            <ShowMore
                setLimit={setLimit}
                currentPage={(currentLimit / defaultLimit)}
                isEnd={currentLimit > collection.length}
            />

        </section>
    ) : (
        <div>
            <p>Nothing found</p>
        </div>
    )
};

export default CarsView;
