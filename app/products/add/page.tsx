"use client";

import * as React from "react";
import { AdminLayout } from "@/components/layout/admin-layout";
import { PageHeader } from "@/components/ui";
import { ProductForm } from "@/components/products/product-form";
import { useI18n } from "@/lib/i18n";
import { useCreateProduct } from "@/lib/hooks/use-products";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
    const { t } = useI18n();
    const router = useRouter();
    const { mutateAsync: createProduct, isPending } = useCreateProduct();

    const handleSubmit = async (values: any) => {
        try {
            await createProduct(values);
            router.push("/products/list");
        } catch (error) {
            console.error("Submission failed:", error);
        }
    };

    return (
        <AdminLayout>
            <PageHeader
                title={t("products.add_product")}
                showSearch={false}
                showFilter={false}
                showSort={false}
                showBackButton={true}
            />

            <ProductForm
                onSubmit={handleSubmit}
                isPending={isPending}
                mode="add"
            />
        </AdminLayout>
    );
}
