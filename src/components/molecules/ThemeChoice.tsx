import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from '../ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeChoice() {
	const { setTheme } = useTheme()

  return (
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
  )
}
