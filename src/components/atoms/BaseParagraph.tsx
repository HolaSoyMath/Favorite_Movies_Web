import React from 'react'
import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'
import { tv } from 'tailwind-variants'

export interface BaseParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: 'heading' | 'title' | 'smtitle' | 'subtitle' | 'description' | 'date'
  fontWeight?: 'default' | 'semibold' | 'bold' | 'extraBold'
  className?: string
  children?: React.ReactNode
}

const baseParagraphVariants = tv({
  base: 'font-normal w-full',
  variants: {
    variant: {
      heading: 'font-bold text-2xl text-primary',
      title: 'font-semibold text-xl text-primary',
      smtitle: 'font-semibold text-md text-primary',
      subtitle: 'font-normal text-md text-primary/70',
      description: 'font-normal text-sm text-primary/40',
      date: 'font-normal text-xs text-primary/20',
    },
    fontWeight: {
      default: 'font-normal',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extraBold: 'font-extrabold',
    },
  },
  defaultVariants: {
    variant: 'title',
    fontWeight: 'default'
  },
})


// NOME DA DOCUMENTAÇÃO DE UM COMPONENTE É JSDOC


/**
 * Componente BaseParagraph.
 * 
 * Este componente renderiza um parágrafo estilizado com base nas propriedades fornecidas.
 * 
 * @property variant {('heading' | 'title' | 'subtitle' | 'description' | 'date')} - Define o estilo do parágrafo. 
 * Pode ser um dos seguintes:
 *   - 'heading': Estilo para cabeçalho (font-bold, text-2xl, text-primary).
 *   - 'title': Estilo para título (font-semibold, text-xl, text-primary).
 *   - 'smtitle': Estilo para título menor (font-semibold, text-md, text-primary).
 *   - 'subtitle': Estilo para subtítulo (font-normal, text-md, text-primary/70).
 *   - 'description': Estilo para descrição (font-normal, text-sm, text-primary/40).
 *   - 'date': Estilo para data (font-normal, text-xs, text-primary/20).
 * @property fontWeight {('default' | 'semiBold' | 'bold' | 'extraBold')} - Define o peso da fonte do texto.
 * Pode ser um dos seguintes:
 *   - 'default': Peso da fonte normal.
 *   - 'semibold': Peso da fonte semibold.
 *   - 'bold': Peso da fonte em negrito.
 *   - 'extraBold': Peso da fonte em negrito extra.
 * @returns {JSX.Element} O elemento JSX que representa o parágrafo estilizado.
 */
export default function BaseParagraph(props: BaseParagraphProps) {
  const { variant, fontWeight, className, children } = props

  return (
    <p className={cn(baseParagraphVariants({ variant, fontWeight }), className)}>
      {children}
    </p>
  )
}
