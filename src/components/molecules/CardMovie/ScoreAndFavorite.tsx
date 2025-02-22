import { HTMLAttributes } from 'react'
import { Ratings } from '../../atoms/Movie/Ratings'
import React from 'react'

export interface ScoreAndFavoriteProps extends HTMLAttributes<HTMLDivElement> {
  onRatingChange: React.Dispatch<React.SetStateAction<number>>
  ratingValue: number
  onFavoriteChange: React.Dispatch<React.SetStateAction<number>>
  favoriteValue: number
  className?: string
}

export function ScoreAndFavorite({
  onRatingChange,
  ratingValue,
  onFavoriteChange,
  favoriteValue,
  className,
  ...props
}: ScoreAndFavoriteProps) {
  return (
    <div className={`flex justify-between w-full ${className}`} {...props}>
      <Ratings
        type="star"
        value={ratingValue}
        onChange={onRatingChange}
        quantity={5}
        className="!w-1/2"
      />
      <Ratings
        type="heart"
        value={favoriteValue}
        onChange={onFavoriteChange}
        quantity={1}
        className="!w-5"
      />
    </div>
  )
}
