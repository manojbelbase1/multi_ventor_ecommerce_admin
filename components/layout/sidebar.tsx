"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { sidebarNavItems } from "@/config/navigation";
import { Button } from "@/components/ui/button";
import { SidebarItem } from "./sidebar-item";
import Link from "next/link";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
    const pathname = usePathname();
    const [openGroup, setOpenGroup] = React.useState<string | null>(() => {
        if (pathname.includes("/orders")) return "orders.order_management";
        if (pathname.includes("/products")) return "products.product_management";
        return null; // Don't open any group by default
    });

    const toggleGroup = (titleKey: string) => {
        setOpenGroup((prev) => (prev === titleKey ? null : titleKey));
    };

    return (
        <>
            {/* Mobile Overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity duration-300",
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={onClose}
            />

            {/* Sidebar */}
            <aside
                className={cn(
                    "w-64 bg-[#5000B8] text-white shrink-0 flex flex-col h-screen fixed left-0 top-0 z-50 transition-all duration-300 shadow-xl",
                    "lg:translate-x-0",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                {/* Logo Section */}
                <div className="pt-6 pb-6 flex items-center justify-between px-4 shrink-0">
                    <Link href="/" className="flex items-center gap-1.5">
                        <div className="w-7 h-7 bg-[#FFBF00] rounded flex items-center justify-center">
                            <span className="text-[#5000B8] text-sm font-bold">M</span>
                        </div>
                        <span className="text-base font-semibold text-white">Vendor Ecommerce</span>
                    </Link>

                    {/* Mobile Close Button */}
                    <Button
                        variant="ghost"
                        onClick={onClose}
                        className="lg:hidden p-1 text-white/70 hover:text-white"
                    >
                        <X className="w-5 h-5" />
                    </Button>
                </div>

                <div className="h-px w-full bg-white/10" />

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto scrollbar-thin pb-20">
                    {sidebarNavItems.map((item) => (
                        <SidebarItem
                            key={item.titleKey}
                            item={item}
                            isOpen={openGroup === item.titleKey}
                            onToggle={() => toggleGroup(item.titleKey)}
                            pathname={pathname}
                        />
                    ))}
                </nav>
            </aside>
        </>
    );
}
