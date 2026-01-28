"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { AdminLayout } from "@/components/layout/admin-layout";
import { PageHeader } from "@/components/ui";
import { MasterTable, TableAction, StatusBadge } from "@/components/table";
import { useI18n } from "@/lib/i18n";
import { mockProducts, Product } from "@/lib/mock-data";
import { Column } from "@/types";
import { formatPrice } from "@/lib/utils/format";

import Image from "next/image";
import { DeleteModal } from "@/components/ui/delete-modal";

export default function ProductListPage() {
    const { t } = useI18n();
    const router = useRouter();
    const [currentPage, setCurrentPage] = React.useState(1);
    const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);
    const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);
    const limit = 10;

    const handleAddProduct = () => {
        router.push("/products/add");
    };

    const handleView = (product: Product) => {
        console.log("View product:", product.id);
    };

    const handleEdit = (product: Product) => {
        router.push(`/products/edit/${product.id}`);
    };

    const handleDeleteClick = (product: Product) => {
        setSelectedProduct(product);
        setDeleteModalOpen(true);
    };

    const handleConfirmDelete = () => {
        console.log("Deleted product:", selectedProduct?.id);
        setDeleteModalOpen(false);
        setSelectedProduct(null);
    };

    const paginatedProducts = mockProducts.slice((currentPage - 1) * limit, currentPage * limit);
    const totalItems = mockProducts.length;
    const totalPages = Math.ceil(totalItems / limit);
    const startIndex = (currentPage - 1) * limit;

    const columns: Column[] = [
        { title: "#", key: "index" },
        { title: t("products.product") || "Product", key: "product" },
        { title: t("products.category") || "Category", key: "category" },
        { title: t("products.subcategory") || "Subcategory", key: "subcategory" },
        { title: t("products.price") || "Price", key: "price" },
        { title: t("products.sold") || "Sold", key: "sold" },
        { title: t("products.rating") || "Rating", key: "rating" },
        { title: t("products.stock") || "Stock", key: "stock" },
        { title: t("common.actions") || "Action", key: "actions" },
    ];

    const rows = paginatedProducts.map((product, index) => ({
        index: startIndex + index + 1,
        product: (
            <div className="flex items-center gap-3 py-1">
                <div className="w-10 h-10 rounded-sm bg-accent/50 flex items-center justify-center overflow-hidden border border-border">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                        unoptimized
                    />
                </div>
                <div className="min-w-0">
                    <div className="font-medium text-[13px] text-foreground leading-snug truncate max-w-[180px]">{product.name}</div>
                    <div className="text-[11px] text-muted-foreground">ID: {product.id}</div>
                </div>
            </div>
        ),
        category: product.category,
        subcategory: product.subcategory,
        price: formatPrice(product.price),
        sold: product.sold,
        rating: product.rating,
        stock: (
            <StatusBadge
                status={product.stock === "available" ? t("products.available") || "Available" : t("products.out_of_stock") || "Stock Out"}
            />
        ),
        actions: (
            <TableAction
                onView={() => handleView(product)}
                onEdit={() => handleEdit(product)}
                onDelete={() => handleDeleteClick(product)}
            />
        ),
    }));

    return (
        <>
            <PageHeader
                title={t("products.title") || "Product List"}
                addButton={{
                    label: t("products.add_product") || "Add Product",
                    onClick: handleAddProduct,
                }}
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

            <DeleteModal
                isOpen={deleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onConfirm={handleConfirmDelete}
                itemName={selectedProduct?.name}
            />
        </>
    );
}
