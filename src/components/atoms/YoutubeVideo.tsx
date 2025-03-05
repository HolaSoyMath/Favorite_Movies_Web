import React from 'react'

type YoutubeVideoProps = {
  trailerUrl: string
  widthVideo: number | string
  heightVideo: number
  className?: string
}



export default function YoutubeVideo(params: YoutubeVideoProps) {
  const { trailerUrl, widthVideo, heightVideo, className } = params

  return (
    <iframe
      width={widthVideo.toString()}
      height={heightVideo.toString()}
      src={`https://www.youtube.com/embed/${trailerUrl}?autoplay=1&mute=1`}
      className={className}
    />
  )
}
