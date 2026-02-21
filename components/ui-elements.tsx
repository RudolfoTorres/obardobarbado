import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "wood";
    size?: "sm" | "md" | "lg";
}

export const buttonVariants = {
    base: "inline-flex items-center justify-center rounded-sm transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none font-serif cursor-pointer",
    variant: {
        primary: "bg-bardo-purple text-parchment hover:bg-opacity-90",
        secondary: "bg-gold text-ink hover:bg-opacity-90",
        wood: "bg-wood text-parchment hover:bg-opacity-90",
        outline: "border-2 border-bardo-purple text-bardo-purple hover:bg-bardo-purple hover:text-parchment",
        ghost: "hover:bg-parchment-texture text-ink",
    },
    size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-6 py-2.5 text-base",
        lg: "px-8 py-3 text-lg font-bold",
    },
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    buttonVariants.base,
                    buttonVariants.variant[variant],
                    buttonVariants.size[size],
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <span className={cn("px-2 py-0.5 rounded-full bg-parchment border border-wood/30 text-wood text-xs font-sans", className)}>
        {children}
    </span>
);
