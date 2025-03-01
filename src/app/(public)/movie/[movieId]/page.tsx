'use client'
import { LabelFilm } from '@/components/atoms/LabelFilm'
import { Ratings } from '@/components/atoms/Ratings'
import CardRating from '@/components/molecules/CardRating'
import { CustomButton } from '@/components/molecules/CustomButton'
import { LabelIcon } from '@/components/molecules/LabelIcon'
import CarouselCardPeople from '@/components/organisms/CarouselCardPeople'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Label } from '@/components/ui/label'
import { Calendar, Clock4, Film, Heart, Share2 } from 'lucide-react'
import React, { useState } from 'react'

const urlPosterImg = '/vL5LR6WdxWPjLPFRLe133jXWsh5.jpg'
const urlCardPosterImg = '/tfM1T6tAivjvy0sLwt6Y9WvlmzB.jpg'
const pathImage = 'https://github.com/shadcn.png'

export default function MoviePage() {
  const [rating, setRating] = useState(0)

  function emojiRating(value: number): string {
    switch (value) {
      case 1:
        return "😞";
      case 2:
        return "😕";
      case 3:
        return "🙂";
      case 4:
        return "😃";
      case 5:
        return "🤩";
      default:
        return "";
    }
  }

  return (
    <>
      <section
        id="headerFilm"
        className={`w-full h-[700px] bg-cover bg-no-repeat`}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w780/${urlPosterImg})`,
        }}
      >
        <div className="w-full h-full bg-gradient-to-t from-zinc-950 to-transparent px-12 py-36 flex">
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w780/${urlCardPosterImg})`,
            }}
            className="h-[450px] w-[300px] bg-cover"
          />
          <div className="pl-10 w-1/2">
            <LabelFilm variant="titleHighlightFilm" fontSize="titleHighlight">
              Sonic the Hedgehog 3
            </LabelFilm>
            <div className="flex gap-6 mt-3">
              <LabelIcon icon={Calendar} className="text-white">
                2022
              </LabelIcon>
              <LabelIcon icon={Clock4} className="text-white">
                3h 12min
              </LabelIcon>
              <LabelIcon icon={Film} className="text-white">
                Ação, Aventura, Ficção Científica
              </LabelIcon>
            </div>
            <LabelFilm
              variant="descriptionHighlightFilm"
              fontWeight="normal"
              className="mt-10 text-white"
            >
              Sonic, Knuckles e Tails se reúnem contra um novo e poderoso
              adversário, Shadow, um vilão misterioso com poderes diferentes de
              tudo que eles já enfrentaram antes. Com suas habilidades superadas
              em todos os sentidos, a Equipe Sonic deve buscar uma aliança
              improvável na esperança de parar Shadow e proteger o planeta.
            </LabelFilm>
            <div className="flex gap-6 mt-5">
              <CardRating fontData="TMDB" rating={7.8} quantity={1250} />
              <CardRating fontData="MathFlix" rating={0} quantity={0} />
            </div>
            <div className="flex gap-6 mt-5">
              <CustomButton
                icon={Heart}
                text="Favorito"
                className="h-12 bg-white text-black"
              />
              <CustomButton
                icon={Share2}
                text="Compartilhar"
                className="h-12 bg-white text-black"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="px-12 mt-5">
        <CarouselCardPeople />
        <Label className="text-4xl font-semibold text-[--foreground]">
          Sua Avaliação
        </Label>
        <div className='flex items-center'>
          <Ratings
            type="star"
            value={rating}
            onChange={setRating}
            quantity={5}
            className="!w-[300px] h-[100px] gap-5"
          />
          {rating > 0 && <span className='ml-5 text-xl'>{`Você avaliou este filme com ${rating} estrelas! ${emojiRating(rating)}`}</span>}

        </div>
        <Label className="text-4xl font-semibold text-[--foreground]">
          Comentários
        </Label>
        <div className="flex gap-4">
          <Avatar className="ml-4">
            <AvatarImage src={pathImage} />
            <AvatarFallback>Ícone Avatar</AvatarFallback>
          </Avatar>
          <textarea
            placeholder="Escreva seu comentário..."
            className="h-[100px] w-full text-left p-2"
          ></textarea>
        </div>
      </section>
    </>
  )
}
