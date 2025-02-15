import React, { LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { tv } from "tailwind-variants";

export interface TextCardProps extends LabelHTMLAttributes<HTMLLabelElement> {
  variant: "title" | "description"
  className?: string
}

const textCardVariant = tv({
  base: "font-semibold px-4 text-[var(--foreground)] block ",
  variants:{
    variant:{
      title: "text-xl h-[30px]",
      description: "text-base line-clamp-3 overflow-hidden h-[70px]"
    }
  },
  defaultVariants: {
    variant: "title"
  }
})

export function TextCard ({variant, className, children, ...props}: TextCardProps) {
  return (
      <Label className={cn(textCardVariant({variant}), className)} {...props}>{children}</Label>
  );
}

TextCard.displayName = "TextCard";