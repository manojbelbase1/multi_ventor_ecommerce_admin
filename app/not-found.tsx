"use client";

import Link from "next/link";
import { MoveLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-6">
            <div className="max-w-md w-full text-center space-y-8">
                {/* Animated 404 Header */}
                <div className="relative">
                    <h1 className="text-[12rem] font-black text-primary/5 select-none leading-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="space-y-2">
                            <h2 className="text-4xl font-bold text-foreground">Oops!</h2>
                            <p className="text-muted-foreground font-medium">Page Not Found</p>
                        </div>
                    </div>
                </div>

                {/* Dynamic Graphic */}
                <div className="relative w-48 h-48 mx-auto">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                    <div className="relative bg-card border border-border rounded-3xl p-8 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="grid grid-cols-2 gap-2 opacity-40">
                            <div className="h-2 w-12 bg-muted rounded" />
                            <div className="h-2 w-8 bg-muted rounded" />
                            <div className="h-2 w-10 bg-muted rounded" />
                            <div className="h-2 w-6 bg-muted rounded" />
                        </div>
                        <div className="mt-6 flex justify-center">
                            <div className="w-12 h-12 rounded-full border-4 border-dashed border-primary/30 animate-spin-slow" />
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <p className="text-muted-foreground max-w-[280px] mx-auto">
                        The page you are looking for might have been removed or had its name changed.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Button
                            onClick={() => window.history.back()}
                            variant="outline"
                            className="w-full sm:w-auto gap-2"
                        >
                            <MoveLeft className="w-4 h-4" />
                            Go Back
                        </Button>
                        <Link href="/dashboard" className="w-full sm:w-auto">
                            <Button className="w-full gap-2 font-semibold">
                                <Home className="w-4 h-4" />
                                Dashboard
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
        </div>
    );
}
