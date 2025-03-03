'use client'
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { Clapperboard, Heart, House, Search, Star } from 'lucide-react'
import Image from 'next/image'
import { NavBarButton } from '../atoms/NavBarButton'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ThemeChoice } from '../molecules/ThemeChoice'
import { ProfileDropdown } from '../molecules/ProfileDropdown'

const formSchema = z.object({
  search: z.string().nonempty(),
})

type FormValues = z.infer<typeof formSchema>

export interface NavBarProps {
  className?: string
}

export default function NavBar({ className }: NavBarProps) {
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
    <div
      className={`dark:bg-[#09090B] bg-[#ffffff] h-[80px] py-5 px-12 flex w-full justify-between fixed top-0 left-0 z-50 ${className}`}
    >
      <NavigationMenu className="flex !w-[1000px]">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" className="mx-5">
              <Image
                src="/images/AmazonPrime.png"
                alt="Logo Amazon Prime"
                width="150"
                height="50"
              />
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavBarButton icon={House} text="Home" link="/" />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavBarButton icon={Clapperboard} text="Explorar" link="#" />
          </NavigationMenuItem>
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
                  <FormItem className="flex items-center h-12 rounded-full pl-4 bg-transparent border-2 dark:bg-[#343A40]">
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
          <NavigationMenuItem>
            <NavBarButton icon={Star} link="#" />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavBarButton icon={Heart} link="#" />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ThemeChoice />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ProfileDropdown name="Matheus Santos" />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
