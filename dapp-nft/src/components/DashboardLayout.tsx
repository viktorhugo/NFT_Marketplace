"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ThemeProvider } from "@/app/providers/theme.provider"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <div className="min-h-screen bg-gradient-to-b from-background/80 to-background">

                {/* Main content */}
                <main className="container mx-auto px-4 py-8">{children}</main>

                {/* Footer */}
                <footer className="border-t border-border/40 py-6 backdrop-blur-md bg-background/30">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-4 mb-4 md:mb-0">
                            <Link href="/" className="text-sm hover:underline">
                            Terms
                            </Link>
                            <Link href="/" className="text-sm hover:underline">
                            Privacy
                            </Link>
                            <Link href="/" className="text-sm hover:underline">
                            Docs
                            </Link>
                            <Link href="/" className="text-sm hover:underline">
                            FAQs
                            </Link>
                        </div>
                        <div className="text-sm text-muted-foreground">© 2025 NexusFi. All rights reserved.</div>
                    </div>
                </div>
                </footer>
            </div>
        </ThemeProvider>
    )
}
