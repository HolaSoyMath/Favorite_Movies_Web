'use client'
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import {
  Clapperboard,
  Heart,
  House,
  LogOut,
  Moon,
  Search,
  Star,
  Sun,
  User,
} from 'lucide-react'
import Image from 'next/image'
import { NavBarButton } from '@/components/atoms/NavBar/NavBarButton'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Label } from '@radix-ui/react-label'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

const formSchema = z.object({
  search: z.string().nonempty(),
})

type FormValues = z.infer<typeof formSchema>

export default function NavBar() {
  const { setTheme } = useTheme()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: '',
    },
  })

  function onSubmitHandle(data: FormValues) {
    console.log(data.search)
    window.history.pushState({}, '', data.search)
  }

  return (
    <div className="py-5 px-12 bg-[--background] flex w-full justify-between">
      <NavigationMenu className="flex !w-[1000px]">
        <NavigationMenuList>
          <Link href="#" className="mx-5">
            <Image
              src="/images/AmazonPrime.png"
              alt="Logo Amazon Prime"
              width="150"
              height="50"
            />
          </Link>
          <NavBarButton icon={House} text="Home" link="#" />
          <NavBarButton icon={Clapperboard} text="Explorar" link="#" />
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        <NavigationMenuList>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmitHandle)}>
              <FormField
                control={form.control}
                name="search"
                render={({ field }) => (
                  <FormItem className="flex items-center h-12 rounded-full pl-4 bg-transparent border-2 dark:bg-[#343A40]  ">
                    <Search className="text-[--foreground]" />
                    <FormControl>
                      <Input
                        placeholder="Buscar filmes..."
                        className="max-h-full !m-0 border-none focus-visible:ring-0 text-[--foreground]"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <NavBarButton icon={Star} link="#" />
          <NavBarButton icon={Heart} link="#" />

          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className="text-[--foreground] flex h-12 w-12 px-3 justify-center items-center transition-all duration-300 hover:bg-[var(--hover-color)] rounded-lg border-none focus-visible:ring-0 shadow-none"
            >
              <Button variant="outline" className="p-0">
                <Sun className="absolute w-6 h-6  rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute w-6 h-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme('light')}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center hover:bg-[var(--hover-color)] rounded-xl h-12 px-6 cursor-pointer transition-all duration-300">
              <Label className="text-[--foreground] cursor-pointer">
                Matheus Santos
              </Label>
              <Avatar className="ml-4">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>Ícone Avatar</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#343A40] text-white border-none">
              <DropdownMenuItem className="cursor-pointer">
                <User />
                Perfil
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <LogOut />
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
