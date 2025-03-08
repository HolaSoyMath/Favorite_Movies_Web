import ProfileTemplate from '@/components/layout/Profile'
import React from 'react'

export interface ProfileProps {
  pathImage: string
  name: string
  email: string
  watchedFilm: number
  meanRating: number
  quantityFavoriteMovies: number
}

export default function ProfilePage() {
  return <ProfileTemplate />
}
