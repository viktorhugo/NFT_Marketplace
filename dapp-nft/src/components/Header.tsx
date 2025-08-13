"use client"

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { HandCoins, LayoutDashboard, Menu, Settings, Wallet, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'

const navItems = [
    { 
        name: "List NFTs", 
        icon: <LayoutDashboard className="h-5 w-5" />, 
        href: "/list-nft" },
    { 
        name: "Make Cake", 
        icon: <HandCoins className="h-5 w-5" />, 
        href: "/cake-nft" },
    // { 
    //     name: "Stake", 
    //     icon: <CoinsStacked className="h-5 w-5" />, 
    //     href: "/stake" },
    // { 
    //     name: "Governance", 
    //     icon: <Vote className="h-5 w-5" />, 
    //     href: "/governance" 
    // },
]


export const Header = () => {

    const { theme, setTheme } = useTheme()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [notifications, setNotifications] = useState(3)
    const pathname = usePathname();

    return (
        <div>
            {/* Header */}
            <header className="sticky top-0 z-40 backdrop-blur-sm bg-[blueviolet] border-b border-border/40 position-absolute ">
                <div className="container mx-auto px-4">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center space-x-2">
                                <div className="relative w-8 h-8 bg-gradient-to-br from-pink-500 via-white to-cyan-500 rounded-full overflow-hidden flex items-center justify-center">
                                    <div className="absolute w-6 h-6 bg-background rounded-full"></div>
                                    <div className="absolute w-4 h-4 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full"></div>
                                </div>
                                <span className="font-bold text-xl">NFTs</span>
                            </Link>

                            <nav className="hidden md:ml-10 md:flex md:space-x-8">
                                {
                                    navItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="group flex items-center px-2 py-1 text-sm font-medium rounded-md transition-colors relative"
                                        >
                                            <span className="mr-2">{item.icon}</span>
                                            <span className= {pathname === item.href ? "text-xl" : "text-white"}>{item.name}</span>
                                            <span className=" absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-purple-300 transition-all duration-300 group-hover:w-full"></span>
                                        </Link>
                                    ))
                                }
                                {/* <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon" className="rounded-md">
                                            <MoreHorizontal className="h-5 w-5" />
                                            <span className="sr-only">More</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>Analytics</DropdownMenuItem>
                                        <DropdownMenuItem>Documentation</DropdownMenuItem>
                                        <DropdownMenuItem>Community</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu> */}
                            </nav>
                        </div>

                        <div className="flex items-center space-x-3">
                            {/* <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2 text-xs">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                Ethereum
                            </Button>

                            <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
                                <ArrowLeftRight className="h-4 w-4" />
                                <span>Bridge</span>
                            </Button> */}

                            {/* <Button variant="ghost" size="icon" className="relative">
                                <Bell className="h-5 w-5" />
                                {notifications > 0 && (
                                    <span className="absolute top-1 right-1 flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                                    </span>
                                )}
                            </Button>

                            {mounted && (
                                <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            )} */}

                            {/* <Button variant="outline" size="sm" className="hidden md:inline-flex">
                                <Wallet className="mr-2 h-4 w-4" />
                                Connect Wallet
                            </Button> */}

                            <div className='hidden md:block'>
                                <ConnectButton  />
                            </div>

                            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
                                <Menu className="h-6 w-6" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile menu */}
            { mobileMenuOpen && (
                <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
                    <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-background p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-8">
                            <Link href="/" className="flex items-center space-x-2">
                            <div className="relative w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full overflow-hidden flex items-center justify-center">
                                <div className="absolute w-6 h-6 bg-background rounded-full"></div>
                                <div className="absolute w-4 h-4 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full"></div>
                            </div>
                            <span className="font-bold text-xl">NFTs</span>
                            </Link>
                            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                            <X className="h-6 w-6" />
                            </Button>
                        </div>
                        <nav className="flex flex-col space-y-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center px-2 py-1 text-lg font-medium"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="mr-4">{item.icon}</span>
                                    {item.name}
                                </Link>
                            ))}
                            <hr className="border-border/40" />
                            <div className='mx-auto'>
                                <ConnectButton  />
                            </div>
                            <Button variant="outline" size="lg" className="w-full justify-start">
                                <Settings className="mr-2 h-5 w-5" />
                                Settings
                            </Button>
                        </nav>
                    </div>
                </div>
            )}
        </div>
    )
}
