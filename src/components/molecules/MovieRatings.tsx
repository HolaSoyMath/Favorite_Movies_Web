import React, { useState } from 'react'
import { Ratings } from '../atoms/Ratings'

interface MovieRatingsProps {
  initialValue?: number
}

export default function MovieRatings({initialValue = 0}: MovieRatingsProps) {
  const [rating, setRating] = useState(initialValue)

  function emojiRating(value: number): string {
    switch (value) {
      case 1:
        return '😞'
      case 2:
        return '😕'
      case 3:
        return '🙂'
      case 4:
        return '😃'
      case 5:
        return '🤩'
      default:
        return ''
    }
  }

  return (
    <div className="flex items-center">
      <Ratings
        type="star"
        value={rating}
        onChange={setRating}
        quantity={5}
        className="!w-[300px] h-[100px] gap-5"
      />
      {rating > 0 && (
        <span className="ml-5 text-xl">{`Você avaliou este filme com ${rating} estrelas! ${emojiRating(
          rating
        )}`}</span>
      )}
    </div>
  )
}
