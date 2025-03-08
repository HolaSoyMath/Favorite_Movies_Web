import React, { useEffect, useRef, useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import FilterOption from '../atoms/FilterOption'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

interface DropdownProps {
  options: { value: string; label: string }[]
  multiSelect?: boolean
  children?: React.ReactNode
  className?: string
  onChange: (selected: string[]) => void
  selected: string[]
}

export function Dropdown({
  options,
  multiSelect = false,
  selected,
  children,
  className,
  onChange,
}: DropdownProps) {
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const [width, setWidth] = useState('auto')

  useEffect(() => {
    if (triggerRef.current) {
      setWidth(`${triggerRef.current.offsetWidth}px`)
    }
  }, [])

  const toggleSelection = (value: string) => {
    const newSelected = multiSelect
      ? selected.includes(value)
        ? selected.filter((item) => item !== value)
        : [...selected, value]
      : [value]

    onChange(newSelected)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={className}>
        <Button
          ref={triggerRef}
          className="dark:bg-zinc-500 dark:hover:bg-zinc-600 bg-zinc-200 hover:bg-zinc-300 text-[--foreground] border-zinc-200 justify-between"
        >
          <span>{children}</span>
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[var(--trigger-width)]"
        style={{ width }}
      >
        {options.map((option) => (
          <FilterOption
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
