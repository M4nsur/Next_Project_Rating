import {DetailedHTMLProps, HTMLAttributes } from 'react';


export interface iRating extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    rating: number
    isChange?: boolean
    setRating?: ((rating: number) => void)
}