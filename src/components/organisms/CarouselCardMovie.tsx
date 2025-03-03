import React, { HTMLAttributes } from 'react'
import { mockInfoMovies } from '@/mock/InfoMovies.mock'
import { mockGenreList } from '@/mock/GenreMovieList.mock'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'
import { CardMovie } from './CardMovie'
import { Label } from '../ui/label'

export interface CarouselMovieProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  className?: string
}

export default function CarouselCardMovie({ title, className }: CarouselMovieProps) {
  const movies = mockInfoMovies.results
  const genres = mockGenreList.genres

  return (
    <>
      <Label className="text-4xl font-semibold text-[--foreground]">
        {title}
      </Label>
      <Carousel
        opts={{ loop: true }}
        orientation="horizontal"
        className={`h-[510px] max-w-screen px-12 mt-3 ${className}`}
      >
        <CarouselContent className="h-[460px]">
          {movies.map((movie) => (
            <CarouselItem className="basis-1/7" key={movie.id.toString()}>
              <CardMovie
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="-right-0" />
      </Carousel>
    </>
  )
}
