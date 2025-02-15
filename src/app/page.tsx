"use client"

import { useState } from "react";

//Rating
import { CardTop } from "@/components/molecules/TopMovieCard";
import { InfosMovieCard } from "@/components/molecules/InfosMovieCard";
import { ScoreAndFavorite } from "@/components/molecules/ScoreAndFavorite";
import { CardMovie } from "@/components/organisms/CardMovie";

export default function Home() {
  const [ratingStar, setRatingStar] = useState(0)
  const [ratingHeart, setRatingHeart] = useState(0)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <CardTop genre="Action/Adventure" year="1999" />
      <InfosMovieCard title="SHREK 3" description="Com saudade do tempo em que era um verdadeiro ogro, Shrek assina um contrato enfeitiçado com Rumpelstiltskin e de repente puf! Em um instante, tudo e todos se transformam. De repente Burro não se lembra de seu melhor amigo, Fiona agora é uma valente princesa guerreira e Gato de Botas é só um gato gordo! Juntos" />
      
      teste Star: {ratingStar}
      teste Heart: {ratingHeart}
      <div style={{display: "flex"}}>
        <ScoreAndFavorite valueFavorite={ratingHeart} functionFavorite={setRatingHeart} valueRating={ratingStar} functionRating={setRatingStar} />
      </div>

      <CardMovie
        genre="Action/Adventure"
        year="1999"
        title="SHREK 3"
        description="Com saudade do tempo em que era um verdadeiro ogro, Shrek assina um contrato enfeitiçado com Rumpelstiltskin e de repente puf! Em um instante, tudo e todos se transformam. De repente Burro não se lembra de seu melhor amigo, Fiona agora é uma valente princesa guerreira e Gato de Botas é só um gato gordo! Juntos"
        functionRating={setRatingStar}
        valueFavorite={ratingStar}
        functionFavorite={setRatingHeart}
        valueRating={ratingHeart}      
      />
    </div>
  );
}
