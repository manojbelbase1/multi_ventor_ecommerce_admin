"use client";

import { cn } from "@/lib/utils";

import { StatusBadgeProps } from "@/types";

export function StatusBadge({ status, className }: StatusBadgeProps) {
    const isAvailable =
        status.toLowerCase() === "available" ||
        status.toLowerCase() === "active" ||
        status.toLowerCase() === "उपलब्ध";

    return (
        <span
            className={cn(
                "inline-flex items-center gap-2 text-[13px] font-medium",
                isAvailable ? "text-emerald-500" : "text-red-500",
                className
            )}
        >
            <span
                className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    isAvailable ? "bg-emerald-500" : "bg-red-500"
                )}
            />
            {status}
        </span>
    );
}
