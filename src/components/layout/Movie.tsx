'use client'
import MovieRatingDisplay from '@/components/molecules/MovieRatingDisplay'
import MovieCardCarousel from '@/components/organisms/MovieCardCarousel'
import PeopleCardCarousel, {
  Cast,
} from '@/components/organisms/PeopleCardCarousel'
import Comments from '@/components/organisms/Comments'
import MovieDetailsHeader from '@/components/organisms/MovieDetailsHeader'
import { infoMovieCast } from '@/mock/MovieCast.mock'
import { infoMoviesDetails } from '@/mock/MovieDetails.mock'
import { infoMovieVideos } from '@/mock/MovieVideos.mock'
import React from 'react'

// Dados Mockados
const movieCast = infoMovieCast
const movieDetails = infoMoviesDetails
const movieTrailer: string = infoMovieVideos.results.find(
  (movie) => movie.type == 'Trailer'
)!.key

export default function MovieTemplate() {
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
          <PeopleCardCarousel cast={infosCard} />
          <p className="text-4xl font-semibold text-[--foreground]">
            Sua Avaliação
          </p>
          <MovieRatingDisplay />
        </section>
        <Comments />
      </section>
      <MovieCardCarousel title="Recomendados" className="px-12 w-full mt-5" />
    </>
  )
}
