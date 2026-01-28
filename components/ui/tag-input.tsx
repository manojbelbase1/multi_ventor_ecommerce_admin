"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { TagInputProps } from "@/types";
import { Button } from "./button";

export function TagInput({ label, placeholder, tags, setTags, required }: TagInputProps) {
    const [inputValue, setInputValue] = React.useState("");

    const addTag = () => {
        if (inputValue.trim() && !tags.includes(inputValue.trim())) {
            setTags([...tags, inputValue.trim()]);
            setInputValue("");
        }
    };

    const removeTag = (indexToRemove: number) => {
        setTags(tags.filter((_, index) => index !== indexToRemove));
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addTag();
        }
    };

    return (
        <div className="w-full space-y-1.5">
            {label && (
                <label className="text-sm font-medium text-foreground">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <div className="space-y-2">
                <div className="relative">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={placeholder}
                        className="flex h-10 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-all font-medium"
                    />
                </div>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span
                            key={`${tag}-${index}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/50 text-foreground text-xs font-semibold rounded-sm border border-border"
                        >
                            {tag}
                            <Button
                                type="button"
                                variant="ghost"
                                onClick={() => removeTag(index)}
                                className="h-4 w-4 p-0 rounded-full hover:bg-muted-foreground/20 text-muted-foreground transition-all active:scale-90"
                            >
                                <X className="w-2.5 h-2.5" />
                            </Button>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
