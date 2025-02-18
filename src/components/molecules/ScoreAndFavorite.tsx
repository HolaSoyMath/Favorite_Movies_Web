import { HTMLAttributes, useState } from "react";
import { Ratings } from "../atoms/Ratings";
import React from 'react'
import { cn } from "tailwind-variants";

export interface ScoreAndFavoriteProps 
    extends HTMLAttributes<HTMLDivElement>{
    onRatingChange: React.Dispatch<React.SetStateAction<number>>
    ratingValue: number
    onFavoriteChange: React.Dispatch<React.SetStateAction<number>>
    favoriteValue: number
    className?: string
}

export function ScoreAndFavorite({onRatingChange, ratingValue, onFavoriteChange, favoriteValue, className, ...props}: ScoreAndFavoriteProps) {

    return(
        <div className={`flex  ${className}`} {...props}>
            <Ratings type="star" value={ratingValue} onChange={onRatingChange} quantity={5} />
            <Ratings type="heart" value={favoriteValue} onChange={onFavoriteChange} quantity={1}/>
        </div>
    )
}