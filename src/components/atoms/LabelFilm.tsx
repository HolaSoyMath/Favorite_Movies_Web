import React, { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { tv } from 'tailwind-variants'

export interface LabelFilmProps extends HTMLAttributes<HTMLParagraphElement> {
  variant: 'titleCard' | 'titleHighlightFilme' | 'description' | 'descriptionHighlightFilm'
  fontSize?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'titleHighlight'
  fontWeight?: 'normal' | 'semiBold' | 'bold' | 'extraBold'
  className?: string
}

const labelFilmVariant = tv({
  base: 'text-[--foreground] block',
  variants: {
    variant: {
      titleCard: 'h-[30px]',
      description: 'overflow-hidden h-[70px]',
      titleHighlightFilm: 'text-6xl mb-5 text-white',
      descriptionHighlightFilm: '',
    },
    fontSize: {
      xxs: 'text-[10px]',
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      titleHighlight: 'text-6xl',
    },
    fontWeight: {
      normal: 'font-normal',
      semiBold: 'font-semibold',
      bold: 'font-bold',
      extraBold: 'font-extrabold',
    },
  },
  defaultVariants: {
    variant: 'titleCard',
    fontSize: 'md',
    fontWeight: 'semiBold',
  },
})

export function LabelFilm({
  variant,
  fontSize,
  fontWeight,
  className,
  children,
  ...props
}: LabelFilmProps) {
  return (
    <p
      className={cn(labelFilmVariant({ variant, fontSize, fontWeight }), className)}
      {...props}
    >
      {children}
    </p>
  )
}
