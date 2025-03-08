import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Label } from '@radix-ui/react-label'
import { LogOut, User } from 'lucide-react'
import Link from 'next/link'
import UserImage from '../atoms/UserImage'

export interface ProfileDropdownProps {
  name: string
  pathImg?: string
}

export function ProfileDropdown({
  name,
  pathImg = 'https://github.com/shadcn.png',
}: ProfileDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center hover:bg-[var(--hover-color)] rounded-xl h-12 px-6 cursor-pointer transition-all duration-300">
        <Label className="text-[--foreground] cursor-pointer">{name}</Label>
        <UserImage src={pathImg} className="ml-4"/>
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
