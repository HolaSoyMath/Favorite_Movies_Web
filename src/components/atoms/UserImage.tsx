import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'

export interface UserImageProps {
  src: string
  alt?: string
  className?: string
}

/**
 * Componente UserImage.
 *
 * Este componente exibe uma imagem de avatar com um fallback caso a imagem não seja carregada.
 *
 * @property {string} [src] - URL da imagem do avatar. Se não for fornecida, um avatar padrão será usado.
 * @property {string} [alt] - Texto alternativo da imagem. Se não for fornecido, o padrão será "Ícone Avatar".
 * @property {string} [className] - Classes CSS opcionais para personalização do avatar.
 *
 * @returns {JSX.Element} Um avatar estilizado com uma imagem e um fallback.
 *
 * @example
 * ```tsx
 * <UserImage
 *   src="https://i.pravatar.cc/150?img=3"
 *   alt="Foto de João Silva"
 *   className="w-12 h-12 rounded-full"
 * />
 * ```
 */

export default function UserImage(props: UserImageProps) {
  const { src, alt, className } = props

  return (
    <Avatar className={className}>
      <AvatarImage src={`${src ? src : 'https://github.com/shadcn.png'}`} />
      <AvatarFallback>{`${alt ? alt : 'Ícone Avatar'}`}</AvatarFallback>
    </Avatar>
  )
}
