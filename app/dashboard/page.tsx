"use client";

import { PageHeader } from "@/components/ui/page-header";
import { useI18n } from "@/lib/i18n";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { ActivityChart } from "@/components/dashboard/activity-chart";
import { PerformanceChart } from "@/components/dashboard/performance-chart";
import { DashboardTables } from "@/components/dashboard/dashboard-tables";

export default function DashboardPage() {
    const { t } = useI18n();

    return (
        <>
            <PageHeader
                title={t("dashboard.title")}
                breadcrumbs={[
                    { label: t("sidebar.dashboard"), href: "/dashboard" }
                ]}
            />

            <div className="mt-6">
                <StatsCards />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                    <div className="lg:col-span-2">
                        <ActivityChart />
                    </div>
                    <div>
                        <PerformanceChart />
                    </div>
                </div>

                <DashboardTables />
            </div>
        </>
    );
}
