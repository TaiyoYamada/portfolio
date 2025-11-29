import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
}

export const Card = ({ children, className }: CardProps) => {
    return (
        <div
            className={cn(
                "glass rounded-xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20",
                className
            )}
        >
            {children}
        </div>
    );
};
