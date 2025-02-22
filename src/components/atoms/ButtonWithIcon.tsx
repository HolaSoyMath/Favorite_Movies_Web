import React from 'react'
import { LucideProps } from 'lucide-react'
import { HTMLAttributes } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

export interface ButtonWithIconProps extends HTMLAttributes<HTMLButtonElement> {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >
  text: string
  link: string
}

export function ButtonWithIcon({ icon, link, text }: ButtonWithIconProps) {
  const Icon = icon

  return (
    <Button className="align-middle justify-center rounded-full w-40 h-12">
      <Link href={link} className="flex items-center">
        <Icon className={`${text ? 'mr-3' : ''}`} />
        {text}
      </Link>
    </Button>
  )
}
