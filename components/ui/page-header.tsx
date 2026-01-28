"use client";

import * as React from "react";
import { Button } from "./button";
import { Breadcrumb } from "./breadcrumb";
import { Search, Filter, ArrowUpDown, Plus, ChevronDown, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import { useRouter } from "next/navigation";
import { PageHeaderProps, BreadcrumbItem } from "@/types";

import { usePathname } from "next/navigation";
import { sidebarNavItems } from "@/config/navigation";

export function PageHeader({
    title,
    breadcrumbs: manualBreadcrumbs,
    showSearch = true,
    showFilter = true,
    showSort = true,
    showBackButton = false,
    addButton,
    className,
    children,
}: PageHeaderProps) {
    const { t } = useI18n();
    const router = useRouter();
    const pathname = usePathname();

    const breadcrumbs = React.useMemo(() => {
        if (manualBreadcrumbs) return manualBreadcrumbs;

        const paths = pathname.split("/").filter(Boolean);
        const items: BreadcrumbItem[] = [{ label: t("sidebar.dashboard"), href: "/dashboard" }];

        let currentPath = "";
        paths.forEach((segment, index) => {
            currentPath += `/${segment}`;

            if (segment === "dashboard") return;

            let label = "";
            let href: string | undefined = currentPath;
            let found = false;

            // Try to match with sidebar items
            sidebarNavItems.forEach(item => {
                if (item.href === currentPath) {
                    label = t(item.titleKey);
                    found = true;
                }
                item.children?.forEach(child => {
                    if (child.href === currentPath) {
                        label = t(child.titleKey);
                        found = true;
                    }
                });
            });

            // Special handling for leaf pages like 'add' or 'edit'
            if (!found) {
                if (segment === "add") {
                    label = t("products.add_product");
                    found = true;
                } else if (segment === "edit") {
                    label = t("common.edit");
                    found = true;
                } else if (segment === "list") {
                    // Usually redundant if parent is descriptive, but keep for completeness
                    label = t("products.product_list");
                    found = true;
                } else {
                    label = segment.charAt(0).toUpperCase() + segment.slice(1);
                }
            }

            if (found && !currentPath.endsWith("/list") && !currentPath.endsWith("/add") && !currentPath.endsWith("/edit")) {
                const item = sidebarNavItems.find(i => i.href === currentPath);
                if (item?.children?.[0]) {
                    href = item.children[0].href;
                }
            }

            items.push({
                label,
                href,
                isActive: index === paths.length - 1
            });
        });

        return items;
    }, [manualBreadcrumbs, pathname, t]);

    return (
        <div className={cn("mb-6", className)}>
            {/* Header Content */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                {/* Title & Breadcrumbs */}
                <div className="shrink-0">
                    <h1 className="text-xl font-bold text-foreground">{title}</h1>
                    <Breadcrumb items={breadcrumbs} className="mt-0.5 text-[13px]" />
                </div>

                {/* Search & Actions */}
                <div className="flex flex-wrap items-center gap-3 lg:flex-nowrap">
                    {/* Search Bar */}
                    {showSearch && (
                        <div className="relative flex-1 min-w-[240px] lg:min-w-[320px]">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                            <input
                                type="text"
                                placeholder={t("common.search_placeholder") || "Search here..."}
                                className="h-10 w-full pl-10 pr-4 rounded-sm border border-border bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary/20 placeholder:text-muted-foreground/60 transition-all"
                            />
                        </div>
                    )}

                    {/* Filter & Sort Buttons */}
                    <div className="flex items-center gap-2">
                        {showFilter && (
                            <Button
                                variant="outline"
                                className="h-10 px-4 inline-flex items-center gap-2.5 text-[13px] font-medium text-foreground bg-background hover:bg-accent border-border"
                            >
                                <Filter className="w-4 h-4" />
                                <span>{t("common.filter")}</span>
                                <ChevronDown className="w-4 h-4 ml-1 opacity-50" />
                            </Button>
                        )}

                        {showSort && (
                            <Button
                                variant="outline"
                                className="h-10 px-4 inline-flex items-center gap-2.5 text-[13px] font-medium text-foreground bg-background hover:bg-accent border-border"
                            >
                                <ArrowUpDown className="w-4 h-4 rotate-0" />
                                <span>{t("common.sorts")}</span>
                                <ChevronDown className="w-4 h-4 ml-1 opacity-50" />
                            </Button>
                        )}
                    </div>

                    {/* Add Product Button */}
                    {addButton && (
                        <Button
                            onClick={addButton.onClick}
                            className="h-10 px-4 inline-flex items-center gap-2 bg-primary text-white text-[13px] font-medium transition-transform active:scale-[0.98]"
                        >
                            <Plus className="w-4 h-4" />
                            <span>{addButton.label}</span>
                        </Button>
                    )}


                </div>
            </div>

            {children}
        </div>
    );
}
