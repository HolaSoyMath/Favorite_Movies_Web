import React, { HTMLAttributes } from "react";
import { BadgeCard } from "../atoms/BadgeCard";

export interface CardTopProps extends HTMLAttributes<HTMLDivElement> {
  genre: string
  year: string
  className?: string
}

export function CardTop ({ genre, year, ...props }: CardTopProps) {
  return (
      <div className="not-sr-only flex place-content-between px-[15px]" {...props} >
        <BadgeCard text={genre} variant="category"/>
        <BadgeCard text={year} variant="year" />
      </div>
  );
}
