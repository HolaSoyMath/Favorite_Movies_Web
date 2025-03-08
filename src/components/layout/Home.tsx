import React from 'react'
import MovieCardCarousel from '@/components/organisms/MovieCardCarousel'
import FeaturedMovieBanner from '@/components/organisms/FeaturedMovieBanner'
import { infoMoviesDetails } from '@/mock/MovieDetails.mock'
import { infoMovieVideos } from '@/mock/MovieVideos.mock'

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
      <MovieCardCarousel
        className="px-12 w-full mt-5"
        title="Em Cartaz"
      ></MovieCardCarousel>
      <MovieCardCarousel
        className="px-12 w-full mt-5"
        title="Populares"
      ></MovieCardCarousel>
      <MovieCardCarousel
        className="px-12 w-full mt-5"
        title="Mais Bem Avaliados"
      ></MovieCardCarousel>
      <MovieCardCarousel
        className="px-12 w-full mt-5"
        title="Próximos Lançamentos"
      ></MovieCardCarousel>
    </>
  )
}
