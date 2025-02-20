'use client'

import { useState } from 'react'
import React from 'react'

//Rating
import { CardMovie } from '@/components/organisms/CardMovie'
import { mockInfoMovies } from '@/mock/InfoMovies.mock'
import { mockGenreList } from '@/mock/GenreMovieList.mock'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default function Home() {
  const [ratingStar, setRatingStar] = useState(0)
  const [ratingHeart, setRatingHeart] = useState(0)

  const movies = mockInfoMovies.results
  const genres = mockGenreList.genres

  return (
    <Carousel
      opts={{ loop: true }}
      orientation="horizontal"
      className="h-[470px] w-[800px] ml-80 bg-black"
    >
      <CarouselContent className="h-[470px]">
        {movies.map((movie) => (
          <CarouselItem className="pl-4 basis-1/7">
            <CardMovie
              key={movie.id}
              movie={{
                genre: genres.find((genre) => genre.id === movie.genre_ids[0])!
                  .name,
                year: new Date(movie.release_date).getFullYear().toString(),
                title: movie.title,
                description: movie.overview,
                idMovie: movie.id.toString(),
                poster: movie.poster_path,
              }}
              interaction={{
                onFavoriteChange: setRatingHeart,
                favoriteValue: ratingHeart,
                onRatingChange: setRatingStar,
                ratingValue: ratingStar,
              }}
              className=" h-full w-[250px]"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
