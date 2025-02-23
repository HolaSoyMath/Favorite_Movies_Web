import { HTMLAttributes } from 'react'

export interface MovieData {
  idMovie: string
  genre: string
  year: string
  title: string
  description: string
  poster: string
}

export interface CardMovieProps extends HTMLAttributes<HTMLDivElement> {
  movie: MovieData
  className?: string
}
