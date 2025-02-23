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
  Search,
  Star,
} from 'lucide-react'
import Image from 'next/image'
import { NavBarButton } from '@/components/atoms/NavBar/NavBarButton'
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

export default function NavBar({className}: NavBarProps) {
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
    <div className={`py-5 px-12 bg-[--background] flex w-full justify-between ${className}`}>
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
          <ThemeChoice />
          <ProfileDropdown name='Matheus Santos'/>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
