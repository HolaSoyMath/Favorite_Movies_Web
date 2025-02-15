import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { tv } from "tailwind-variants";

export interface InfoCardTopProps extends HTMLAttributes<HTMLDivElement> {
  text: string
  variant?: "year" | "category"
  className?: string
}

const infoCardVariant = tv({
  base: "rounded-full font-semibold text-xl px-4 text-white",
  variants: {
    variant: {
      year: "bg-zinc-500 hover:bg-zinc-500",
      category: "bg-blue-400 hover:bg-blue-400"
    }
  },
  defaultVariants:{
    variant: "year"
  }
})

export function InfoCardTop({ variant, text, className, ...props}: InfoCardTopProps) {
  return (
    <Badge
      className={cn(infoCardVariant({variant}), className)}
      {...props}
    >
      {text}
    </Badge>
  );
};