import React, { HTMLAttributes } from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { tv } from 'tailwind-variants'

export interface BadgeInfoProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'year' | 'category' | 'filter'
  fontSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  children?: React.ReactNode
}

const badgeInfoVariant = tv({
  base: 'rounded-full text-xl px-2 text-white',
  variants: {
    variant: {
      year: 'bg-zinc-500 hover:bg-zinc-500 font-semibold',
      category: 'bg-blue-400 hover:bg-blue-400 font-semibold',
      filter: 'bg-blue-500 hover:bg-blue-500 font-normal',
    },
    fontSize: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
  },
  defaultVariants: {
    variant: 'year',
    fontSize: 'md',
  },
})

export function BadgeInfo({
  variant,
  fontSize,
  children,
  className,
  ...props
}: BadgeInfoProps) {
  return (
    <Badge
      className={cn(badgeInfoVariant({ variant, fontSize }), className)}
      {...props}
    >
      {children}
    </Badge>
  )
}
