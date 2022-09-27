import { DetailedHTMLProps, HTMLAttributes, ReactNode } from'react';

//мы экстендим DetailedHTMLProps с вложенными дженериками для типизации кнопки 
export interface tagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    size: "s" | "m"
    color?: "ghost" | "greenLight" | "main" | "red" | "grey"
    href?: string
}