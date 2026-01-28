"use client";

import * as React from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header";

export function AdminLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    return (
        <div className="min-h-screen bg-background">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="lg:ml-64 min-h-screen flex flex-col">
                <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
                <main className="flex-1 p-4 lg:p-6 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
