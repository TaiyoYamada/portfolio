import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    children: ReactNode;
}

export const Button = ({
    variant = "primary",
    className,
    children,
    ...props
}: ButtonProps) => {
    const variants = {
        primary: "bg-primary text-white hover:bg-primary/80 shadow-[0_0_15px_rgba(124,58,237,0.5)]",
        secondary: "bg-secondary text-white hover:bg-secondary/80",
        outline: "border border-primary text-primary hover:bg-primary/10",
    };

    return (
        <button
            className={cn(
                "px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 active:scale-95",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};
