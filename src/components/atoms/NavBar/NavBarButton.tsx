import React, { HTMLAttributes } from 'react'
import { LucideProps } from 'lucide-react'
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from '../../ui/navigation-menu'
import Link from 'next/link'

export interface NavBarButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >
  link: string
  text?: string
}

export function NavBarButton({ icon, link, text }: NavBarButtonProps) {
  const Icon = icon

  return (
    <NavigationMenuItem className="flex align-middle justify-center">
      <Link href={link}>
        <NavigationMenuLink className="text-[--foreground] flex h-12 px-3 justify-center items-center transition-all duration-300 hover:bg-[var(--hover-color)] rounded-lg">
          <Icon className={`${text ? 'mr-3' : ''}`} />
          {text}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}
