"use client";

import * as React from "react";
import { X, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { FileUploadProps } from "@/types";
import { Button } from "./button";

export function FileUpload({ label, required, onFileSelect, initialValue }: FileUploadProps) {
    const [preview, setPreview] = React.useState<string | null>(initialValue || null);
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file) {
            onFileSelect(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="w-full space-y-1.5">
            {label && (
                <label className="text-sm font-medium text-foreground">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <div
                onClick={() => fileInputRef.current?.click()}
                className={cn(
                    "relative group cursor-pointer border-2 border-dashed border-upload-border rounded-sm bg-upload-bg hover:bg-accent/5 transition-all overflow-hidden",
                    "min-h-[240px] flex flex-col items-center justify-center p-6 text-center"
                )}
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    accept="image/*"
                />

                {preview ? (
                    <div className="relative w-full h-full min-h-[200px] group/preview">
                        <img
                            src={preview}
                            alt="Preview"
                            className="w-full h-full object-contain rounded-sm shadow-sm"
                        />
                        <Button
                            variant="ghost"
                            onClick={(e) => {
                                e.stopPropagation();
                                setPreview(null);
                                onFileSelect(null);
                            }}
                            className="absolute top-2 right-2 p-0 h-8 w-8 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 border-none transition-all active:scale-90"
                        >
                            <X className="w-4 h-4" />
                        </Button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto transition-transform group-hover:scale-110">
                            <ImageIcon className="w-8 h-8" />
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm font-semibold text-foreground">
                                Drag and drop Image here
                            </p>
                            <p className="text-xs text-muted-foreground">or</p>
                            <Button
                                type="button"
                                variant="submit"
                                className="mt-2 h-9 px-6 rounded-sm shadow-sm"
                            >
                                Upload Image
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
