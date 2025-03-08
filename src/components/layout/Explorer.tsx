'use client'
import { Input } from '@/components/ui/input'
import { Filter, Search } from 'lucide-react'
import React, { useState } from 'react'
import Filters from '@/components/organisms/Filters'
import { mockCarouselInfoMovies } from '@/mock/MoviesCarousel.mock'
import { MovieCard } from '@/components/molecules/MovieCard'
import { mockGenreList } from '@/mock/GenreMovieList.mock'
import { Button } from '@/components/ui/button'

export default function ExplorerTemplate() {
  const [showFilter, setShowFilter] = useState(false)

  const movies = mockCarouselInfoMovies.results
  const genres = mockGenreList.genres

  return (
    <div className="px-12">
      <section id="filters" className="grid grid-cols-12 gap-4 h-12">
        <div className="flex items-center w-full h-full rounded-full pl-4 bg-transparent border-2 dark:bg-[#343A40] col-span-10">
          <Search className="text-[--foreground]" />
          <Input
            placeholder="Buscar filmes..."
            className="max-h-full !m-0 border-none focus-visible:ring-0 text-[--foreground]"
          />
        </div>

        <Button
          className="w-full h-full bg-transparent border-2 border-border shadow-none text-foreground hover:bg-border col-span-2"
          onClick={() => setShowFilter(!showFilter)}
        >
          <Filter />
          Filtros
        </Button>
      </section>
      {showFilter && (
        <section>
          <Filters />
        </section>
      )}
      <section className="mt-5 w-full grid items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-4 gap-y-7">
        {movies.map((movie) => (
          <MovieCard
            movie={{
              genre: genres.find((genre) => genre.id === movie.genre_ids[0])!
                .name,
              year: new Date(movie.release_date).getFullYear().toString(),
              title: movie.title,
              description: movie.overview,
              idMovie: movie.id.toString(),
              poster: movie.poster_path,
            }}
            className="h-full w-[230px] h-[420px]"
            key={movie.id.toString()}
          />
        ))}
      </section>
    </div>
  )
}
