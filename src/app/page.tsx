'use client'
import React from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList,  } from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { Clapperboard, House } from 'lucide-react';
import Image from 'next/image';


export default function Home() {
  return (
    <div style={{
      backgroundColor: "#131316", 
      paddingLeft: 10, 
      paddingTop: 20,
      paddingBottom: 20,
      paddingRight: 15}}>
        <NavigationMenu>
            <NavigationMenuList>
              <div>
                <Link href="#" className='mx-5'>
                  <Image src='/images/AmazonPrime.png' alt='Logo Amazon Prime' width='150' height='50' />
                </Link>
                  <NavigationMenuItem className='flex align-middle justify-center'>
                      <Link href='#'>
                          <NavigationMenuLink className='text-white flex h-12 px-6 justify-center items-center hover:bg-[#343A40] rounded-lg'>
                              <House className='mr-3' />
                              Home
                          </NavigationMenuLink>
                      </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className='flex align-middle justify-center'>
                      <Link href='#'>
                          <NavigationMenuLink className='text-white flex h-12 px-6 justify-center items-center hover:bg-[#343A40] rounded-lg'>
                              <Clapperboard className='mr-3' />
                              Explorar
                          </NavigationMenuLink>
                      </Link>
                  </NavigationMenuItem>
              </div>
            </NavigationMenuList>
        </NavigationMenu>
    </div>
  )
}
