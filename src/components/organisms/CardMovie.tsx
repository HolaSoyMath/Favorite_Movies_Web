import { HTMLAttributes } from "react";
import { InfosMovieCard } from "../molecules/InfosMovieCard";
import { ScoreAndFavorite } from "../molecules/ScoreAndFavorite";
import { CardTop } from "../molecules/CardTop";
import React from 'react'
import { cn } from "tailwind-variants";

export interface CardMovieProps 
    extends HTMLAttributes<HTMLDivElement>{
    genre: string
    year: string
    description: string
    title: string   
    onRatingChange: React.Dispatch<React.SetStateAction<number>>
    ratingValue: number
    onFavoriteChange: React.Dispatch<React.SetStateAction<number>>
    favoriteValue: number
    className?: string
}

export function CardMovie({genre, year, description, title, onRatingChange, ratingValue, onFavoriteChange, favoriteValue, className}: CardMovieProps) {
    return(
        <div className={className}>
            <CardTop genre={genre} year={year}/>
            <InfosMovieCard description={description} title={title}/>
            <ScoreAndFavorite onFavoriteChange={onFavoriteChange} onRatingChange={onRatingChange} favoriteValue={favoriteValue} ratingValue={ratingValue} />
        </div>
    )
}