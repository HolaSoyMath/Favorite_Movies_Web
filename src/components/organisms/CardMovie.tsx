'use client'
import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { CardMovieProps } from '@/types/CardMovie.types'
import { BadgeInfo } from '../atoms/Badge'
import { Ratings } from '../atoms/Ratings'

export function CardMovie({ movie, className }: CardMovieProps) {
  const [favorite, setFavorite] = useState(0)
  const [rating, setRating] = useState(0)

  return (
    <Card
      className={`w-[250px] h-[540px] border-none cursor-pointer duration-300 hover:scale-100 scale-95 ${className}`}
    >
      <CardHeader
        className="h-[70%] rounded-t-xl px-0 pt-2 bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w780${movie.poster})`,
        }}
      >
        <div className="w-full flex justify-between px-2">
          <BadgeInfo fontSize="xs" variant="category" className="w-auto">
            {movie.genre}
          </BadgeInfo>
          <BadgeInfo fontSize="xs" variant="year" className="w-auto">
            {movie.year}
          </BadgeInfo>
        </div>
      </CardHeader>
      <CardContent className="h-[25%] pb-0 px-4 flex flex-col">
        <CardTitle className="line-clamp-2 pt-3">{movie.title}</CardTitle>
        <CardDescription className="pt-1 flex-1 overflow-hidden break-words">
          {movie.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="h-[5%] pb-0 px-4">
        <div className="flex justify-between w-full">
          <Ratings
            type="star"
            value={rating}
            onChange={setRating}
            quantity={5}
            className="!w-1/2"
          />
          <Ratings
            type="heart"
            value={favorite}
            onChange={setFavorite}
            quantity={1}
            className="!w-5"
          />
        </div>
      </CardFooter>
    </Card>
  )
}
