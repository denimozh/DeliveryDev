import { MouseEventHandler } from "react";
export interface ButtonProps {
    text: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
    iconStyle?: string,
    imgStyle?: string
}

export type MenuType = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  color?: string;
}[];

export type ProductType = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  protiens: number;
  fat: number;
  carbs: number;
  calories: number;
  weight: number;
  addOn: {title: string; additionalPrice: number}
}