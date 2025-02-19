import { HTMLAttributes, useState } from "react";
import { InfosMovieCard } from "../molecules/InfosMovieCard";
import { ScoreAndFavorite } from "../molecules/ScoreAndFavorite";
import { CardTop } from "../molecules/CardTop";
import React from 'react'
import { cn } from "@/lib/utils";

export interface CardMovieProps 
    extends HTMLAttributes<HTMLDivElement>{
    idMovie: number | string
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

export function CardMovie({idMovie, genre,  description, title, onRatingChange, ratingValue, onFavoriteChange, favoriteValue, className}: CardMovieProps) {

    const [testeSoma, setTesteSoma] = useState(0)

    function soma (){
        setTesteSoma(testeSoma + 1)
    }

    return(
        <div id={idMovie.toString()} className={cn("bg-[#232E46] rounded-xl h-[350px] relative cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105" ,className)} onClick={soma}>
            <div className="relative h-3/5 flex-row">
                <img className="absolute top-0 left-0 w-full h-full object-cover object-bottom z-0 rounded-t-xl" src="images/coraline.jpg" alt={`Pôster filme ${title}`} />
                <CardTop genre={genre} year={testeSoma.toString()} className="flex w-full place-content-between px-2 pt-2 relative z-10"/>
            </div>
            <div className="relative h-2/5 pb-1">
                <InfosMovieCard description={description} title={title} className="h-[calc(100%-20px)] px-4"/>
                <ScoreAndFavorite onFavoriteChange={onFavoriteChange} onRatingChange={onRatingChange} favoriteValue={favoriteValue} ratingValue={ratingValue} className="px-4"/>
            </div>
        </div>
    )
}