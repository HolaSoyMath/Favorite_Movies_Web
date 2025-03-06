import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { LabelFilm } from '../atoms/LabelFilm'
import { ButtonIcon } from '../atoms/ButtonIcon'
import { Film, Heart, Key, Pencil, Star } from 'lucide-react'
import { Badge } from '../ui/badge'

export default function ProfileInfo() {
  return (
    <aside className="flex flex-col px-5 py-7 items-center bg-white dark:bg-gray-900 border-[#E3E5E8] dark:border-transparent border-2 rounded-lg">
      <div className="w-24 h-24">
        <Avatar className="ml-4 w-full h-full rounded-full">
          <AvatarImage
            className="rounded-full"
            src="https://github.com/shadcn.png"
          />
          <AvatarFallback>Ícone Avatar</AvatarFallback>
        </Avatar>
      </div>
      <LabelFilm variant="titleCard" className="mt-10 h-7">
        João da Silva
      </LabelFilm>
      <LabelFilm variant="description" className="my-1 h-7">
        joao.silva@email.com
      </LabelFilm>
      <ButtonIcon className="w-full mt-3" icon={Pencil}>
        Editar Perfil
      </ButtonIcon>
      <ButtonIcon className="w-full mt-3" icon={Key}>
        Alterar Senha
      </ButtonIcon>

      <hr className="border-1 border-gray-700 w-full my-3" />

      <section className="w-full">
        <LabelFilm variant="titleCard" className="h-7">
          Estatísticas
        </LabelFilm>
        <div className="flex items-center h-10 gap-4">
          <Film className="text-indigo-600 h-1/2" />
          <div className="h-full">
            <LabelFilm variant="titleCard" fontSize="md" className="h-auto">
              127
            </LabelFilm>
            <LabelFilm
              variant="description"
              fontSize="xs"
              fontWeight="normal"
              className="h-auto text-slate-500"
            >
              Filmes Avaliados
            </LabelFilm>
          </div>
        </div>

        <div className="flex items-center h-10 gap-4 mt-3">
          <Star className="text-yellow-400 h-1/2" />
          <div className="h-full">
            <LabelFilm variant="titleCard" fontSize="md" className="h-auto">
              4.2
            </LabelFilm>
            <LabelFilm
              variant="description"
              fontSize="xs"
              fontWeight="normal"
              className="h-auto text-slate-500"
            >
              Média de Avaliações
            </LabelFilm>
          </div>
        </div>

        <div className="flex items-center h-10 gap-4 mt-3">
          <Heart className="text-red-500 h-1/2" />
          <div className="h-full">
            <LabelFilm variant="titleCard" fontSize="md" className="h-auto">
              127
            </LabelFilm>
            <LabelFilm
              variant="description"
              fontSize="xs"
              fontWeight="normal"
              className="h-auto text-slate-500"
            >
              Filmes Favoritos
            </LabelFilm>
          </div>
        </div>
      </section>

      <hr className="border-1 border-gray-700 w-full my-3" />

      <LabelFilm variant="titleCard">Gêneros Favoritos</LabelFilm>
      <div className="flex gap-4">
        <Badge className="rounded-full">Ficção Científica</Badge>
        <Badge className="rounded-full">Ação</Badge>
        <Badge className="rounded-full">Drama</Badge>
      </div>
    </aside>
  )
}
