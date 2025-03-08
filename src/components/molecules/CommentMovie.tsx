import React from 'react'
import UserImage from '../atoms/UserImage'

export interface CommentMovieProps {
  name: string,
  date: string,
  pathImg: string
  children: React.ReactNode
}

export function CommentMovie({name, date, pathImg, children}: CommentMovieProps) {
  return (
    <article className="flex gap-4 my-5">
      <UserImage src={pathImg} className="ml-4" />
      <div>
        <div>
          <span className="font-semibold mr-5">{name}</span>
          <time className="text-xs">{date}</time>
        </div>
        <p>
          {children}
        </p>
      </div>
    </article>
  )
}
