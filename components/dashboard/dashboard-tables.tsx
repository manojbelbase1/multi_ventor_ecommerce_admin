"use client";

import { useI18n } from "@/lib/i18n";
import Link from "next/link";

interface ProductItemProps {
    name: string;
    sold: number;
    image: string;
}

function ProductItem({ name, sold, image }: ProductItemProps) {
    const { t } = useI18n();
    return (
        <div className="flex items-center gap-4 py-3 border-b border-border/50 last:border-0">
            <div className="w-12 h-12 bg-accent rounded-lg overflow-hidden shrink-0 relative">
                <div className="absolute inset-0 flex items-center justify-center text-xs text-muted">IMG</div>
            </div>
            <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-foreground truncate">{name}</h4>
                <p className="text-sm text-muted font-medium">{sold} {t("products.sold")}</p>
            </div>
        </div>
    );
}

function LowStockItem({ name, qty }: { name: string; qty: number }) {
    return (
        <div className="flex items-center gap-4 py-3 border-b border-border/50 last:border-0">
            <div className="w-12 h-12 bg-accent rounded-lg overflow-hidden shrink-0 relative">
                <div className="absolute inset-0 flex items-center justify-center text-xs text-muted">IMG</div>
            </div>
            <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-foreground truncate">{name}</h4>
                <p className="text-sm text-status-info font-semibold">Qty {qty}</p>
            </div>
        </div>
    );
}

export function DashboardTables() {
    const { t } = useI18n();

    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-6">
            {/* Top Selling Products */}
            <div className="bg-card rounded-lg p-5 border border-border">
                <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center gap-2">
                        <div className="w-1 h-4 bg-primary rounded-full" />
                        <h3 className="text-base font-semibold text-foreground">{t("dashboard.top_selling_products")}</h3>
                    </div>
                    <Link href="/products/list" className="text-xs text-muted font-bold uppercase tracking-wider hover:text-primary transition-colors">
                        {t("dashboard.view_all")}
                    </Link>
                </div>
                <div className="space-y-1">
                    <ProductItem name="Samsung S25" sold={124} image="" />
                    <ProductItem name="Apple iPhone 14" sold={124} image="" />
                    <ProductItem name="Google Pixel 7" sold={124} image="" />
                    <ProductItem name="OnePlus 10 Pro" sold={124} image="" />
                    <ProductItem name="Sony Xperia 5 IV" sold={124} image="" />
                </div>
            </div>

            {/* Transaction History */}
            <div className="xl:col-span-2 bg-card rounded-lg p-5 border border-border">
                <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center gap-2">
                        <div className="w-1 h-4 bg-primary rounded-full" />
                        <h3 className="text-base font-semibold text-foreground">{t("dashboard.transaction_history")}</h3>
                    </div>
                    <Link href="/transactions" className="text-xs text-muted font-bold uppercase tracking-wider hover:text-primary transition-colors">
                        {t("dashboard.view_all")}
                    </Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left border-b border-border">
                                <th className="pb-3 text-xs font-semibold text-muted-foreground">Transaction ID</th>
                                <th className="pb-3 text-xs font-semibold text-muted-foreground">Customer Name</th>
                                <th className="pb-3 text-xs font-semibold text-muted-foreground">Order Date</th>
                                <th className="pb-3 text-xs font-semibold text-muted-foreground">Payment Method</th>
                                <th className="pb-4 text-sm font-semibold text-muted-foreground">Total Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/50">
                            {[1, 2, 3, 4].map((i) => (
                                <tr key={i} className="group">
                                    <td className="py-3 text-xs font-medium text-muted">Tx-001245</td>
                                    <td className="py-3 text-xs font-semibold text-foreground">Haruto Sato</td>
                                    <td className="py-3 text-xs font-medium text-muted">Apr 30, 2028</td>
                                    <td className="py-3 text-xs font-medium text-foreground">Esewa</td>
                                    <td className="py-3 text-xs font-semibold text-foreground">1500</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* New Orders */}
            <div className="xl:col-span-2 bg-card rounded-lg p-5 border border-border">
                <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center gap-2">
                        <div className="w-1 h-4 bg-primary rounded-full" />
                        <h3 className="text-base font-semibold text-foreground">{t("dashboard.new_orders")}</h3>
                    </div>
                    <Link href="/orders/list" className="text-xs text-muted font-bold uppercase tracking-wider hover:text-primary transition-colors">
                        {t("dashboard.view_all")}
                    </Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left border-b border-border">
                                <th className="pb-3 text-xs font-semibold text-muted-foreground">Order ID</th>
                                <th className="pb-3 text-xs font-semibold text-muted-foreground">Customer Name</th>
                                <th className="pb-3 text-xs font-semibold text-muted-foreground">Order Date</th>
                                <th className="pb-3 text-xs font-semibold text-muted-foreground">Total Items</th>
                                <th className="pb-4 text-sm font-semibold text-muted-foreground">Total Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/50">
                            {[1, 2].map((i) => (
                                <tr key={i}>
                                    <td className="py-3 text-xs font-medium text-muted">Or-003457</td>
                                    <td className="py-3 text-xs font-semibold text-foreground">Itachi Uchiha</td>
                                    <td className="py-3 text-xs font-medium text-muted">Jan 3, 2025</td>
                                    <td className="py-3 text-xs font-medium text-foreground">2</td>
                                    <td className="py-3 text-xs font-semibold text-foreground">300</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Low Stock Products */}
            <div className="bg-card rounded-lg p-5 border border-border">
                <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center gap-2">
                        <div className="w-1 h-4 bg-primary rounded-full" />
                        <h3 className="text-base font-semibold text-foreground">{t("dashboard.low_stock_products")}</h3>
                    </div>
                    <Link href="/products/list" className="text-xs text-muted font-bold uppercase tracking-wider hover:text-primary transition-colors">
                        {t("dashboard.view_all")}
                    </Link>
                </div>
                <div className="space-y-1">
                    <LowStockItem name="Samsung S25" qty={11} />
                    <LowStockItem name="Apple iPhone 14" qty={11} />
                    <LowStockItem name="Google Pixel 7" qty={11} />
                </div>
            </div>
        </div>
    );
}
