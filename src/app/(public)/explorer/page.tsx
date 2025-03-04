'use client'
import { ButtonIcon } from '@/components/atoms/ButtonIcon'
import { Input } from '@/components/ui/input'
import { Filter, Search } from 'lucide-react'
import React, { useState } from 'react'
import Filters from '@/components/organisms/Filters'
import { mockCarouselInfoMovies } from '@/mock/MoviesCarousel.mock'
import { CardMovie } from '@/components/organisms/CardMovie'
import { mockGenreList } from '@/mock/GenreMovieList.mock'

export default function ExplorerPage() {
  const [showFilter, setShowFilter] = useState(false)

  const movies = mockCarouselInfoMovies.results
  const genres = mockGenreList.genres

  return (
    <div className="px-12">
      <section id="filters" className="flex gap-4 justify-between">
        <div className="flex items-center w-full h-12 rounded-full pl-4 bg-transparent border-2 dark:bg-[#343A40]">
          <Search className="text-[--foreground]" />
          <Input
            placeholder="Buscar filmes..."
            className="max-h-full !m-0 border-none focus-visible:ring-0 text-[--foreground]"
          />
        </div>
        <ButtonIcon icon={Filter} onClick={() => setShowFilter(!showFilter)}>
          Filtros
        </ButtonIcon>
      </section>
      {showFilter && (
        <section>
          <Filters />
        </section>
      )}
      <section className='w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-4 gap-y-7'>
        {movies.map((movie) => (
          <CardMovie
            movie={{
              genre: genres.find((genre) => genre.id === movie.genre_ids[0])!
                .name,
              year: new Date(movie.release_date).getFullYear().toString(),
              title: movie.title,
              description: movie.overview,
              idMovie: movie.id.toString(),
              poster: movie.poster_path
            }}
            className="h-full w-[230px]"
            key={movie.id.toString()}
          />
        ))}
      </section>
    </div>
  )
}
