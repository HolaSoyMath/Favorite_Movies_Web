import { HTMLAttributes } from 'react'
import { TextCard } from '../atoms/TextCard'
import React from 'react'

export interface InfosMovieCard extends HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  className?: string
}

export function InfosMovieCard({
  title,
  description,
  className,
  ...props
}: InfosMovieCard) {
  return (
    <div className={className} {...props}>
      <TextCard variant="title">{title}</TextCard>
      <TextCard variant="description">{description}</TextCard>
    </div>
  )
}
