import React from 'react'
import CarouselCardMovie from '@/components/organisms/CarouselCardMovie'
import FeaturedMovieBanner from '@/components/organisms/FeaturedMovieBanner'
import { infoMoviesDetails } from '@/mock/InfoMovieDetails.mock'
import { infoMovieVideos } from '@/mock/InfoMovieVideos.mock'

const movieDetails = infoMoviesDetails
const movieTrailer: string = infoMovieVideos.results.find(
  (movie) => movie.type == 'Trailer'
)!.key

export default function Home() {
  return (
    <>
      <FeaturedMovieBanner
        posterUrl={movieDetails.backdrop_path}
        idMovie={movieDetails.id.toString()}
        title={movieDetails.title}
        description={movieDetails.overview}
        trailerUrl={movieTrailer}
      />
      <CarouselCardMovie
        className="px-12 w-full mt-5"
        title="Em Cartaz"
      ></CarouselCardMovie>
      <CarouselCardMovie
        className="px-12 w-full mt-5"
        title="Populares"
      ></CarouselCardMovie>
      <CarouselCardMovie
        className="px-12 w-full mt-5"
        title="Mais Bem Avaliados"
      ></CarouselCardMovie>
      <CarouselCardMovie
        className="px-12 w-full mt-5"
        title="Próximos Lançamentos"
      ></CarouselCardMovie>
    </>
  )
}
