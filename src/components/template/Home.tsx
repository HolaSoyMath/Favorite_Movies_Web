import React from 'react'
import CarouselCardMovie from "../organisms/CarouselCardMovie";
import HighlightFilm from "../organisms/HighlightFilm";
import NavBar from "../organisms/NavBar";

export function HomePage() {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <HighlightFilm
          urlPosterImg="/mbYQLLluS651W89jO7MOZcLSCUw.jpg"
          idMovie="76600"
          nameMovie="Avatar: The Way of Water"
          description="12 anos depois de explorar Pandora e se juntar aos Na'vi, Jake Sully formou uma família com Neytiri e se estabeleceu entre os clãs do novo mundo. Porém, a paz não durará para sempre."
          trailerUrl="mBrl8b-pVdw"
        />
        <div className="px-12 w-full mt-3">
          <CarouselCardMovie className="px-10"></CarouselCardMovie>
        </div>
      </main>
    </>
  )
}
