import { Star } from 'lucide-react'
import React from 'react'
import Text from '../atoms/Text'

interface RecentActivityProps {
  className?: string
}

export default function RecentActivity(params: RecentActivityProps) {
  const { className } = params

  return (
    <div
      className={`flex rounded-md dark:bg-[#343A40] bg-[#F5F5F5] px-4 py-3 gap-4 ${className}`}
    >
      <div className="flex dark:bg-[#49525A] bg-[#E0E0E0] rounded-full p-1.5 h-8 w-8">
        <Star className="h-auto" />
      </div>
      <div>
        <Text variant="title" fontWeight="semibold">
          Avatar: O Caminho da Água
        </Text>
        <Text variant="description">Avaliou com 5 estrelas</Text>
        <Text variant="date">2024-03-15</Text>
      </div>
    </div>
  )
}
