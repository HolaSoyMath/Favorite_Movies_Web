import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { tv } from "tailwind-variants";

export interface BadgeCardProps extends HTMLAttributes<HTMLDivElement> {
  text: string
  variant?: "year" | "category"
  className?: string
}

const badgeCardVariant = tv({
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

export function BadgeCard({ variant, text, className, ...props}: BadgeCardProps) {
  return (
    <Badge
      className={cn(badgeCardVariant({variant}), className)}
      {...props}
    >
      {text}
    </Badge>
  );
};