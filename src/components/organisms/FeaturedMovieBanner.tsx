import { Label } from '@/components/ui/label'
import { Info } from 'lucide-react'
import React, { HTMLAttributes } from 'react'
import Link from 'next/link'
import YoutubeVideo from '../atoms/YoutubeVideo'
import { Button } from '../ui/button'

export interface FeaturedMovieBannerProps
  extends HTMLAttributes<HTMLDivElement> {
  posterUrl: string
  title: string
  description: string
  idMovie: string
  trailerUrl: string
}

export default function FeaturedMovieBanner({
  posterUrl = '',
  title,
  description,
  idMovie,
  trailerUrl,
}: FeaturedMovieBannerProps) {
  return (
    <div
      className={`w-full h-[700px] bg-cover bg-no-repeat`}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w780/${posterUrl})`,
      }}
    >
      <div className="w-full h-full bg-gradient-to-r dark:from-zinc-950 to-transparent px-12 py-36 flex">
        <div className="flex flex-col w-1/2">
          <h1 className="text-6xl mb-5 text-white font-semibold">
            {title}
          </h1>
          <Label className="text-xl mb-5 text-white">{description}</Label>
          <Link href={`/movie/${idMovie}`} className="flex items-center h-12">
            <Button className="h-12 bg-white text-black rounded-full px-5">
              <Info />
              Mais Informações
            </Button>
          </Link>
        </div>
        <div className="flex w-full justify-end items-center pr-24 ">
          <YoutubeVideo
            height={540}
            width={960}
            videoUrl={trailerUrl}
            className="max-w-[90%] aspect-video"
          />
        </div>
      </div>
    </div>
  )
}
