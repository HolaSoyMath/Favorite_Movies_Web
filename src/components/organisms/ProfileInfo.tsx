import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Film, Heart, Key, Pencil, Star } from 'lucide-react'
import { Badge } from '../ui/badge'
import BaseParagraph from '../atoms/BaseParagraph'
import { Button } from '../ui/button'

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
      <BaseParagraph variant="title" className="text-center mt-10">
        João da Silva
      </BaseParagraph>
      <BaseParagraph variant="description" className="text-center">
        joao.silva@email.com
      </BaseParagraph>
      {/* <ButtonIcon className="w-full mt-3" icon={Pencil}>
        Editar Perfil
      </ButtonIcon> */}
      <Button className='w-full mt-3 py-5 bg-transparent border-2 border-border shadow-none text-foreground hover:bg-border'>
        <Pencil />
        Editar Perfil
      </Button>
      <Button className='w-full mt-3 py-5 bg-transparent border-2 border-border shadow-none text-foreground hover:bg-border'>
        <Key />
        Alterar Senha
      </Button>

      <hr className="border-1 border-gray-700 w-full my-3" />

      <section className="w-full">
        <BaseParagraph variant="title" fontWeight="bold">
          Estatísticas
        </BaseParagraph>
        <div className="flex items-center h-10 gap-4 mt-3">
          <Film className="text-indigo-600 h-1/2" />
          <div className="h-full">
            <BaseParagraph variant="smtitle" fontWeight="bold">
              127
            </BaseParagraph>
            <BaseParagraph variant="date" className="text-slate-500">
              Filmes Avaliados
            </BaseParagraph>
          </div>
        </div>

        <div className="flex items-center h-10 gap-4 mt-3">
          <Star className="text-yellow-400 h-1/2" />
          <div className="h-full">
            <BaseParagraph variant="smtitle" fontWeight="bold">
              4.2
            </BaseParagraph>
            <BaseParagraph variant="date" className="text-slate-500">
              Média Avaliações
            </BaseParagraph>
          </div>
        </div>

        <div className="flex items-center h-10 gap-4 mt-3">
          <Heart className="text-red-500 h-1/2" />
          <div className="h-full">
            <BaseParagraph variant="smtitle" fontWeight="bold">
              56
            </BaseParagraph>
            <BaseParagraph variant="date" className="text-slate-500">
              Filmes Favoritos
            </BaseParagraph>
          </div>
        </div>
      </section>

      <hr className="border-1 border-gray-700 w-full my-3" />

      <BaseParagraph variant="title" fontWeight="bold" className='text-center'>
        Gêneros Favoritos
      </BaseParagraph>
      <div className="flex gap-4 mt-3">
        <Badge className="rounded-full">Ficção Científica</Badge>
        <Badge className="rounded-full">Ação</Badge>
        <Badge className="rounded-full">Drama</Badge>
      </div>
    </aside>
  )
}
