"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from "recharts";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const data = [
    { name: "Jan", value: 30 },
    { name: "Feb", value: 45 },
    { name: "Mar", value: 70 },
    { name: "Apr", value: 45 },
    { name: "May", value: 100 },
    { name: "Jun", value: 30 },
    { name: "Jul", value: 50 },
    { name: "Aug", value: 70 },
    { name: "Sep", value: 45 },
    { name: "Oct", value: 90 },
    { name: "Nov", value: 50 },
    { name: "Dec", value: 45 },
];

export function ActivityChart() {
    const { t } = useI18n();
    const [type, setType] = useState<"income" | "expenses">("income");

    return (
        <div className="bg-card rounded-lg p-6 border border-border h-[400px] flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-6 bg-primary rounded-full" />
                        <h3 className="text-base font-semibold text-foreground">{t("dashboard.transaction_activity")}</h3>
                    </div>
                    <div className="text-2xl font-bold text-foreground mt-1">
                        <span className="text-muted font-medium text-lg mr-1">Rs.</span> 126.5k
                    </div>
                </div>

                <div className="flex gap-3 items-center">
                    <div className="bg-accent p-1 rounded-full flex">
                        <button
                            onClick={() => setType("income")}
                            className={cn(
                                "px-5 py-1 rounded-full text-xs font-semibold transition-all",
                                type === "income" ? "bg-card text-primary shadow-sm" : "text-muted-foreground"
                            )}
                        >
                            {t("dashboard.income")}
                        </button>
                        <button
                            onClick={() => setType("expenses")}
                            className={cn(
                                "px-5 py-1 rounded-full text-xs font-semibold transition-all",
                                type === "expenses" ? "bg-secondary text-white shadow-sm" : "text-muted-foreground"
                            )}
                        >
                            {t("dashboard.expenses")}
                        </button>
                    </div>

                    <button className="flex items-center gap-1.5 bg-secondary text-white px-3 py-1.5 rounded text-xs font-semibold">
                        {t("dashboard.this_year")}
                        <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>

            <div className="flex-1 w-full min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                        <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 13, fill: "hsl(var(--muted-foreground))", fontWeight: 500 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 13, fill: "hsl(var(--muted-foreground))", fontWeight: 500 }}
                            tickFormatter={(value) => `${value}K`}
                        />
                        <Tooltip
                            cursor={{ fill: 'hsl(var(--accent))' }}
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', backgroundColor: 'hsl(var(--card))', color: 'hsl(var(--card-foreground))' }}
                        />
                        <Bar
                            dataKey="value"
                            radius={[6, 6, 6, 6]}
                            barSize={32}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.value === 100 ? "hsl(var(--primary))" : "hsla(var(--primary) / 0.15)"} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
