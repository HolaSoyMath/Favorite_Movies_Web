import React, { HTMLAttributes } from 'react'
import { Button } from '../ui/button'
import { LucideProps } from 'lucide-react'

export interface ButtonIconProps extends HTMLAttributes<HTMLButtonElement> {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >
  onClick?: () => void
}

export function ButtonIcon({ icon, onClick, children, className }: ButtonIconProps) {
  const Icon = icon

  return (
    <Button className={`text-[--foreground] dark:bg-[#343A40] bg-[#ffffff] border-2 border-[#E3E5E8] dark:border-transparent shadow-none flex h-12 px-3 justify-center items-center transition-all duration-300 hover:bg-[var(--hover-color)] dark:hover:bg-[var(--hover-color)] rounded-lg ${className}`} onClick={onClick}>
      <Icon className={`${children && 'mr-3'}`} />
      {children}
    </Button>
  )
}
