import React from 'react'

type YoutubeVideoProps = {
  videoUrl: string
  width: number | string
  height: number | string
  className?: string
}

/**
 * Componente YoutubeVideo.
 * 
 * Este componente renderiza um vídeo do YouTube em um iframe.
 * 
 * @property {string} videoUrl - O identificador único do vídeo do YouTube. Exemplo: `"dQw4w9WgXcQ"`.
 * @property {number | string} width - A largura do vídeo. Pode ser um número (pixels) ou uma string (`"100%"`).
 * @property {number | string} height - A altura do vídeo. Pode ser um número (pixels) ou uma string (`"100%"`).
 * @property {string} [className] - Classes CSS opcionais para estilização adicional.
 * 
 * @returns {JSX.Element} Um elemento `iframe` para exibir um vídeo do YouTube.
 * 
 * @example
 * ```tsx
 * <YoutubeVideo 
 *   videoUrl="dQw4w9WgXcQ" 
 *   width="100%" 
 *   height={400} 
 *   className="rounded-lg shadow-lg" 
 * />
 * ```
 */

export default function YoutubeVideo(params: YoutubeVideoProps) {
  const { videoUrl, width, height, className } = params

  return (
    <iframe
      width={width.toString()}
      height={height.toString()}
      src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1&mute=1`}
      className={className}
    />
  )
}
