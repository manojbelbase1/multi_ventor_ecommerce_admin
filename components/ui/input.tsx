"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import { InputProps } from "@/types";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, required, ...props }, ref) => {
        return (
            <div className="w-full space-y-1.5">
                {label && (
                    <label className="text-sm font-medium text-foreground">
                        {label} {required && <span className="text-red-500">*</span>}
                    </label>
                )}
                <input
                    className={cn(
                        "flex h-10 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-50 transition-all",
                        error && "border-red-500 focus-visible:ring-red-500/20",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {error && <p className="text-xs text-red-500 ml-1">{error}</p>}
            </div>
        );
    }
);
Input.displayName = "Input";
