'use client'
import { ButtonIcon } from '@/components/atoms/ButtonIcon'
import { MultiSelect } from '@/components/molecules/Multiselect'
import { Input } from '@/components/ui/input'
import { Filter, Search } from 'lucide-react'
import React, { useState } from 'react'

const options = [
  { value: 'react', label: 'React' },
  { value: 'nextjs', label: 'Next.js' },
  { value: 'tailwind', label: 'Tailwind CSS' },
  { value: 'shadcn', label: 'ShadCN' },
]

export default function ExplorerPage() {
  const [showFilter, setShowFilter] = useState(false)

  return (
    <div className='px-12'>
      <section id="filters" className='flex gap-4 justify-between'>
        <div className="flex items-center w-[90%] h-12 rounded-full pl-4 bg-transparent border-2 dark:bg-[#343A40]">
          <Search className="text-[--foreground]" />
          <Input
            placeholder="Buscar filmes..."
            className="max-h-full !m-0 border-none focus-visible:ring-0 text-[--foreground]"
          />
        </div>
        <ButtonIcon  icon={Filter} onClick={() => setShowFilter(!showFilter)}>Filtros</ButtonIcon>
      </section>
      {/* {
        showFilter && 
      } */}
        <section className='border-2 bg-[#ffffff] dark:bg-[#121217] rounded-xl px-5 py-5'>
          <MultiSelect className='w-1/4 px-2' options={options}>Gênero</MultiSelect>
          <MultiSelect className='w-1/4 px-2' options={options}>Gênero</MultiSelect>
          <MultiSelect className='w-1/4 px-2' options={options}>Gênero</MultiSelect>
          <MultiSelect className='w-1/4 px-2' options={options}>Gênero</MultiSelect>
        </section>
    </div>
  )
}
