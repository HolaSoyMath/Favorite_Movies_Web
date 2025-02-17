import { HTMLAttributes } from "react";
import { Ratings } from "../atoms/Rating";
import React from 'react'

export interface ScoreAndFavoriteProps 
    extends Omit<HTMLAttributes<HTMLDivElement>, "onChange">{
    functionRating: React.Dispatch<React.SetStateAction<number>>
    valueRating: number
    functionFavorite: React.Dispatch<React.SetStateAction<number>>
    valueFavorite: number
    className?: string
}

export function ScoreAndFavorite({functionRating, valueRating, functionFavorite, valueFavorite, className, ...props}: ScoreAndFavoriteProps) {
    return(
        <div style={{display: "flex"}} className={className} {...props}>
            <Ratings type="star" value={valueRating} onChange={functionRating} quantity={5} />
            <Ratings type="heart" value={valueFavorite} onChange={functionFavorite} quantity={1}/>
        </div>
    )
}