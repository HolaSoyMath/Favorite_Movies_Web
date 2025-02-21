import React, { HTMLAttributes } from "react";
import { tv } from "tailwind-variants";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";

export interface NavBarButtonProps
    extends HTMLAttributes<HTMLButtonElement> {
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
    text: string
    color?: "primary"
    className?: string
}

const NavBarButtonVariants = tv({
    base: "flex flex-row h-14 text-lg font-semibold",
    variants: {
        color:{
            primary: 'bg-transparent transition-all duration-300 ease-in-out hover:bg-[#343A40]',
        }
    },
    defaultVariants:{
        color: "primary"
    }
})

export function NavBarButton ({icon, text, className, color="primary", ...props}: NavBarButtonProps){

    const Icon = icon

    return(
        <Button className={cn(NavBarButtonVariants({color}), className, "text-lg")} {...props}>
            <Icon className="size-32 text-white !h-5 !w-5" />{text}
        </Button>
    )
}