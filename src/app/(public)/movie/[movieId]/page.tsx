'use client'
import { LabelFilm } from '@/components/atoms/LabelFilm'
import { Ratings } from '@/components/atoms/Ratings'
import CardRating from '@/components/molecules/CardRating'
import { CommentMovie } from '@/components/molecules/CommentMovie'
import { CustomButton } from '@/components/molecules/CustomButton'
import { LabelIcon } from '@/components/molecules/LabelIcon'
import CarouselCardMovie from '@/components/organisms/CarouselCardMovie'
import CarouselCardPeople, { Cast } from '@/components/organisms/CarouselCardPeople'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { infoMovieCast } from '@/mock/InfoMovieCast.mock'
import { infoMoviesDetails } from '@/mock/InfoMovieDetails.mock'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Calendar,
  Clock4,
  Film,
  Heart,
  MessageSquare,
  Share2,
} from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// Dados Mockados
const pathImage = 'https://github.com/shadcn.png'
const movieCast = infoMovieCast
const movieDetails = infoMoviesDetails

// Funções
const formSchema = z.object({
  comment: z.string().nonempty(),
})

type FormValues = z.infer<typeof formSchema>

export default function MoviePage() {
  const [rating, setRating] = useState(0)

  function convertMinutesToHours(minutes: number) {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}min`
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: '',
    },
  })

  function onSubmitHandle(data: FormValues) {
    console.log(data.comment)
  }

  function emojiRating(value: number): string {
    switch (value) {
      case 1:
        return '😞'
      case 2:
        return '😕'
      case 3:
        return '🙂'
      case 4:
        return '😃'
      case 5:
        return '🤩'
      default:
        return ''
    }
  }

  const actors = movieCast.cast.filter(
    (member) => member.known_for_department == 'Acting'
  )
  const director = movieCast.crew.find((member) => member.job == 'Director')

  const directorObj = director
    ? {
        name: director.name,
        character: director.job,
        pathImg: director.profile_path,
        personId: String(director.id), // converte para string se necessário
      }
    : null

  const actorObjs = actors
    .filter((actor) => actor.profile_path)
    .map((actor) => ({
      name: actor.name,
      character: actor.character,
      pathImg: actor.profile_path,
      personId: String(actor.id), // garante que personId seja uma string
    }))

  const infosCard: Cast[] = [
    ...(directorObj ? [directorObj] : []),
    ...actorObjs,
  ]

  return (
    <>
      <section
        id="headerFilm"
        className={`w-full h-[700px] bg-cover bg-no-repeat`}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w780/${movieDetails.backdrop_path})`,
        }}
      >
        <div className="w-full h-full bg-gradient-to-t from-zinc-950 to-transparent px-12 py-36 flex">
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w780/${movieDetails.poster_path})`,
            }}
            className="h-[450px] w-[300px] bg-cover"
          />
          <div className="pl-10 w-1/2">
            <LabelFilm variant="titleHighlightFilm" fontSize="titleHighlight">
              {movieDetails.title}
            </LabelFilm>
            <div className="flex gap-6 mt-3">
              <LabelIcon icon={Calendar} className="text-white">
                {movieDetails.release_date.substring(0, 4)}
              </LabelIcon>
              <LabelIcon icon={Clock4} className="text-white">
                {convertMinutesToHours(movieDetails.runtime)}
              </LabelIcon>
              <LabelIcon icon={Film} className="text-white">
                {movieDetails.genres.map((genre) => genre.name).join(', ')}
              </LabelIcon>
            </div>
            <LabelFilm
              variant="descriptionHighlightFilm"
              fontWeight="normal"
              className="mt-10 text-white"
            >
              {movieDetails.overview}
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
      <section className="px-12">
        <section className="my-5">
          <CarouselCardPeople cast={infosCard} />
          <Label className="text-4xl font-semibold text-[--foreground]">
            Sua Avaliação
          </Label>
          <div className="flex items-center">
            <Ratings
              type="star"
              value={rating}
              onChange={setRating}
              quantity={5}
              className="!w-[300px] h-[100px] gap-5"
            />
            {rating > 0 && (
              <span className="ml-5 text-xl">{`Você avaliou este filme com ${rating} estrelas! ${emojiRating(
                rating
              )}`}</span>
            )}
          </div>
        </section>
        <section className="my-5">
          <Label className="text-4xl font-semibold text-[--foreground]">
            Comentários
          </Label>
          <div className="flex gap-4 mt-5">
            <Avatar className="ml-4">
              <AvatarImage src={pathImage} />
              <AvatarFallback>Ícone Avatar</AvatarFallback>
            </Avatar>

            <Form {...form}>
              <form
                className="w-full"
                onSubmit={form.handleSubmit(onSubmitHandle)}
              >
                <FormField
                  control={form.control}
                  name="comment"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <textarea
                          placeholder="Escreva seu comentário..."
                          className="h-[100px] w-full text-left p-2 border-[--border] border rounded-lg"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <CustomButton
                  icon={MessageSquare}
                  text="Comentar"
                  className="rounded-3xl h-13"
                />
              </form>
            </Form>
          </div>
          <CommentMovie
            avatarImg={pathImage}
            name="João Silva"
            date="2024-03-15"
          >
            Um dos melhores filmes que já assisti! A cinematografia é
            impressionante. Um dos melhores filmes que já assisti! A
            cinematografia é impressionante. Um dos melhores filmes que já
            assisti! A cinematografia é impressionante. Um dos melhores filmes
            que já assisti! A cinematografia é impressionante. Um dos melhores
            filmes que já assisti! A cinematografia é impressionante. Um dos
            melhores filmes que já assisti! A cinematografia é impressionante.
            Um dos melhores filmes que já assisti! A cinematografia é
            impressionante.
          </CommentMovie>
        </section>
      </section>
      <section className="px-12 w-full mt-5">
        <CarouselCardMovie title="Recomendados" className="px-10" />
      </section>
    </>
  )
}
