import { HTMLAttributes } from "react";
import { InfosMovieCard } from "../molecules/InfosMovieCard";
import { ScoreAndFavorite } from "../molecules/ScoreAndFavorite";
import { CardTop } from "../molecules/TopMovieCard";

export interface ScoreAndFavoriteProps 
extends Omit<HTMLAttributes<HTMLDivElement>, "onChange">{
    genre: string
    year: string
    description: string
    title: string   
    functionRating: React.Dispatch<React.SetStateAction<number>>
    valueRating: number
    functionFavorite: React.Dispatch<React.SetStateAction<number>>
    valueFavorite: number
    className?: string
}

export function CardMovie({genre, year, description, title, functionRating, valueRating, functionFavorite, valueFavorite, className}: ScoreAndFavoriteProps) {
    return(
        <div className={`w-[400px] ${className}`}>
            <CardTop genre={genre} year={year}/>
            <InfosMovieCard description={description} title={title}/>
            <ScoreAndFavorite functionFavorite={functionFavorite} functionRating={functionRating} valueFavorite={valueFavorite} valueRating={valueRating} />
        </div>
    )
}