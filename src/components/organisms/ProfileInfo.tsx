'use client'
import React from 'react'
import { Film, Heart, Pencil, Star } from 'lucide-react'
import { Badge } from '../ui/badge'
import Text from '../atoms/Text'
import { Button } from '../ui/button'
import UserImage from '../atoms/UserImage'
import { useClerk } from '@clerk/nextjs'

export default function ProfileInfo() {
  const pathImage = 'https://github.com/shadcn.png'
  const { openUserProfile } = useClerk();

  return (
    <aside className="flex max-w-[350px] flex-col px-5 py-7 items-center bg-white dark:bg-gray-900 border-[#E3E5E8] dark:border-transparent border-2 rounded-lg">
      <div className="w-24 h-24">
        <UserImage src={pathImage} className="w-full h-full" />
      </div>
      <Text variant="title" className="text-center mt-6">
        João da Silva
      </Text>
      <Text variant="description" className="text-center">
        joao.silva@email.com
      </Text>
      <Button className="w-full mt-3 py-5 bg-transparent border-2 border-border shadow-none text-foreground hover:bg-border"
      onClick={() => openUserProfile()}>
        <Pencil />
        Editar Perfil
      </Button>

      <hr className="border-1 border-gray-700 w-full my-3" />

      <section className="w-full">
        <Text variant="title" fontWeight="bold">
          Estatísticas
        </Text>
        <div className="flex items-center h-10 gap-4 mt-3">
          <Film className="text-indigo-600 h-1/2" />
          <div className="h-full">
            <Text variant="smtitle" fontWeight="bold">
              127
            </Text>
            <Text variant="date" className="text-slate-500">
              Filmes Avaliados
            </Text>
          </div>
        </div>

        <div className="flex items-center h-10 gap-4 mt-3">
          <Star className="text-yellow-400 h-1/2" />
          <div className="h-full">
            <Text variant="smtitle" fontWeight="bold">
              4.2
            </Text>
            <Text variant="date" className="text-slate-500">
              Média Avaliações
            </Text>
          </div>
        </div>

        <div className="flex items-center h-10 gap-4 mt-3">
          <Heart className="text-red-500 h-1/2" />
          <div className="h-full">
            <Text variant="smtitle" fontWeight="bold">
              56
            </Text>
            <Text variant="date" className="text-slate-500">
              Filmes Favoritos
            </Text>
          </div>
        </div>
      </section>

      <hr className="border-1 border-gray-700 w-full my-3" />

      <Text variant="title" fontWeight="bold" className="text-center">
        Gêneros Favoritos
      </Text>
      <div className="flex gap-4 mt-3">
        <Badge className="rounded-full">Ficção Científica</Badge>
        <Badge className="rounded-full">Ação</Badge>
        <Badge className="rounded-full">Drama</Badge>
      </div>
    </aside>
  )
}
