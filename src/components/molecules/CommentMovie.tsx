import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export interface CommentMovieProps {
  name: string,
  date: string,
  avatarImg: string
  children: React.ReactNode
}

export function CommentMovie({name, date, avatarImg, children}: CommentMovieProps) {
  return (
    <article className="flex gap-4 my-5">
      <Avatar className="ml-4">
        <AvatarImage src={avatarImg} />
        <AvatarFallback>Ícone Avatar</AvatarFallback>
      </Avatar>
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
