"use client";

import { useI18n } from "@/lib/i18n";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
    { name: "Smart Phone", value: 30, color: "hsl(var(--primary))" },
    { name: "PC Components", value: 15, color: "#FFDF00" },
    { name: "Laptops", value: 25, color: "#FF8A00" },
    { name: "Camera", value: 20, color: "hsl(var(--secondary))" },
    { name: "PC Accessories", value: 10, color: "#FF5C5C" },
];

export function PerformanceChart() {
    const { t } = useI18n();

    return (
        <div className="bg-card rounded-lg p-6 border border-border h-[400px] flex flex-col">
            <h3 className="text-base font-semibold text-foreground mb-6">{t("dashboard.sales_performance")}</h3>

            <div className="flex-1 relative min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="70%"
                            innerRadius="65%"
                            outerRadius="100%"
                            startAngle={180}
                            endAngle={0}
                            paddingAngle={2}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                {/* Center text if needed */}
            </div>

            <div className="grid grid-cols-2 gap-y-4 gap-x-6 mt-8">
                {data.map((item) => (
                    <div key={item.name} className="flex items-center gap-3">
                        <div
                            className="w-4 h-4 rounded-sm shrink-0"
                            style={{ backgroundColor: item.color }}
                        />
                        <span className="text-muted-foreground text-sm font-medium truncate">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
