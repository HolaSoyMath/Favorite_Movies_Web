import React, { HTMLAttributes } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'
import { Label } from '../ui/label'
import PersonCard from './PersonCard'

export interface Cast {
  name: string
  character: string
  pathImg: string | null
  personId: string
}
export interface PeopleCardCarouselProps extends HTMLAttributes<HTMLDivElement> {
  cast: Cast[]
  className?: string
}

export default function PeopleCardCarousel({
  cast,
  className,
}: PeopleCardCarouselProps) {
  return (
    <>
      <Label className="text-4xl font-semibold text-[--foreground]">
        Elenco
      </Label>
      <Carousel
        opts={{ loop: true }}
        orientation="horizontal"
        className={`h-[450px] max-w-screen px-12 mt-3 ${className}`}
      >
        <CarouselContent className="h-[400px]">
          {cast.map((people) => (
            <CarouselItem className="basis-1/7" key={people.personId}>
              <PersonCard
                character={people.character}
                name={people.name}
                pathImage={people.pathImg ?? 'https://github.com/shadcn.png'}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="-right-0" />
      </Carousel>
    </>
  )
}
