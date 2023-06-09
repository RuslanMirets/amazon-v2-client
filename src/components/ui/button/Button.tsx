import cn from "clsx";
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: "orange" | "white";
}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	variant,
	...rest
}) => {
	return (
		<button
			className={cn(
				"rounded-xl font-medium shadow px-10 py-2",
				{ "text-white bg-primary": variant === "orange" },
				{ "text-primary bg-white": variant === "white" },
				className,
			)}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
