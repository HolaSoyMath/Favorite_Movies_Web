import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Label } from '@radix-ui/react-label'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { LogOut, User } from 'lucide-react'
import Link from 'next/link'

export interface ProfileDropdownProps {
  name: string
  pathImage?: string
}

export function ProfileDropdown({
  name,
  pathImage = 'https://github.com/shadcn.png',
}: ProfileDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center hover:bg-[var(--hover-color)] rounded-xl h-12 px-6 cursor-pointer transition-all duration-300">
        <Label className="text-[--foreground] cursor-pointer">{name}</Label>
        <Avatar className="ml-4">
          <AvatarImage src={pathImage} />
          <AvatarFallback>Ícone Avatar</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#343A40] text-white border-none">
        <Link href="/profile">
          <DropdownMenuItem className="cursor-pointer h-[32px]">
            <User />
            Perfil
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem className="cursor-pointer">
          <LogOut />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
