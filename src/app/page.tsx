"use client"

import { useState } from "react";
import React from 'react'

//Rating
import { CardMovie } from "@/components/organisms/CardMovie";
import { InfosMovieCard } from "@/components/molecules/InfosMovieCard";

export default function Home() {
  const [ratingStar, setRatingStar] = useState(0)
  const [ratingHeart, setRatingHeart] = useState(0)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <InfosMovieCard title="SHREK 3" description="Com saudade do tempo em que era um verdadeiro ogro, Shrek assina um contrato enfeitiçado com Rumpelstiltskin e de repente puf! Em um instante, tudo e todos se transformam. De repente Burro não se lembra de seu melhor amigo, Fiona agora é uma valente princesa guerreira e Gato de Botas é só um gato gordo! Juntos" />
      {/* 
      teste Star: {ratingStar}
      teste Heart: {ratingHeart}
      <div style={{display: "flex"}}>
        <ScoreAndFavorite 
          onFavoriteChange={setRatingHeart} 
          favoriteValue={ratingHeart} 
          onRatingChange={setRatingStar} 
          ratingValue={ratingStar} />
      </div> */}

      <CardMovie
        idMovie="1123"
        genre="Action/Adventure"
        year="1999"
        title="SHREK 3"
        description="Com saudade do tempo em que era um verdadeiro ogro, Shrek assina um contrato enfeitiçado com Rumpelstiltskin e de repente puf! Em um instante, tudo e todos se transformam. De repente Burro não se lembra de seu melhor amigo, Fiona agora é uma valente princesa guerreira e Gato de Botas é só um gato gordo! Juntos"
        onRatingChange={setRatingStar}
        ratingValue={ratingStar}      
        onFavoriteChange={setRatingHeart}
        favoriteValue={ratingHeart}
        className="w-[200px]"
      />
    </div>
  );
}
