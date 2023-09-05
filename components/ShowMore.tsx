import React from 'react';
import {Button} from "@/components";
import {ShowMoreProps} from "@/types";
import {defaultLimit} from "@/constants";

const ShowMore = ({currentPage, setLimit, isEnd}: ShowMoreProps) => {
    const calculateNextLimit = () => {
        //api does not support pagination:(
        return (currentPage + 1) * defaultLimit
    }

    const handleShowMore = () => {
        if (!isEnd) {
            const nextLimit = calculateNextLimit()
            setLimit(nextLimit)
        }
    }

    return (
        <>
            {!isEnd && (
                <div className="w-full flex-center pt-8">
                    <Button text="Show more" styles="bg-yellow w-full md:w-auto" onClick={handleShowMore}/>
                </div>
            )}
        </>
    )
}

export default ShowMore;
