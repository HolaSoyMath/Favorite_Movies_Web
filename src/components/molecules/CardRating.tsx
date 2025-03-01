import React, { HTMLAttributes } from 'react'
import { Card, CardContent, CardDescription, CardHeader } from '../ui/card'
import { Star } from 'lucide-react'

export interface CardRatingProps extends HTMLAttributes<HTMLDivElement> {
  fontData: string
  rating: number
  quantity: number
}

export default function CardRating(params: CardRatingProps) {
  return (
    <Card className="w-[150px] bg-slate-700 border-none">
      <CardHeader className="py-3">
        <CardDescription className='text-white'>{params.fontData}</CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2 pb-2 items-center">
        <Star className="fill-yellow-500 text-yellow-500 h-[24px] w-[24px]" />
        <span className="font-semibold text-xl">{params.rating}</span>
        <span className="text-xs">({params.quantity})</span>
      </CardContent>
    </Card>
  )
}
