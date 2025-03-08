import RecentActivity from '@/components/molecules/RecentActivity'
import ProfileInfo from '@/components/organisms/ProfileInfo'
import React from 'react'
import Text from '../atoms/Text'

export interface ProfileProps {
  pathImage: string
  name: string
  email: string
  watchedFilm: number
  meanRating: number
  quantityFavoriteMovies: number
}

export default function ProfileTemplate() {
  return (
    <div className="px-12 grid gap-4 grid-cols-3">
      <ProfileInfo />
      <main className="col-span-2">
        <section className="px-5 py-7 bg-white dark:bg-gray-900 border-[#E3E5E8] dark:border-transparent border-2 rounded-lg">
          <Text variant="title" fontWeight="semibold">
            Atividade Recente
          </Text>
          <div className="grid grid-cols-1 gap-4 mt-3">
            <RecentActivity />
            <RecentActivity />
            <RecentActivity />
          </div>
        </section>
      </main>
    </div>
  )
}
