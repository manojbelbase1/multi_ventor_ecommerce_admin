"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

import { BreadcrumbItem } from "@/types";

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
    return (
        <nav
            className={cn("flex items-center text-sm text-muted-foreground", className)}
            aria-label="Breadcrumb"
        >
            <ol className="flex items-center gap-1">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-1">
                        {index > 0 && (
                            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" />
                        )}
                        {item.href && !item.isActive ? (
                            <Link
                                href={item.href}
                                className="hover:text-foreground transition-colors"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span
                                className={cn(
                                    item.isActive && "text-primary font-medium"
                                )}
                            >
                                {item.label}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
