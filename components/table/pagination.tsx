"use client";

import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import { PaginationProps } from "@/types";
import { Button } from "@/components/ui/button";

export function Pagination({
    currentPage,
    totalPages,
    limit,
    totalItems,
    onPageChange,
    className,
}: PaginationProps) {
    const { t } = useI18n();

    if (totalPages <= 0) return null;

    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const maxVisible = 5;

        if (totalPages <= maxVisible + 2) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 3; i++) pages.push(i);
                pages.push("...");
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push("...");
                for (let i = totalPages - 2; i <= totalPages; i++) pages.push(i);
            } else {
                pages.push(1);
                pages.push("...");
                pages.push(currentPage);
                pages.push("...");
                pages.push(totalPages);
            }
        }
        return pages;
    };

    return (
        <div
            className={cn(
                "flex items-center justify-between px-4 py-3 text-sm border-t border-border bg-card/50",
                className
            )}
        >
            <div className="text-muted-foreground font-medium">
                {t("common.showing") || "Showing"} {Math.min(limit, totalItems)} {t("common.of") || "of"} {totalItems} {t("common.results") || "results"}
            </div>
            <div className="flex items-center gap-1.5">
                {/* First */}
                <Button
                    variant="ghost"
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(1)}
                    className="w-8 h-8 p-0 rounded-sm hover:bg-accent disabled:opacity-40 transition-all active:scale-90"
                    title="First"
                >
                    <Icon icon="mdi:chevron-double-left" className="h-4.5 w-4.5" />
                </Button>

                {/* Previous */}
                <Button
                    variant="ghost"
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                    className="w-8 h-8 p-0 rounded-sm hover:bg-accent disabled:opacity-40 transition-all active:scale-90"
                    title="Previous"
                >
                    <Icon icon="mdi:chevron-left" className="h-4.5 w-4.5" />
                </Button>

                {/* Page Numbers */}
                <div className="flex items-center gap-1 mx-1">
                    {getPageNumbers().map((page, idx) =>
                        page === "..." ? (
                            <span
                                key={`ellipsis-${idx}`}
                                className="w-8 h-8 flex items-center justify-center text-muted-foreground opacity-50"
                            >
                                ...
                            </span>
                        ) : (
                            <Button
                                key={page}
                                variant={currentPage === page ? "primary" : "ghost"}
                                onClick={() => onPageChange(page as number)}
                                className={cn(
                                    "w-8 h-8 p-0 text-[13px] font-semibold transition-all active:scale-90",
                                    currentPage === page
                                        ? "bg-primary text-primary-foreground shadow-sm"
                                        : "text-muted-foreground hover:bg-accent/80 hover:text-foreground"
                                )}
                            >
                                {page}
                            </Button>
                        )
                    )}
                </div>

                {/* Next */}
                <Button
                    variant="ghost"
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                    className="w-8 h-8 p-0 rounded-sm hover:bg-accent disabled:opacity-40 transition-all active:scale-90"
                    title="Next"
                >
                    <Icon icon="mdi:chevron-right" className="h-4.5 w-4.5" />
                </Button>

                {/* Last */}
                <Button
                    variant="ghost"
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(totalPages)}
                    className="w-8 h-8 p-0 rounded-sm hover:bg-accent disabled:opacity-40 transition-all active:scale-90"
                    title="Last"
                >
                    <Icon icon="mdi:chevron-double-right" className="h-4.5 w-4.5" />
                </Button>
            </div>
        </div>
    );
}
