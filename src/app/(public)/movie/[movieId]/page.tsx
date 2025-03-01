import { LabelFilm } from '@/components/atoms/LabelFilm'
import CardRating from '@/components/molecules/CardRating'
import { CustomButton } from '@/components/molecules/CustomButton'
import { LabelIcon } from '@/components/molecules/LabelIcon'
import { Calendar, Clock4, Film } from 'lucide-react'
import React from 'react'


const urlPosterImg = "/vL5LR6WdxWPjLPFRLe133jXWsh5.jpg"
const urlCardPosterImg = "/tfM1T6tAivjvy0sLwt6Y9WvlmzB.jpg"

export default function MoviePage() {
  return (
    <>
      <div
        className={`w-full h-[700px] bg-cover bg-no-repeat`}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w780/${urlPosterImg})`,
        }}
      >
        <div className="w-full h-full bg-gradient-to-t dark:from-zinc-950 to-transparent px-12 py-36 flex">
          <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/w780/${urlCardPosterImg})`}} className='h-[450px] w-[300px] bg-cover' />
          <div className='pl-10 w-1/2'>
            <LabelFilm variant='titleHighlightFilme' fontSize='titleHighlight' >Sonic the Hedgehog 3</LabelFilm>
            <div className='flex gap-6'>
              <LabelIcon icon={Calendar}>2022</LabelIcon>
              <LabelIcon icon={Clock4}>3h 12min</LabelIcon>
              <LabelIcon icon={Film}>Ação, Aventura, Ficção Científica</LabelIcon>
            </div>
            <LabelFilm variant='descriptionHighlightFilm' fontWeight='normal' className='mt-10'>Sonic, Knuckles e Tails se reúnem contra um novo e poderoso adversário, Shadow, um vilão misterioso com poderes diferentes de tudo que eles já enfrentaram antes. Com suas habilidades superadas em todos os sentidos, a Equipe Sonic deve buscar uma aliança improvável na esperança de parar Shadow e proteger o planeta.</LabelFilm>
            <div className='flex gap-6 mt-3'>
              <CardRating fontData='TMDB' rating={7.8} quantity={1250} />
              <CardRating fontData='MathFlix' rating={0} quantity={0} />
            </div>
            <div className='flex gap-6 mt-3'>
              <CustomButton  />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
