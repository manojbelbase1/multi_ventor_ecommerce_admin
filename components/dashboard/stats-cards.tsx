"use client";

import { useI18n } from "@/lib/i18n";
import { ArrowUpRight } from "lucide-react";

interface StatsCardProps {
    titleKey: string;
    value: string;
    trend?: string;
    trendType?: "up" | "down";
    timeframeKey?: string;
}

function StatsCard({ titleKey, value, timeframeKey }: StatsCardProps) {
    const { t } = useI18n();

    return (
        <div className="bg-card rounded-lg p-5 border border-border flex flex-col justify-between h-[130px]">
            <div className="flex justify-between items-start">
                <span className="text-muted-foreground font-medium text-sm">{t(titleKey)}</span>
                <div className="bg-primary/10 p-1.5 rounded">
                    <ArrowUpRight className="w-4 h-4 text-primary" />
                </div>
            </div>
            <div>
                <div className="text-2xl font-semibold text-foreground">{value}</div>
                <div className="text-muted text-xs mt-1">
                    {timeframeKey ? t(timeframeKey) : "From Dec 01,2024 - Jan 30, 2025"}
                </div>
            </div>
        </div>
    );
}

export function StatsCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <StatsCard
                titleKey="dashboard.gross_revenue"
                value="Rs. 126.5k"
            />
            <StatsCard
                titleKey="dashboard.total_order"
                value="Rs. 126.5k"
            />
            <StatsCard
                titleKey="dashboard.total_order"
                value="1545"
            />
            <StatsCard
                titleKey="dashboard.customers"
                value="1545"
            />
        </div>
    );
}
