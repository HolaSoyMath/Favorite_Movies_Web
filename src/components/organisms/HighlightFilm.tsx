import { CustomButton } from '@/components/molecules/CustomButton'
import { Label } from '@/components/ui/label'
import { Info } from 'lucide-react'
import React, { HTMLAttributes } from 'react'
import { LabelFilm } from '../atoms/LabelFilm'
import Link from 'next/link'

export interface HighlightFilmProps extends HTMLAttributes<HTMLDivElement> {
  urlPosterImg: string
  nameMovie: string
  description: string
  idMovie: string
  trailerUrl: string
}

export default function HighlightFilm({
  urlPosterImg = '',
  nameMovie,
  description,
  idMovie,
  trailerUrl,
}: HighlightFilmProps) {
  return (
    <div
      className={`w-full h-[700px] bg-cover bg-no-repeat`}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w780/${urlPosterImg})`,
      }}
    >
      <div className="w-full h-full bg-gradient-to-r dark:from-zinc-950 to-transparent px-12 py-36 flex">
        <div className="flex flex-col w-1/2">
          <LabelFilm variant="titleHighlightFilm" fontSize="titleHighlight">
            {nameMovie}
          </LabelFilm>
          <Label className="text-xl mb-5 text-white">{description}</Label>
          <Link href={`/movie/${idMovie}`} className="flex items-center h-12">
            <CustomButton icon={Info} text="Mais Informações" />
          </Link>
        </div>
        <div className="flex w-1/2 justify-center">
          <iframe
            width="711"
            height="400"
            src={`https://www.youtube.com/embed/${trailerUrl}?autoplay=1&mute=1`}
          />
        </div>
      </div>
    </div>
  )
}
