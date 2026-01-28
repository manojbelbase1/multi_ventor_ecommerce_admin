"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import { SelectProps } from "@/types";

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, label, error, required, options, placeholder, ...props }, ref) => {
        return (
            <div className="w-full space-y-1.5">
                {label && (
                    <label className="text-sm font-medium text-foreground">
                        {label} {required && <span className="text-red-500">*</span>}
                    </label>
                )}
                <div className="relative">
                    <select
                        className={cn(
                            "flex h-10 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-50 transition-all appearance-none cursor-pointer pr-10",
                            error && "border-red-500 focus-visible:ring-red-500/20",
                            className
                        )}
                        ref={ref}
                        {...props}
                    >
                        <option value="" disabled>
                            {placeholder || "Select an option"}
                        </option>
                        {options.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-muted-foreground">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
                {error && <p className="text-xs text-red-500 ml-1">{error}</p>}
            </div>
        );
    }
);
Select.displayName = "Select";
