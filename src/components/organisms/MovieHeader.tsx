import React from 'react'
import { LabelIcon } from '../molecules/LabelIcon'
import { Calendar, Clock4, Film, Heart, Share2 } from 'lucide-react'
import CardRatingMovieDescription from '../molecules/CardRatingMovieDescription'
import YoutubeVideo from '../atoms/YoutubeVideo'
import BaseParagraph from '../atoms/BaseParagraph'
import { Button } from '../ui/button'

interface MovieHeaderProps {
  title: string
  backgroundImg: string
  posterImg: string
  releaseYear: number
  minutes: number
  genres: string[]
  description: string
  trailerUrl: string
}

export default function MovieHeader({
  title,
  releaseYear,
  minutes,
  genres,
  description,
  backgroundImg,
  posterImg,
  trailerUrl,
}: MovieHeaderProps) {
  function convertMinutesToHours(minutes: number) {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}min`
  }

  return (
    <section
      id="headerFilm"
      className={`w-full h-[700px] bg-cover bg-no-repeat`}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w780/${backgroundImg})`,
      }}
    >
      <div className="w-full h-full bg-gradient-to-t from-zinc-950 to-transparent px-12 py-36 flex">
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w780/${posterImg})`,
          }}
          className="h-[450px] w-[300px] bg-cover"
        />
        <div className="pl-10 w-1/2 h-auto">
          <h1 className="text-6xl mb-5 text-white font-semibold">{title}</h1>
          <div className="flex gap-6 mt-3">
            <LabelIcon icon={Calendar} className="text-white">
              {releaseYear}
            </LabelIcon>
            <LabelIcon icon={Clock4} className="text-white">
              {convertMinutesToHours(minutes)}
            </LabelIcon>
            <LabelIcon icon={Film} className="text-white">
              {genres.map((genre) => genre).join(', ')}
            </LabelIcon>
          </div>
          <BaseParagraph variant="subtitle" className="text-white">
            {description}
          </BaseParagraph>
          <div className="flex gap-6 mt-5">
            <CardRatingMovieDescription
              fontData="TMDB"
              rating={7.8}
              quantity={1250}
            />
            <CardRatingMovieDescription
              fontData="MathFlix"
              rating={0}
              quantity={0}
            />
          </div>
          <div className="flex gap-6 mt-5">
            <Button className="h-12 bg-white text-black rounded-full px-5">
              <Heart />
              Favorito
            </Button>
            <Button className="h-12 bg-white text-black rounded-full px-5">
              <Share2 />
              Compartilhar
            </Button>
          </div>
        </div>
        <div className="flex w-1/2 justify-end items-center pr-24 ">
          <YoutubeVideo
            heightVideo={540}
            widthVideo={960}
            trailerUrl={trailerUrl}
            className="max-w-[90%] aspect-video"
          />
        </div>
      </div>
    </section>
  )
}
