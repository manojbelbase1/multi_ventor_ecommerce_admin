"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Bell, Search, Moon, Sun, Menu, ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface HeaderProps {
    onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
    const { setTheme, resolvedTheme } = useTheme();
    const { language, setLanguage, t } = useI18n();
    const [mounted, setMounted] = React.useState(false);
    const [langOpen, setLangOpen] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className="h-14 bg-card border-b border-border flex items-center justify-between px-4 lg:px-6 sticky top-0 z-30 shadow-xs">
            {/* Left Side */}
            <div className="flex items-center gap-4">
                {/* Mobile Menu Button */}
                <Button
                    variant="ghost"
                    onClick={onMenuClick}
                    className="lg:hidden p-2 text-foreground"
                    aria-label="Toggle menu"
                >
                    <Menu className="w-5 h-5" />
                </Button>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2 sm:gap-4">
                {/* Search Bar */}
                <div className="relative hidden md:block focus-within:ring-1 focus-within:ring-primary/20 rounded-sm overflow-hidden border border-border transition-all">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder={t("common.search_placeholder")}
                        className="h-9 pl-9 pr-4 bg-background text-sm outline-none border-none w-48 lg:w-64"
                    />
                </div>

                {/* Mobile Search Icon */}
                <Button variant="ghost" className="md:hidden p-2 text-foreground">
                    <Search className="w-5 h-5" />
                </Button>

                {/* Language Switcher */}
                <div className="relative">
                    <Button
                        variant="ghost"
                        onClick={() => setLangOpen(!langOpen)}
                        className="flex items-center gap-1 px-3 h-9 text-sm font-medium hover:bg-accent/80"
                    >
                        <span className="hidden sm:inline">
                            {language === "en" ? "English" : "हिंदी"}
                        </span>
                        <span className="sm:hidden">{language.toUpperCase()}</span>
                        <ChevronDown className="w-3.5 h-3.5 opacity-60 ml-0.5" />
                    </Button>
                    {langOpen && (
                        <>
                            <div
                                className="fixed inset-0 z-10"
                                onClick={() => setLangOpen(false)}
                            />
                            <div className="absolute right-0 top-full mt-1.5 w-36 bg-popover border border-border rounded-sm shadow-lg z-20 p-1 animate-in fade-in slide-in-from-top-2 duration-200">
                                <Button
                                    variant="ghost"
                                    onClick={() => {
                                        setLanguage("en");
                                        setLangOpen(false);
                                    }}
                                    className={cn(
                                        "w-full justify-start px-3 h-9 text-[13px] font-normal transition-all",
                                        language === "en" ? "bg-accent text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    English
                                </Button>
                                <Button
                                    variant="ghost"
                                    onClick={() => {
                                        setLanguage("hi");
                                        setLangOpen(false);
                                    }}
                                    className={cn(
                                        "w-full justify-start px-3 h-9 text-[13px] font-normal transition-all",
                                        language === "hi" ? "bg-accent text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    हिंदी
                                </Button>
                            </div>
                        </>
                    )}
                </div>

                {/* Theme Switcher */}
                <Button
                    variant="ghost"
                    onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                    className="p-2 text-foreground transition-all active:scale-95 hover:bg-accent/80"
                    aria-label="Toggle theme"
                >
                    {mounted && resolvedTheme === "dark" ? (
                        <Sun className="w-5 h-5 text-orange-400" />
                    ) : (
                        <Moon className="w-5 h-5 text-slate-700" />
                    )}
                </Button>

                {/* Notification */}
                <Button variant="ghost" className="p-2 text-foreground relative transition-all active:scale-95 hover:bg-accent/80">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-card pulse-shadow"></span>
                </Button>

                {/* User Profile */}
                <div className="flex items-center gap-2 pl-2 sm:pl-4 border-l border-border ml-1">
                    <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all">
                        <img
                            src="https://github.com/shadcn.png"
                            alt="User"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
