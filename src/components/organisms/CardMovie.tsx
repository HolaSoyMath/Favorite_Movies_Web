import { InfosMovieCard } from '../molecules/CardMovie/InfosMovieCard'
import { ScoreAndFavorite } from '../molecules/CardMovie/ScoreAndFavorite'
import { CardTop } from '../molecules/CardMovie/CardTop'
import React from 'react'
import { cn } from '@/lib/utils'
import { CardMovieProps } from '@/types/CardMovie.types'

export function CardMovie({
  movie,
  interaction,
  className,
  ...props
}: CardMovieProps) {
  const { idMovie, genre, year, title, description, poster } = movie
  const { onRatingChange, ratingValue, onFavoriteChange, favoriteValue } =
    interaction

  return (
    <div
      id={idMovie.toString()}
      className={cn(
        'bg-[#232E46] rounded-xl relative cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105',
        className
      )}
      {...props}
    >
      <div className="relative h-3/5 flex-row">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover object-bottom z-0 rounded-t-xl"
          src={`https://image.tmdb.org/t/p/w780/${poster}`}
          alt={`Pôster filme ${title}`}
        />
        <CardTop
          genre={genre}
          year={year}
          className="flex w-full place-content-between px-2 pt-2 relative z-10"
        />
      </div>
      <div className="relative h-2/5 pb-1">
        <InfosMovieCard
          description={description}
          title={title}
          className="h-[calc(100%-20px)] px-4 flex flex-col"
        />
        <ScoreAndFavorite
          onFavoriteChange={onFavoriteChange}
          onRatingChange={onRatingChange}
          favoriteValue={favoriteValue}
          ratingValue={ratingValue}
          className="px-4"
        />
      </div>
    </div>
  )
}
