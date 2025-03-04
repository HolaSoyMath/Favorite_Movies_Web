import React from 'react'
import { LabelFilm } from '../atoms/LabelFilm'
import { LabelIcon } from '../molecules/LabelIcon'
import { Calendar, Clock4, Film, Heart, Share2 } from 'lucide-react'
import CardRating from '../molecules/CardRating'
import { CustomButton } from '../molecules/CustomButton'

interface MovieHeaderProps {
  title: string,
  backgroundImg: string,
  posterImg: string,
  releaseYear: number,
  minutes: number,
  genres: string[],
  description: string
}

export default function MovieHeader({ title, releaseYear, minutes, genres, description, backgroundImg, posterImg }: MovieHeaderProps){

  function convertMinutesToHours(minutes: number) {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}min`
  }

  return(
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
          <div className="pl-10 w-1/2">
            <LabelFilm variant="titleHighlightFilm" fontSize="titleHighlight">
              {title}
            </LabelFilm>
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
            <LabelFilm
              variant="descriptionHighlightFilm"
              fontWeight="normal"
              className="mt-10 text-white"
            >
              {description}
            </LabelFilm>
            <div className="flex gap-6 mt-5">
              <CardRating fontData="TMDB" rating={7.8} quantity={1250} />
              <CardRating fontData="MathFlix" rating={0} quantity={0} />
            </div>
            <div className="flex gap-6 mt-5">
              <CustomButton
                icon={Heart}
                text="Favorito"
                className="h-12 bg-white text-black"
              />
              <CustomButton
                icon={Share2}
                text="Compartilhar"
                className="h-12 bg-white text-black"
              />
            </div>
          </div>
        </div>
      </section>
  )
}