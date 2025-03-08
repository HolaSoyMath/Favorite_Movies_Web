import React from 'react'
import { Card, CardFooter, CardHeader } from '../ui/card'
import BaseParagraph from '@/components/atoms/BaseParagraph'

export interface CardPeopleProps {
  name: string
  character: string
  pathImage: string
  className?: string
}

export default function CardPeople(props: CardPeopleProps) {
  const { name, character, pathImage, className } = props

  return (
    <Card
      className={`h-full w-[250px] bg-[--background] border-none z-0 ${className}`}
    >
      <CardHeader
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w780${pathImage})`,
        }}
        className="h-4/5 bg-cover bg-no-repeat bg-center rounded-t-xl"
      />
      <CardFooter className="flex flex-col px-2 py-3">
        <BaseParagraph variant="title">{character}</BaseParagraph>
        <BaseParagraph variant="description">{name}</BaseParagraph>
      </CardFooter>
    </Card>
  )
}
