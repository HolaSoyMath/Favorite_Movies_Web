import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
import { Button } from '../ui/button'
import { MessageSquare } from 'lucide-react'
import { CommentMovie } from '../molecules/CommentMovie'
import { commentsMock } from '@/mock/CommentMovie.mock'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

// Dados Mock
const pathImage = 'https://github.com/shadcn.png'
const movieComments = commentsMock

// Funções
const formSchema = z.object({
  comment: z.string().nonempty(),
})

type FormValues = z.infer<typeof formSchema>

export default function Comments() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: '',
    },
  })

  function onSubmitHandle(data: FormValues) {
    console.log(data.comment)
  }

  return (
    <section className="my-5">
      <p className="text-4xl font-semibold text-[--foreground]">Comentários</p>
      <div className="flex gap-4 mt-5">
        <Avatar className="ml-4">
          <AvatarImage src={pathImage} />
          <AvatarFallback>Ícone Avatar</AvatarFallback>
        </Avatar>

        <Form {...form}>
          <form className="w-full" onSubmit={form.handleSubmit(onSubmitHandle)}>
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
            <Button
              className="mt-3 py-5 bg-transparent border-2 border-border shadow-none text-foreground hover:bg-border"
              type="submit"
            >
              <MessageSquare />
              Comentar
            </Button>
          </form>
        </Form>
      </div>

      {movieComments.map((comment, index) => (
        <CommentMovie
          avatarImg={comment.avatarImg}
          name={comment.name}
          date={comment.date}
          key={index}
        >
          {comment.comment}
        </CommentMovie>
      ))}
    </section>
  )
}
