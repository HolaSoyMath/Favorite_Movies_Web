import React, { HTMLAttributes } from 'react'
import { mockInfoMovies } from '@/mock/InfoMovies.mock'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'
import { Label } from '../ui/label'
import CardPeople from '../molecules/CardPeople'

export interface CarouselPeopleProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

export default function CarouselCardPeople({ className }: CarouselPeopleProps) {
  const movies = mockInfoMovies.results

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
          {movies.map(() => (
            <CarouselItem className="basis-1/7" key={''}>
              <CardPeople />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="-right-0" />
      </Carousel>
    </>
  )
}
