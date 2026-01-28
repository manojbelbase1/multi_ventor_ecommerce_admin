import { ReactNode, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, ButtonHTMLAttributes } from "react";
import { LucideIcon } from "lucide-react";

// --- Navigation & Layout ---
export interface NavItemChild {
    titleKey: string;
    href: string;
}

export interface NavItem {
    titleKey: string;
    href: string;
    icon: LucideIcon;
    children?: NavItemChild[];
}

export interface BreadcrumbItem {
    label: string;
    href?: string;
    isActive?: boolean;
}

export interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

export interface PageHeaderProps {
    title: string;
    breadcrumbs?: BreadcrumbItem[];
    showSearch?: boolean;
    showFilter?: boolean;
    showSort?: boolean;
    showBackButton?: boolean;
    addButton?: {
        label: string;
        onClick: () => void;
    };
    className?: string;
    children?: ReactNode;
}

// --- Table Components ---
export interface Column {
    title: string;
    key: string;
    className?: string;
}

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    limit: number;
    totalItems: number;
    onPageChange: (page: number) => void;
    className?: string;
}

export interface MasterTableProps {
    columns: Column[];
    rows: Record<string, ReactNode | string | number>[];
    loading?: boolean;
    pagination?: Omit<PaginationProps, "className">;
    className?: string;
    emptyMessage?: string;
    showCheckbox?: boolean;
}

export interface TableActionProps {
    onView?: () => void;
    onEdit?: () => void;
    onDelete?: () => void;
}

export interface StatusBadgeProps {
    status: string;
    className?: string;
}

// --- Form Components ---
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    required?: boolean;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    required?: boolean;
    options: { label: string; value: string }[];
    placeholder?: string;
}

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    required?: boolean;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "submit";
}

export interface TagInputProps {
    label?: string;
    placeholder?: string;
    tags: string[];
    setTags: (tags: string[]) => void;
    required?: boolean;
}

export interface FileUploadProps {
    label?: string;
    required?: boolean;
    onFileSelect: (file: File | string | null) => void;
    initialValue?: string | null;
}

// --- i18n ---
export type Language = "en" | "hi";
