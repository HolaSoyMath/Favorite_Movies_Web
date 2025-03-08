'use client'
import MovieRatings from '@/components/molecules/MovieRatings'
import CarouselCardMovie from '@/components/organisms/CarouselCardMovie'
import CarouselCardPeople, {
  Cast,
} from '@/components/organisms/CarouselCardPeople'
import Comments from '@/components/organisms/Comments'
import MovieDetailsHeader from '@/components/organisms/MovieDetailsHeader'
import { infoMovieCast } from '@/mock/InfoMovieCast.mock'
import { infoMoviesDetails } from '@/mock/InfoMovieDetails.mock'
import { infoMovieVideos } from '@/mock/InfoMovieVideos.mock'
import React from 'react'

// Dados Mockados
const movieCast = infoMovieCast
const movieDetails = infoMoviesDetails
const movieTrailer: string = infoMovieVideos.results.find(
  (movie) => movie.type == 'Trailer'
)!.key

export default function Movie() {
  const actors = movieCast.cast.filter(
    (member) => member.known_for_department == 'Acting'
  )
  const director = movieCast.crew.find((member) => member.job == 'Director')

  const directorObj = director
    ? {
        name: director.name,
        character: director.job,
        pathImg: director.profile_path,
        personId: String(director.id),
      }
    : null

  const actorObjs = actors
    .filter((actor) => actor.profile_path)
    .map((actor) => ({
      name: actor.name,
      character: actor.character,
      pathImg: actor.profile_path,
      personId: String(actor.id),
    }))

  const infosCard: Cast[] = [
    ...(directorObj ? [directorObj] : []),
    ...actorObjs,
  ]

  return (
    <>
      <MovieDetailsHeader
        title={movieDetails.title}
        backgroundImg={movieDetails.backdrop_path}
        posterImg={movieDetails.poster_path}
        description={movieDetails.overview}
        genres={movieDetails.genres.map((genre) => genre.name)}
        minutes={movieDetails.runtime}
        releaseYear={new Date(movieDetails.release_date).getFullYear()}
        trailerUrl={movieTrailer}
      />

      <section className="px-12">
        <section className="my-5">
          <CarouselCardPeople cast={infosCard} />
          <p className="text-4xl font-semibold text-[--foreground]">
            Sua Avaliação
          </p>
          <MovieRatings />
        </section>
        <Comments />
      </section>
      <CarouselCardMovie title="Recomendados" className="px-12 w-full mt-5" />
    </>
  )
}
