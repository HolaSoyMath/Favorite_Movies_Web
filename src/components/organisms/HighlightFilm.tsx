import { CustomButton } from '@/components/molecules/CustomButton'
import { Label } from '@/components/ui/label'
import { Info } from 'lucide-react'
import React, { HTMLAttributes } from 'react'
import { LabelFilm } from '../atoms/LabelFilm'
import Link from 'next/link'
import YoutubeVideo from '../atoms/YoutubeVideo'

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
        <div className="flex w-full justify-end items-center pr-24 ">
          <YoutubeVideo
            heightVideo={540}
            widthVideo={960}
            trailerUrl={trailerUrl}
            className='max-w-[90%] aspect-video'
          />
        </div>
      </div>
    </div>
  )
}
