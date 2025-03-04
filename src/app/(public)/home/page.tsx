import React from 'react'
import CarouselCardMovie from '@/components/organisms/CarouselCardMovie'
import HighlightFilm from '@/components/organisms/HighlightFilm'
import { infoMoviesDetails } from '@/mock/InfoMovieDetails.mock'
import { infoMovieVideos } from '@/mock/InfoMovieVideos.mock'

const movieDetails = infoMoviesDetails
const movieTrailer: string = infoMovieVideos.results.find(movie => movie.type == 'Trailer')!.key

export default function HomePage() {

  return (
    <>
      <HighlightFilm
        urlPosterImg={movieDetails.backdrop_path}
        idMovie={movieDetails.id.toString()}
        nameMovie={movieDetails.title}
        description={movieDetails.overview}
        trailerUrl={movieTrailer}
      />
      <div className="px-12 w-full mt-3">
        <CarouselCardMovie className="px-10" title='Em Cartaz'></CarouselCardMovie>
      </div>
    </>
  )
}
