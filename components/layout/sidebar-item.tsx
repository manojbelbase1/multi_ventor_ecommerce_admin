"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { NavItem } from "@/types";
import { Button } from "@/components/ui/button";

interface SidebarItemProps {
    item: NavItem;
    isOpen: boolean;
    onToggle: () => void;
    pathname: string;
}

export function SidebarItem({ item, isOpen, onToggle, pathname }: SidebarItemProps) {
    const { t } = useI18n();
    const hasChildren = item.children && item.children.length > 0;

    // For items with children, check if any child is active
    // For items without children, check if this item is active
    const isActive = hasChildren
        ? item.children?.some((child) => pathname === child.href) || false
        : pathname === item.href || pathname.startsWith(item.href + "/");

    const translationKey = item.titleKey;

    if (hasChildren) {
        return (
            <div className="mb-0.5">
                <Button
                    variant="ghost"
                    onClick={onToggle}
                    className={cn(
                        "w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium transition-all rounded-none",
                        isActive
                            ? "bg-[#9333ea] text-white"
                            : "text-white"
                    )}
                >
                    <div className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 shrink-0 opacity-90" />
                        <span className="tracking-tight">{t(translationKey)}</span>
                    </div>
                    <ChevronDown
                        className={cn(
                            "w-4 h-4 shrink-0 transition-transform duration-300 opacity-80",
                            isOpen && "rotate-180"
                        )}
                    />
                </Button>

                <div
                    className={cn(
                        "overflow-hidden transition-all duration-300 ease-in-out bg-[#5000B8]",
                        isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                    )}
                >
                    <div className="py-0.5">
                        {item.children!.map((child) => {
                            const isChildActive = pathname === child.href;
                            return (
                                <Link
                                    key={child.href}
                                    href={child.href}
                                    className={cn(
                                        "relative block pl-12 pr-4 py-2 text-sm font-medium transition-all",
                                        isChildActive
                                            ? "text-white bg-[#a855f7]"
                                            : "text-white/80"
                                    )}
                                >
                                    {isChildActive && (
                                        <span className="absolute left-0 top-0 bottom-0 w-1 bg-white" />
                                    )}
                                    {t(child.titleKey)}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Link
            href={item.href}
            className={cn(
                "flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all mb-0.5",
                isActive
                    ? "bg-[#9333ea] text-white"
                    : "text-white"
            )}
        >
            <item.icon className="w-5 h-5 shrink-0 opacity-90" />
            <span className="tracking-tight">{t(translationKey)}</span>
        </Link>
    );
}
