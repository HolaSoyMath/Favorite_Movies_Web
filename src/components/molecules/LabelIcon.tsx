import React from 'react'
import { LucideProps } from 'lucide-react'
import { HTMLAttributes } from 'react'

export interface LabelIconProps extends HTMLAttributes<HTMLDivElement> {
  icon?: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >
}

/**
 * Componente LabelIcon
 *
 * Renderiza um container com um ícone e um texto opcional, aplicando um espaçamento condicional.
 *
 * @param icon - Componente de ícone a ser renderizado.
 * @param className - Classes CSS adicionais para o container.
 * @param children - Qualquer conteúdo adicional.
 */

export function LabelIcon({
  icon: Icon,
  className = '',
  children,
  ...props
}: LabelIconProps) {
  return (
    <div className={`flex items-center ${className}`} {...props}>
      {Icon && <Icon className={ children?.toString && 'mr-2'} />}
      {children}
    </div>
  )
}
