"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import { ButtonProps } from "@/types";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            submit: "bg-btn-submit text-white hover:bg-btn-submit-hover shadow-md font-semibold px-12",
        };

        return (
            <button
                className={cn(
                    "inline-flex items-center cursor-pointer justify-center rounded-sm px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";
