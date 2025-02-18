import { Heart, InputProps, Rating, RoundedStar } from "@smastrom/react-rating"
import { HTMLAttributes } from "react";
import '@smastrom/react-rating/style.css'
import { cn } from "@/lib/utils";
import React from 'react'

type DivPropsWithoutOnChange = Omit<HTMLAttributes<HTMLDivElement>, "onChange">;

export interface RatingProps 
    extends InputProps {
    type: "star" | "heart"
    value: number
    quantity?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    className?: string 
}

export interface ItemStylesProps{
    itemShapes: typeof RoundedStar | typeof Heart,
    activeFillColor: string,
    inactiveFillColor: string,
    boxSize?: string
}

const itemStyles: Record<"star" | "heart", ItemStylesProps> = {
    star: {
        itemShapes: RoundedStar,
        activeFillColor: '#FFB700',
        inactiveFillColor: '#FBF1A9',
        boxSize: "100px"
    },
    heart: {
        itemShapes: Heart,
        activeFillColor: '#FF7374',
        inactiveFillColor: '#FFD7EF',
        boxSize: "40px"
    }
}

const ratingsVariants = {
    variant:{
        star: "h-[20px] w-[90px]",
        heart: "h-[20px] w-[20px]"
    }
}

export function Ratings ({value, type, quantity = 5, className, ...props}: RatingProps) {
    
    return(
        <Rating value={value} itemStyles={itemStyles[type]} items={quantity} 
        className={cn(ratingsVariants.variant[type], className)} {...props} />
    )
}