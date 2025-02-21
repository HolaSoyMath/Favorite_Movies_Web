import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { tv } from "tailwind-variants";

export interface TextCardProps extends HTMLAttributes<HTMLParagraphElement> {
  variant: 'title' | 'description'
  fontSize?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const textCardVariant = tv({
  base: 'font-semibold text-[--foreground] block',
  variants: {
    variant: {
      title: 'h-[30px] ',
      description: 'overflow-hidden h-[70px]',
    },
    fontSize: {
      xxs: 'text-[10px]',
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
  },
  defaultVariants: {
    variant: 'title',
    fontSize: "md"
  },
})

export function TextCard ({variant, fontSize, className, children, ...props}: TextCardProps) {
  return (
    <p
      className={cn(textCardVariant({ variant, fontSize }), className)}
      {...props}

    >
      {children}
    </p>
  )
}