import { HTMLAttributes } from 'react'
import { LabelFilm } from '../../atoms/LabelFilm'
import React from 'react'
import { tv } from 'tailwind-variants'
import { cn } from '@/lib/utils'

export interface InfosMovieCard extends HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  className?: string
}

const infosMovieVariant = tv({
  base: 'rounded-full font-semibold px-2 text-white',
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
    },
  },
})

export function InfosMovieCard({
  title,
  description,
  className,
  ...props
}: InfosMovieCard) {
  return (
    <div className={cn(infosMovieVariant({}), className)} {...props}>
      <LabelFilm variant="title" fontSize="lg" className="h-35 text-left">
        {title}{' '}
      </LabelFilm>
      <LabelFilm
        variant="description"
        fontSize="xxs"
        className="h-[calc(100%-30px)] text-left"
      >
        {description}
      </LabelFilm>
    </div>
  )
}
