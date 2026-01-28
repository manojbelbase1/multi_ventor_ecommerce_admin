"use client";

import { Icon } from "@iconify/react";
import { Pagination } from "./pagination";
import { cn } from "@/lib/utils";
import { MasterTableProps } from "@/types";

export function MasterTable({
    columns,
    rows,
    loading = false,
    pagination,
    className,
    emptyMessage = "No data available",
    showCheckbox = true,
}: MasterTableProps) {
    return (
        <div
            className={cn(
                "overflow-hidden rounded-sm border border-border bg-card",
                className
            )}
        >
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="border-b border-border bg-accent/40">
                        <tr>
                            {showCheckbox && (
                                <th className="w-10 px-4 py-3">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 rounded-sm border-border accent-primary"
                                    />
                                </th>
                            )}
                            {columns.map((col, index) => (
                                <th
                                    key={index}
                                    className={cn(
                                        "px-4 py-3 font-medium text-muted-foreground whitespace-nowrap text-[13px]",
                                        col.className
                                    )}
                                >
                                    {col.title}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {loading ? (
                            <tr>
                                <td
                                    colSpan={columns.length + (showCheckbox ? 1 : 0)}
                                    className="px-4 py-8 text-center text-muted-foreground"
                                >
                                    <div className="flex justify-center items-center gap-2 text-[13px]">
                                        <Icon
                                            icon="svg-spinners:180-ring-with-bg"
                                            className="h-5 w-5"
                                        />
                                        Loading data...
                                    </div>
                                </td>
                            </tr>
                        ) : rows?.length > 0 ? (
                            rows.map((row, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className="transition-colors"
                                >
                                    {showCheckbox && (
                                        <td className="px-4 py-3">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 rounded border-border accent-primary"
                                            />
                                        </td>
                                    )}
                                    {columns.map((col, colIndex) => (
                                        <td
                                            key={colIndex}
                                            className={cn(
                                                "px-4 py-3 text-foreground",
                                                col.className
                                            )}
                                        >
                                            {row[col.key]}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={columns.length + (showCheckbox ? 1 : 0)}
                                    className="px-4 py-8 text-center text-muted-foreground"
                                >
                                    {emptyMessage}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {pagination && <Pagination {...pagination} />}
        </div>
    );
}
