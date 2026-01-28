"use client";

import { Input, Select, TextArea, Button, TagInput, FileUpload } from "@/components/ui";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { useFormik, FormikProvider } from "formik";
import { productSchema } from "@/lib/schemas/product-schema";

interface ProductFormProps {
    initialValues?: any;
    onSubmit: (values: any) => Promise<void>;
    isPending?: boolean;
    mode: "add" | "edit";
}

export function ProductForm({ initialValues, onSubmit, isPending, mode }: ProductFormProps) {
    const { t } = useI18n();

    const formik = useFormik({
        initialValues: initialValues || {
            name: "",
            category: "",
            subcategory: "",
            type: "physical",
            description: "",
            unit: "",
            size: "",
            base_price: "",
            discount: "",
            selling_price: "",
            brand: "",
            color: "",
            tags: ["Bag", "Bag"],
            flags: ["new-arrival", "featured", "best-seller", "hot-deals"],
            image: null,
        },
        enableReinitialize: true,
        validationSchema: productSchema,
        onSubmit,
    });

    const { values, errors, touched, setFieldValue, isSubmitting } = formik;

    const flags = [
        { id: "new-arrival", labelKey: "products.new_arrival" },
        { id: "featured", labelKey: "products.featured" },
        { id: "best-seller", labelKey: "products.best_seller" },
        { id: "hot-deals", labelKey: "products.hot_deals" },
    ];

    const handleToggleFlag = (id: string) => {
        const currentFlags = [...values.flags];
        const index = currentFlags.indexOf(id);
        if (index === -1) {
            currentFlags.push(id);
        } else {
            currentFlags.splice(index, 1);
        }
        setFieldValue("flags", currentFlags);
    };

    return (
        <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Left Column (Main Info) */}
                <div className="lg:col-span-2 space-y-4">
                    {/* Product Info Section */}
                    <div className="bg-card rounded-sm border border-border p-4 space-y-4 shadow-xs">
                        <h2 className="text-lg font-semibold text-foreground">
                            {t("products.product_info")}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input
                                label={t("products.product_name")}
                                placeholder={t("products.enter_product_name")}
                                name="name"
                                required
                                value={values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={touched.name && errors.name ? String(errors.name) : undefined}
                            />
                            <Select
                                label={t("products.select_category")}
                                placeholder={t("products.select_category")}
                                name="category"
                                options={[
                                    { label: "Electronics", value: "electronics" },
                                    { label: "Groceries", value: "groceries" },
                                ]}
                                required
                                value={values.category}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={touched.category && errors.category ? String(errors.category) : undefined}
                            />
                            <Select
                                label={t("products.select_sub_category")}
                                placeholder={t("products.select_sub_category")}
                                name="subcategory"
                                options={[
                                    { label: "Smart Phone", value: "smart phone" },
                                    { label: "Snacks", value: "snacks" },
                                ]}
                                required
                                value={values.subcategory}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={touched.subcategory && errors.subcategory ? String(errors.subcategory) : undefined}
                            />
                            <Select
                                label={t("products.product_type")}
                                placeholder={t("products.enter_product_type")}
                                name="type"
                                options={[
                                    { label: "Physical", value: "physical" },
                                    { label: "Digital", value: "digital" },
                                ]}
                                value={values.type}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        <TextArea
                            label={t("products.description")}
                            placeholder={t("products.input_description")}
                            name="description"
                            required
                            value={values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={touched.description && errors.description ? String(errors.description) : undefined}
                        />
                    </div>

                    {/* Product Specification Section */}
                    <div className="bg-card rounded-sm border border-border p-4 space-y-4 shadow-xs">
                        <h2 className="text-lg font-semibold text-foreground">
                            {t("products.product_specification")}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Select
                                label={t("products.select_unit")}
                                name="unit"
                                options={[{ label: "Per Piece", value: "piece" }]}
                                required
                                value={values.unit}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={touched.unit && errors.unit ? String(errors.unit) : undefined}
                            />
                            <Select
                                label={t("products.select_size")}
                                name="size"
                                options={[{ label: "Lg", value: "lg" }]}
                                required
                                value={values.size}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={touched.size && errors.size ? String(errors.size) : undefined}
                            />
                            <div className="relative">
                                <Input
                                    label={t("products.base_price")}
                                    placeholder="5000"
                                    name="base_price"
                                    type="number"
                                    required
                                    value={values.base_price}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={touched.base_price && errors.base_price ? String(errors.base_price) : undefined}
                                />
                                <span className="absolute right-3 bottom-2.5 text-xs text-muted-foreground bg-accent px-2 py-0.5 rounded">Rs</span>
                            </div>
                            <Select
                                label={t("products.discount_category")}
                                name="discount"
                                options={[{ label: "New Year Sale", value: "new_year" }]}
                                required
                                value={values.discount}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={touched.discount && errors.discount ? String(errors.discount) : undefined}
                            />
                            <div className="relative">
                                <Input
                                    label={t("products.selling_price")}
                                    placeholder={t("products.auto_generate")}
                                    name="selling_price"
                                    type="number"
                                    required
                                    value={values.selling_price}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={touched.selling_price && errors.selling_price ? String(errors.selling_price) : undefined}
                                />
                                <span className="absolute right-3 bottom-2.5 text-xs text-muted-foreground bg-accent px-2 py-0.5 rounded">Rs</span>
                            </div>
                            <Select
                                label={t("products.brand")}
                                name="brand"
                                options={[{ label: "Guchi", value: "guchi" }]}
                                required
                                value={values.brand}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={touched.brand && errors.brand ? String(errors.brand) : undefined}
                            />
                            <Input
                                label={t("products.color_type")}
                                placeholder="Sky Blue"
                                name="color"
                                required
                                value={values.color}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={touched.color && errors.color ? String(errors.color) : undefined}
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column (Side Options) */}
                <div className="space-y-4">
                    {/* Visible As Flags */}
                    <div className="bg-card rounded-sm border border-border p-6 space-y-4 shadow-xs">
                        <h2 className="text-sm font-semibold text-foreground">
                            {t("products.visible_as")}
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {flags.map((flag) => (
                                <Button
                                    key={flag.id}
                                    type="button"
                                    variant="ghost"
                                    onClick={() => handleToggleFlag(flag.id)}
                                    className={cn(
                                        "inline-flex items-center gap-2 px-3 h-9 rounded-sm border text-[11px] uppercase tracking-wider font-bold transition-all active:scale-95 group",
                                        values.flags.includes(flag.id)
                                            ? "bg-primary/10 border-primary text-primary hover:bg-primary/20"
                                            : "bg-background border-border text-muted-foreground hover:border-primary/50 hover:bg-accent/50 hover:text-foreground"
                                    )}
                                >
                                    <span className={cn(
                                        "w-2 h-2 rounded-full transition-colors",
                                        values.flags.includes(flag.id) ? "bg-primary shadow-[0_0_8px_rgba(234,179,8,0.5)]" : "bg-muted-foreground group-hover:bg-primary/50"
                                    )} />
                                    {t(flag.labelKey)}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="bg-card rounded-sm border border-border p-6 shadow-xs">
                        <TagInput
                            label={t("products.product_tag")}
                            placeholder="Select Product Tags"
                            tags={values.tags}
                            setTags={(newTags) => setFieldValue("tags", newTags)}
                        />
                    </div>

                    {/* Upload Picture */}
                    <div className="bg-card rounded-sm border border-border p-6 shadow-xs">
                        <FileUpload
                            label={t("products.upload_picture")}
                            onFileSelect={(file) => setFieldValue("image", file)}
                            initialValue={typeof values.image === "string" ? values.image : null}
                            required={mode === "add"}
                        />
                        {touched.image && errors.image && (
                            <p className="text-xs text-red-500 mt-1">{String(errors.image)}</p>
                        )}
                    </div>
                </div>

                {/* Submit button Row */}
                <div className="lg:col-span-2">
                    <Button
                        type="submit"
                        variant="submit"
                        disabled={isSubmitting || isPending}
                    >
                        {(isSubmitting || isPending)
                            ? (mode === "add" ? "Submitting..." : "Updating...")
                            : (mode === "add" ? t("common.submit") : (t("common.update") || "Update"))}
                    </Button>
                </div>
            </form>
        </FormikProvider>
    );
}
