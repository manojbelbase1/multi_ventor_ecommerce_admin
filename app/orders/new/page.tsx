"use client";

import * as React from "react";
import { AdminLayout } from "@/components/layout/admin-layout";
import { PageHeader } from "@/components/ui";
import { MasterTable, TableAction } from "@/components/table";
import { useI18n } from "@/lib/i18n";
import { mockOrders } from "@/lib/mock-data";
import { Column } from "@/types";
import { formatDate, formatPrice } from "@/lib/utils/format";

export default function NewOrderPage() {
    const { t } = useI18n();
    const [currentPage, setCurrentPage] = React.useState(1);
    const limit = 10;

    const totalItems = mockOrders.length;
    const totalPages = Math.ceil(totalItems / limit);
    const startIndex = (currentPage - 1) * limit;
    const paginatedOrders = mockOrders.slice(startIndex, startIndex + limit);

    const columns: Column[] = [
        { title: "#", key: "index" },
        { title: t("orders.order_id") || "Order ID", key: "id" },
        { title: t("orders.customer_name") || "Customer Name", key: "customerName" },
        { title: t("orders.ordered_date") || "Ordered Date", key: "orderedDate" },
        { title: t("orders.total_items") || "Total Items", key: "totalItems" },
        { title: t("orders.total_amount") || "Total Amount", key: "totalAmount" },
        { title: t("orders.delivery_date") || "Delivery Date", key: "deliveryDate" },
        { title: t("orders.status") || "Status", key: "status" },
        { title: t("common.actions") || "Action", key: "actions" },
    ];

    const rows = paginatedOrders.map((order, index) => ({
        index: startIndex + index + 1,
        id: order.id,
        customerName: order.customerName,
        orderedDate: formatDate(order.orderedDate),
        totalItems: order.totalItems,
        totalAmount: formatPrice(order.totalAmount),
        deliveryDate: formatDate(order.deliveryDate),
        status: (
            <div className="flex items-center gap-2">
                <div
                    className={`w-2 h-2 rounded-full ${order.status === "Delivered" ? "bg-emerald-500" : "bg-slate-400"
                        }`}
                />
                <span className="text-sm text-muted-foreground font-medium">
                    {order.status === "Delivered" ? t("orders.delivered") || "Delivered" : t("orders.pending") || "Pending"}
                </span>
            </div>
        ),
        actions: (
            <TableAction
                onView={() => console.log("View order:", order.id)}
            />
        ),
    }));

    return (
        <>
            <PageHeader
                title={t("orders.new_order") || "New order"}
                showSearch={true}
                showFilter={true}
                showSort={true}
            />

            <MasterTable
                columns={columns}
                rows={rows}
                showCheckbox={true}
                pagination={{
                    currentPage,
                    totalPages,
                    limit,
                    totalItems,
                    onPageChange: setCurrentPage,
                }}
            />
        </>
    );
}
