import * as Yup from "yup";

export const productSchema = Yup.object().shape({
    name: Yup.string()
        .required("Product name is required"),
    category: Yup.string()
        .required("Category is required"),
    subcategory: Yup.string()
        .required("Subcategory is required"),
    type: Yup.string(),
    description: Yup.string()
        .required("Description is required"),
    unit: Yup.string()
        .required("Unit is required"),
    size: Yup.string()
        .required("Size is required"),
    base_price: Yup.number()
        .typeError("Must be a number")
        .required("Base price is required")
        .min(0, "Price cannot be negative"),
    discount: Yup.string()
        .required("Discount category is required"),
    selling_price: Yup.number()
        .typeError("Must be a number")
        .required("Selling price is required")
        .min(0, "Price cannot be negative"),
    brand: Yup.string()
        .required("Brand is required"),
    color: Yup.string()
        .required("Color is required"),
});
