import { HTMLAttributes } from "react"

export interface MovieData{
    idMovie: string
    genre: string
    year: string
    title: string
    description: string
}

export interface InteractionData{
    onRatingChange: React.Dispatch<React.SetStateAction<number>>
    ratingValue: number
    onFavoriteChange: React.Dispatch<React.SetStateAction<number>>
    favoriteValue: number
}

export interface CardMovieProps extends HTMLAttributes<HTMLDivElement> {
    movie: MovieData;
    interaction: InteractionData;
    className?: string;
  }