"use client";

import * as React from "react";
import { useParams, useRouter } from "next/navigation";
import { AdminLayout } from "@/components/layout/admin-layout";
import { PageHeader, Button } from "@/components/ui";
import { ProductForm } from "@/components/products/product-form";
import { useI18n } from "@/lib/i18n";
import { mockProducts } from "@/lib/mock-data";

export default function EditProductPage() {
    const { t } = useI18n();
    const router = useRouter();
    const params = useParams();
    const productId = params?.id as string;

    const product = React.useMemo(() => {
        return mockProducts.find((p) => p.id === productId);
    }, [productId]);

    const initialValues = React.useMemo(() => {
        if (!product) return null;
        return {
            name: product.name,
            category: product.category.toLowerCase(),
            subcategory: product.subcategory.toLowerCase(),
            type: "physical",
            description: "Premium quality product with excellent features and durability.",
            unit: "piece",
            size: "lg",
            base_price: product.price.toString(),
            discount: "",
            selling_price: product.price.toString(),
            brand: "guchi",
            color: "Default",
            tags: ["New", "Premium"],
            flags: ["featured"],
            image: product.image,
        };
    }, [product]);

    const handleSubmit = async (values: any) => {
        console.log("Updating product:", productId, values);
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        router.push("/products/list");
    };

    if (!product) {
        return (
            <AdminLayout>
                <div className="p-8 text-center text-foreground flex flex-col items-center justify-center min-h-[400px]">
                    <h2 className="text-xl font-semibold mb-2">Product not found</h2>
                    <p className="text-muted-foreground mb-6">The product you are trying to edit does not exist or has been removed.</p>
                    <Button
                        onClick={() => router.push("/products/list")}
                        className="px-8 h-10"
                    >
                        Back to List
                    </Button>
                </div>
            </AdminLayout>
        );
    }

    return (
        <AdminLayout>
            <PageHeader
                title={t("common.edit") || "Edit Product"}
                showSearch={false}
                showFilter={false}
                showSort={false}
                showBackButton={true}
            />

            <ProductForm
                initialValues={initialValues}
                onSubmit={handleSubmit}
                mode="edit"
            />
        </AdminLayout>
    );
}
