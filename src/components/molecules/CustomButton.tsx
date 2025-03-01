import React from 'react'
import { LucideProps } from 'lucide-react'
import { HTMLAttributes } from 'react'
import { Button } from '../ui/button'
import { LabelIcon } from './LabelIcon'

export interface CustomButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon?: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >
  text?: string
}

export function CustomButton(params: CustomButtonProps) {
  return (
    <Button className="align-middle justify-center rounded-full h-full">
      <LabelIcon icon={params.icon}>{params.text}</LabelIcon>
    </Button>
  )
}
