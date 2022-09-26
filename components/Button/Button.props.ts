import { ButtonHTMLAttributes, DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from'react';

//мы экстендим DetailedHTMLProps с вложенными дженериками для типизации кнопки 
export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    appearance: "primary" | "ghost";
    arrow?: "down" | "right" | "none"
}