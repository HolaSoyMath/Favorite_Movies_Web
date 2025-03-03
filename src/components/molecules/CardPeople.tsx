
import React from 'react'
import { Card, CardFooter, CardHeader } from "../ui/card";

export interface CardPeopleProps {
  name: string
  character: string
  pathImage: string
}

export default function CardPeople(props: CardPeopleProps){
  return(
    <Card className='h-full w-[250px] bg-[--background] border-none z-0'>
      <CardHeader style={{backgroundImage: `url(https://image.tmdb.org/t/p/w780${props.pathImage})`}} className='h-4/5 bg-cover bg-no-repeat bg-center rounded-t-xl' />
      <CardFooter className='flex flex-col pt-3'>
        <p className='w-full font-[--foreground]'>{props.character}</p>
        <p className='w-full text-[10px] font-[--foreground]'>{props.name}</p>
      </CardFooter>
    </Card>
  )
}