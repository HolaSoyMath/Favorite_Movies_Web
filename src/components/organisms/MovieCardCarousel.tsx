import React, { HTMLAttributes } from 'react'
import { mockCarouselInfoMovies } from '@/mock/MoviesCarousel.mock'
import { mockGenreList } from '@/mock/GenreMovieList.mock'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'
import { MovieCard } from './MovieCard'
import { Label } from '../ui/label'
import Link from 'next/link'

export interface MovieCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  className?: string
}

export default function MovieCardCarousel({
  title,
  className,
}: MovieCardProps) {
  const movies = mockCarouselInfoMovies.results
  const genres = mockGenreList.genres

  return (
    <div className={`${className}`}>
      <Label className="text-4xl font-semibold text-[--foreground]">
        {title}
      </Label>
      <Carousel
        opts={{ loop: true }}
        orientation="horizontal"
        className={`h-[510px] max-w-screen px-12 mt-3`}
      >
        <CarouselContent className="h-[460px]">
          {movies.map((movie) => (
            <CarouselItem className="basis-1/7" key={movie.id.toString()}>
              <Link href={`/movie/${movie.id}`}>
                <MovieCard
                  movie={{
                    genre: genres.find(
                      (genre) => genre.id === movie.genre_ids[0]
                    )!.name,
                    year: new Date(movie.release_date).getFullYear().toString(),
                    title: movie.title,
                    description: movie.overview,
                    idMovie: movie.id.toString(),
                    poster: movie.poster_path,
                  }}
                  className="h-full w-[230px]"
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="-right-0" />
      </Carousel>
    </div>
  )
}
