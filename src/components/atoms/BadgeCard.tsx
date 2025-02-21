import React, { HTMLAttributes } from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { tv } from 'tailwind-variants'

export interface BadgeCardProps extends HTMLAttributes<HTMLDivElement> {
  text: string
  variant?: 'year' | 'category'
  fontSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const badgeCardVariant = tv({
  base: 'rounded-full font-semibold text-xl px-2 text-white',
  variants: {
    variant: {
      year: 'bg-zinc-500 hover:bg-zinc-500',
      category: 'bg-blue-400 hover:bg-blue-400',
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

export function BadgeCard({
  variant,
  fontSize,
  text,
  className,
  ...props
}: BadgeCardProps) {
  return (
    <Badge
      className={cn(badgeCardVariant({ variant, fontSize }), className)}
      {...props}
    >
      {text}
    </Badge>
  )
}
