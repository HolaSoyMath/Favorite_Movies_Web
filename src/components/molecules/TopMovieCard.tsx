import React, { HTMLAttributes } from "react";
import { InfoCardTop } from "../atoms/InfoCardTop";

export interface TopMovieCardProps extends HTMLAttributes<HTMLDivElement> {
  genre: string
  year: string
  className?: string
}

export function CardTop ({ genre, year, ...props }: TopMovieCardProps) {
  return (
      <div className="not-sr-only flex place-content-between px-[15px]" {...props} style={{width: "400px"}}>
        <InfoCardTop text={genre} variant="category"/>
        <InfoCardTop text={year} variant="year" />
      </div>
  );
}
