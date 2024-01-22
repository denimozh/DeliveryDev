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
  addOn: {title: string; additionalPrice: number}[]
}

export type OrderType = {
  id: string;
  userEmail: string;
  price: number;
  products: CartItemType[];
  status: string;
  createdAt: Date;
  intent_id?: String;
};

export type CartItemType = {
  id: string;
  title: string;
  img: string;
  price: number;
  optionTitle: string;
  quantity: number;
}