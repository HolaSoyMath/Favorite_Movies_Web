import React, { HTMLAttributes } from 'react'
import { BadgeInfo } from '../../atoms/Badge'

export interface CardTopProps extends HTMLAttributes<HTMLDivElement> {
  genre: string
  year: string
  className?: string
}

export function CardTop({ genre, year, ...props }: CardTopProps) {
  return (
    <div
      className="not-sr-only flex place-content-between px-[15px]"
      {...props}
    >
      <BadgeInfo fontSize="xs" variant="category">{genre}</BadgeInfo>
      <BadgeInfo fontSize="xs" variant="year">{year}</BadgeInfo>
    </div>
  )
}
