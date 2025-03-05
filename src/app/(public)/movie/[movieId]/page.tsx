'use client'
import { CommentMovie } from '@/components/molecules/CommentMovie'
import { CustomButton } from '@/components/molecules/CustomButton'
import MovieRatings from '@/components/molecules/MovieRatings'
import CarouselCardMovie from '@/components/organisms/CarouselCardMovie'
import CarouselCardPeople, {
  Cast,
} from '@/components/organisms/CarouselCardPeople'
import MovieHeader from '@/components/organisms/MovieHeader'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { infoMovieCast } from '@/mock/InfoMovieCast.mock'
import { infoMoviesDetails } from '@/mock/InfoMovieDetails.mock'
import { infoMovieVideos } from '@/mock/InfoMovieVideos.mock'
import { zodResolver } from '@hookform/resolvers/zod'
import { MessageSquare } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// Dados Mockados
const pathImage = 'https://github.com/shadcn.png'
const movieCast = infoMovieCast
const movieDetails = infoMoviesDetails
const movieTrailer: string = infoMovieVideos.results.find(movie => movie.type == 'Trailer')!.key

// Funções
const formSchema = z.object({
  comment: z.string().nonempty(),
})

type FormValues = z.infer<typeof formSchema>

export default function MoviePage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: '',
    },
  })

  function onSubmitHandle(data: FormValues) {
    console.log(data.comment)
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
        personId: String(director.id),
      }
    : null

  const actorObjs = actors
    .filter((actor) => actor.profile_path)
    .map((actor) => ({
      name: actor.name,
      character: actor.character,
      pathImg: actor.profile_path,
      personId: String(actor.id),
    }))

  const infosCard: Cast[] = [
    ...(directorObj ? [directorObj] : []),
    ...actorObjs,
  ]

  return (
    <>
      <MovieHeader
        title={movieDetails.title}
        backgroundImg={movieDetails.backdrop_path}
        posterImg={movieDetails.poster_path}
        description={movieDetails.overview}
        genres={movieDetails.genres.map((genre) => genre.name)}
        minutes={movieDetails.runtime}
        releaseYear={new Date(movieDetails.release_date).getFullYear()}
        trailerUrl={movieTrailer}
      />

      <section className="px-12">
        
        <section className="my-5">
          <CarouselCardPeople cast={infosCard} />
          <Label className="text-4xl font-semibold text-[--foreground]">
            Sua Avaliação
          </Label>
          <MovieRatings />
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
                  className="rounded-3xl h-[3rem]"
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
      <CarouselCardMovie title="Recomendados" className="px-12 w-full mt-5" />
    </>
  )
}
