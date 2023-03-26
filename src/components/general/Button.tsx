import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	title: string
}

function Button({ title, ...others }: Props) {
	return <button {...others}>{title}</button>;
}

export default Button;
