
import React from 'react'
import { Card, CardFooter, CardHeader } from "../ui/card";

const urlPeopleImg = '/z4wuEcnTW4hlICMYPGn5W8bK2zh.jpg'

export default function CardPeople(){
  return(
    <Card className='h-full w-[250px] bg-[--background] border-none'>
      <CardHeader style={{backgroundImage: `url(https://image.tmdb.org/t/p/w780${urlPeopleImg})`}} className='h-4/5 bg-cover bg-no-repeat bg-center rounded-t-xl' />
      <CardFooter className='flex flex-col pt-3'>
        <p className='w-full font-[--foreground]'>Jack Sparrow</p>
        <p className='w-full text-[10px] font-[--foreground]'>Johnny Depp</p>
      </CardFooter>
    </Card>
  )
}