"use client";

import * as React from "react";
import { AlertCircle, X } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

interface DeleteModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title?: string;
    description?: string;
    itemName?: string;
    isPending?: boolean;
}

export function DeleteModal({
    isOpen,
    onClose,
    onConfirm,
    title,
    description,
    itemName,
    isPending = false,
}: DeleteModalProps) {
    const { t } = useI18n();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-md bg-card rounded-sm border border-border shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                    <div className="flex items-center gap-2 text-red-500">
                        <AlertCircle className="w-5 h-5" />
                        <h3 className="font-semibold text-foreground">
                            {title || t("common.delete_confirm_title") || "Confirm Deletion"}
                        </h3>
                    </div>
                    <Button
                        variant="ghost"
                        onClick={onClose}
                        className="p-1 h-8 w-8 rounded-sm text-muted-foreground transition-all hover:bg-accent/80 active:scale-95"
                    >
                        <X className="w-4 h-4" />
                    </Button>
                </div>

                {/* Body */}
                <div className="p-6">
                    <p className="text-sm text-muted-foreground">
                        {description || t("common.delete_confirm_desc") || "Are you sure you want to delete this item? This action cannot be undone."}
                    </p>
                    {itemName && (
                        <div className="mt-3 p-3 bg-red-50 border border-red-100 rounded-sm">
                            <span className="text-sm font-medium text-red-700">{itemName}</span>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-end gap-3 p-4 bg-accent/30 border-t border-border">
                    <Button
                        variant="ghost"
                        onClick={onClose}
                        className="h-9 text-xs font-semibold"
                        disabled={isPending}
                    >
                        {t("common.cancel") || "Cancel"}
                    </Button>
                    <Button
                        variant="submit"
                        onClick={onConfirm}
                        className="h-9 bg-red-500 hover:bg-red-600 border-red-500 hover:border-red-600 text-xs font-semibold px-6"
                        disabled={isPending}
                    >
                        {isPending ? t("common.deleting") || "Deleting..." : t("common.delete") || "Delete"}
                    </Button>
                </div>
            </div>
        </div>
    );
}
