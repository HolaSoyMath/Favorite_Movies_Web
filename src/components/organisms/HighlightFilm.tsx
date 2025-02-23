import { ButtonWithIcon } from '@/components/atoms/ButtonWithIcon'
import { Label } from '@/components/ui/label'
import { Info } from 'lucide-react'
import React, { HTMLAttributes } from 'react'

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
      className={`w-full h-[600px] bg-cover bg-top`}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w780/${urlPosterImg}.jpg)`,
      }}
    >
      <div className="w-full h-full bg-gradient-to-r from-zinc-950 to-transparent px-12 py-36 flex">
        <div className="flex flex-col w-1/2">
          <Label className="text-6xl font-semibold mb-5">{nameMovie}</Label>
          <Label className="text-xl mb-5">{description}</Label>
          <ButtonWithIcon icon={Info} link={idMovie} text="Mais Informações" />
        </div>
        <div className="flex w-1/2 justify-center">
          <iframe
            width="711"
            height="400"
            src={`https://www.youtube.com/embed/${trailerUrl}?autoplay=1&mute=1`}
          ></iframe>
        </div>
      </div>
    </div>
  )
}
