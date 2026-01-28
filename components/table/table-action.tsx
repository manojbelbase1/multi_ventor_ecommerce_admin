"use client";

import { Button } from "@/components/ui/button";
import { TableActionProps } from "@/types";
import { Icon } from "@iconify/react";

export function TableAction({ onView, onEdit, onDelete }: TableActionProps) {
    return (
        <div className="flex items-center">
            {onView && (
                <Button
                    variant="ghost"
                    onClick={onView}
                    className="h-8 w-8 p-0 rounded-sm hover:bg-accent text-orange-400 border border-transparent hover:border-border transition-all"
                    title="View"
                >
                    <Icon icon="mdi:eye" width={15} height={15} />
                </Button>
            )}
            {onEdit && (
                <Button
                    variant="ghost"
                    onClick={onEdit}
                    className="h-8 w-8 p-0 rounded-sm hover:bg-accent text-emerald-500 border border-transparent hover:border-border transition-all"
                    title="Edit"
                >
                    <Icon icon="mdi:pencil" width={15} height={15} />
                </Button>
            )}
            {onDelete && (
                <Button
                    variant="ghost"
                    onClick={onDelete}
                    className="h-8 w-8 p-0 rounded-sm hover:bg-accent text-red-500 border border-transparent hover:border-border transition-all"
                    title="Delete"
                >
                    <Icon icon="mdi:delete" width={15} height={15} />
                </Button>
            )}
        </div>
    );
}
