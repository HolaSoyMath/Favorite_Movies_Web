import { mockInfoMovies } from "@/mock/InfoMovies.mock"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { mockGenreList } from "@/mock/GenreMovieList.mock"
import React, { useState } from "react"
import { CardMovie } from "./CardMovie"

export default function CarouselCardMovie() {
    const [ratingStar, setRatingStar] = useState(0)
    const [ratingHeart, setRatingHeart] = useState(0)
  
    const movies = mockInfoMovies.results
    const genres = mockGenreList.genres
  
    return (
      <Carousel
        opts={{ loop: true }}
        orientation="horizontal"
        className="h-[470px] w-[800px] ml-80 bg-black mt-10"
      >
        <CarouselContent className="h-[470px]">
          {movies.map((movie) => (
            <CarouselItem className="pl-4 basis-1/7 my-10" key={""}>
              <CardMovie
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
                className=" h-full w-[200px]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )
  }