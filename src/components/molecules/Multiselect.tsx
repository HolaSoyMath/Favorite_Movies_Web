'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import ItemMultiSelect from '../atoms/ItemMultiSelect'
import { ChevronDown } from 'lucide-react'

interface MultiSelectProps {
  options: { value: string; label: string }[]
  children?: React.ReactNode
  className?: React.ReactNode
}

export function MultiSelect({ options, children, className }: MultiSelectProps) {
  const [selected, setSelected] = useState<string[]>([])

  const toggleSelection = (value: string) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    )
  }

  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild className={`${className}`}>
        <Button className={`dark:bg-zinc-500 dark:hover:bg-zinc-600 bg-zinc-200 hover:bg-zinc-300 text-[--foreground] border-zinc-200 border-1`}>
          <span>{children}</span>
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {options.map((option) => (
          <ItemMultiSelect
            key={option.value}
            label={option.label}
            value={option.value}
            isChecked={selected.includes(option.value)}
            toggleSelection={toggleSelection}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
