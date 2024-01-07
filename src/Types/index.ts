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