import React, { useState } from 'react'
import { ScoreAndFavorite } from '../molecules/CardMovie/ScoreAndFavorite'
import { CardTop } from '../molecules/CardMovie/CardTop'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { CardMovieProps } from '@/types/CardMovie.types'

export function CardMovie({
  movie,
  className,
}: CardMovieProps) {

  const [favorite, setFavorite] = useState(0)
  const [rating, setRating] = useState(0)

  return (
    <Card className={`w-[250px] h-[540px] border-none cursor-pointer duration-300 hover:scale-100 scale-95 ${className}`}>
      <CardHeader className='h-[70%] rounded-t-xl px-0 pt-3 bg-cover bg-bottom bg-no-repeat'
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w780${movie.poster})`,
        }}
      >
        <CardTop genre={movie.genre} year={movie.year} />
      </CardHeader>
      <CardContent className='h-[25%] pb-0 px-4 flex flex-col'>
        <CardTitle className='line-clamp-2 pt-3'>{movie.title}</CardTitle>
        <CardDescription className='pt-1 flex-1 overflow-hidden break-words'>{movie.description}</CardDescription>
      </CardContent>
      <CardFooter className='h-[5%] pb-0 px-4'>
        <ScoreAndFavorite
          onFavoriteChange={setFavorite}
          onRatingChange={setRating}
          favoriteValue={favorite}
          ratingValue={rating}
        />
      </CardFooter>
    </Card>
  )
}
